<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Silber\Bouncer\BouncerFacade;
use Silber\Bouncer\Bouncer;
use Silber\Bouncer\Database\Role;
use Silber\Bouncer\Database\Ability;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Carbon\Carbon;

class Company extends Model implements HasMedia
{
    use InteractsWithMedia;

    use HasFactory;

    protected $guarded = [
        'id'
    ];

    public const COMPANY_LEVEL = 'company_level';
    public const CUSTOMER_LEVEL = 'customer_level';

    protected $appends = ['logo', 'logo_path'];

    public function getRolesAttribute()
    {
        return Role::all();//where('scope', $this->id)->get();
    }

    public function getLogoPathAttribute()
    {
        $logo = $this->getMedia('logo')->first();

        $isSystem = FileDisk::whereSetAsDefault(true)->first()->isSystem();

        if ($logo) {
            if ($isSystem) {
                return $logo->getPath();
            } else {
                return $logo->getFullUrl();
            }
        }

        return null;
    }

    public function getLogoAttribute()
    {
        $logo = $this->getMedia('logo')->first();

        if ($logo) {
            return $logo->getFullUrl();
        }

        return null;
    }

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function settings()
    {
        return $this->hasMany(CompanySetting::class);
    }

    

    public function customFields()
    {
        return $this->hasMany(CustomField::class);
    }

    public function customFieldValues()
    {
        return $this->hasMany(CustomFieldValue::class);
    }

    public function scopeWhereDisplayName($query, $displayName)
    {
        return $query->where('name', 'LIKE', '%'.$displayName.'%');
    }

    public function scopeApplyFilters($query, array $filters)
    {
        $filters = collect($filters);

        if ($filters->get('search')) {
            $query->whereSearch($filters->get('search'));
        }

        if ($filters->get('display_name')) {
            $query->whereDisplayName($filters->get('display_name'));
        }

        

        if ($filters->get('orderByField') || $filters->get('orderBy')) {
            $field = $filters->get('orderByField') ? $filters->get('orderByField') : 'name';
            $orderBy = $filters->get('orderBy') ? $filters->get('orderBy') : 'asc';
            $query->orderBy($field, $orderBy);
        }
    }
   

    public function items()
    {
        return $this->hasMany(Item::class);
    }

   

    public function address()
    {
        return $this->hasOne(Address::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_company', 'company_id', 'user_id');
    }

    public function setupRoles()
    {
        BouncerFacade::scope()->to($this->id);

        $super_admin = BouncerFacade::role()->firstOrCreate([
            'name' => 'super admin',
            'title' => 'Super Admin',
            'scope' => $this->id
        ]);

        Bouncer::allow('super admin')->everything();

        // foreach (config('abilities.abilities') as $ability) {
        //     BouncerFacade::allow($super_admin)->to($ability['ability'], $ability['model']);
        // }
    }

 

    public function setupDefaultSettings() 
    {
        $settings = [
            'time_zone' => 'Asia/Kolkata',
            'language' => 'en',
            'carbon_date_format' => 'Y/m/d',
            'moment_date_format' => 'YYYY/MM/DD',
            'notification_email' => 'noreply@test.com',
        ];

        CompanySetting::setSettings($settings, $this->id);
    }

    public function setupDefaultData()
    {
        // $this->setupRoles();
        BouncerFacade::scope()->to($this->id);
        $this->setupDefaultSettings();

        return true;
    }

    public function deleteCompany($user)
    {

        if ($this->customFieldValues()->exists()) {
            $this->customFieldValues()->delete();
        }


        if ($this->customFields()->exists()) {
            $this->customFields()->delete();
        }

        

        if ($this->items()->exists()) {
            $this->items()->delete();
        }

       

        if ($this->customers()->exists()) {
            $this->customers->map(function ($customer) {
                if ($customer->addresses()->exists()) {
                    $customer->addresses()->delete();
                }

                $customer->delete();
            });
        }

        $roles = Role::when($this->id, function ($query) {
            return $query->where('scope', $this->id);
        })->get();

        if ($roles) {
            $roles->map(function ($role) {
                $role->delete();
            });
        }

        // remove all abilities
        $abilities = Ability::when($this->id, function ($query) {
            return $query->where('scope', $this->id);
        })->get();

        if ($abilities) {
            $abilities->map(function ($ability) {
                $ability->delete();
            });
        }


        if ($this->users()->exists()) {
            $user->companies()->detach($this->id);
        }

        $this->settings()->delete();

        $this->address()->delete();

        $this->delete();

        return true;
    }

    public function checkModelData($model)
    {
        $model->items->map(function ($item) {
            

            $item->delete();
        });

        
    }

    public function hasTransactions()
    {
        if (
            $this->customers()->exists() ||
            $this->items()->exists() 
        ) {
            return true;
        }

        return false;
    }

    public function getFormattedCreatedAtAttribute($value)
    {
        $dateFormat = CompanySetting::getSetting('carbon_date_format', request()->header('company'));

        return Carbon::parse($this->created_at)->format($dateFormat);
    }
}

