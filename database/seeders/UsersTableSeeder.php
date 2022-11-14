<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Database\Seeder;
use Silber\Bouncer\BouncerFacade;
use Vinkla\Hashids\Facades\Hashids;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'email' => 'abc@gmail.com',
            'name' => 'Admin',
            'role' => 'super admin',
            'password' => '123456',
        ]);

        $company = Company::create([
            'name' => 'xyz',
            'owner_id' => $user->id,
            'slug' => 'xyz'
        ]);

        $company->unique_hash = Hashids::connection(Company::class)->encode($company->id);
        $company->save();
        $company->setupDefaultData();
        $user->companies()->attach($company->id);
        BouncerFacade::scope()->to($company->id);

        $user->assign('super admin');

        BouncerFacade::allow('super admin')->everything();

        Setting::setSetting('profile_complete', 'COMPLETED');
    }
}
