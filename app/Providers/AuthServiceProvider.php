<?php

namespace App\Providers;

use App\Policies\CompanyPolicy;
use App\Policies\CustomerPolicy;
use App\Policies\DashboardPolicy;
use App\Policies\ItemPolicy;
use App\Policies\ModulesPolicy;
use App\Policies\OwnerPolicy;
use App\Policies\ReportPolicy;
use App\Policies\SettingsPolicy;
use App\Policies\UserPolicy;
use Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        \App\Models\Customer::class => \App\Policies\CustomerPolicy::class,
        \App\Models\CustomField::class => \App\Policies\CustomFieldPolicy::class,
        \App\Models\User::class => \App\Policies\UserPolicy::class,
        \App\Models\Item::class => \App\Policies\ItemPolicy::class,
        \Silber\Bouncer\Database\Role::class => \App\Policies\RolePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('create company', [CompanyPolicy::class, 'create']);
        Gate::define('transfer company ownership', [CompanyPolicy::class, 'transferOwnership']);
        Gate::define('delete company', [CompanyPolicy::class, 'delete']);

        Gate::define('manage modules', [ModulesPolicy::class, 'manageModules']);

        Gate::define('manage settings', [SettingsPolicy::class, 'manageSettings']);
        Gate::define('manage company', [SettingsPolicy::class, 'manageCompany']);
        Gate::define('manage backups', [SettingsPolicy::class, 'manageBackups']);
        Gate::define('manage file disk', [SettingsPolicy::class, 'manageFileDisk']);
        Gate::define('manage email config', [SettingsPolicy::class, 'manageEmailConfig']);

        Gate::define('delete multiple customers', [CustomerPolicy::class, 'deleteMultiple']);
        Gate::define('delete multiple users', [UserPolicy::class, 'deleteMultiple']);

        Gate::define('view dashboard', [DashboardPolicy::class, 'view']);

        Gate::define('view report', [ReportPolicy::class, 'viewReport']);

        Gate::define('owner only', [OwnerPolicy::class, 'managedByOwner']);
    }
}
