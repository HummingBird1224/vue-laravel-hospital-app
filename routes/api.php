<?php

use App\Http\Controllers\AppVersionController;
use App\Http\Controllers\V1\Admin\Auth\ForgotPasswordController;
use App\Http\Controllers\V1\Admin\Auth\ResetPasswordController;
use App\Http\Controllers\V1\Admin\Backup\BackupsController;
use App\Http\Controllers\V1\Admin\Backup\DownloadBackupController;
use App\Http\Controllers\V1\Admin\Company\CompaniesController;
use App\Http\Controllers\V1\Admin\Company\CompanyController as AdminCompanyController;
use App\Http\Controllers\V1\Admin\Customer\CustomersController;
use App\Http\Controllers\V1\Admin\Customer\CustomerStatsController;
use App\Http\Controllers\V1\Admin\CustomField\CustomFieldsController;
use App\Http\Controllers\V1\Admin\Dashboard\DashboardController;
use App\Http\Controllers\V1\Admin\General\BootstrapController;
use App\Http\Controllers\V1\Admin\General\ConfigController;
use App\Http\Controllers\V1\Admin\General\CountriesController;
use App\Http\Controllers\V1\Admin\General\DateFormatsController;
use App\Http\Controllers\V1\Admin\General\NextNumberController;
use App\Http\Controllers\V1\Admin\General\NotesController;
use App\Http\Controllers\V1\Admin\General\NumberPlaceholdersController;
use App\Http\Controllers\V1\Admin\General\SearchController;
use App\Http\Controllers\V1\Admin\General\SearchUsersController;
use App\Http\Controllers\V1\Admin\General\TimezonesController;
use App\Http\Controllers\V1\Admin\Item\ItemsController;
use App\Http\Controllers\V1\Admin\Item\UnitsController;
use App\Http\Controllers\V1\Admin\Mobile\AuthController;
use App\Http\Controllers\V1\Admin\Modules\ApiTokenController;
use App\Http\Controllers\V1\Admin\Modules\CompleteModuleInstallationController;
use App\Http\Controllers\V1\Admin\Modules\CopyModuleController;
use App\Http\Controllers\V1\Admin\Modules\DisableModuleController;
use App\Http\Controllers\V1\Admin\Modules\DownloadModuleController;
use App\Http\Controllers\V1\Admin\Modules\EnableModuleController;
use App\Http\Controllers\V1\Admin\Modules\ModuleController;
use App\Http\Controllers\V1\Admin\Modules\ModulesController;
use App\Http\Controllers\V1\Admin\Modules\UnzipModuleController;
use App\Http\Controllers\V1\Admin\Modules\UploadModuleController;
use App\Http\Controllers\V1\Admin\Role\AbilitiesController;
use App\Http\Controllers\V1\Admin\Role\RolesController;
use App\Http\Controllers\V1\Admin\Settings\CompanyController;
use App\Http\Controllers\V1\Admin\Settings\DiskController;
use App\Http\Controllers\V1\Admin\Settings\CompanyCurrencyCheckTransactionsController;
use App\Http\Controllers\V1\Admin\Settings\GetCompanyMailConfigurationController;
use App\Http\Controllers\V1\Admin\Settings\GetCompanySettingsController;
use App\Http\Controllers\V1\Admin\Settings\GetSettingsController;
use App\Http\Controllers\V1\Admin\Settings\GetUserSettingsController;
use App\Http\Controllers\V1\Admin\Settings\MailConfigurationController;
use App\Http\Controllers\V1\Admin\Settings\UpdateCompanySettingsController;
use App\Http\Controllers\V1\Admin\Settings\UpdateSettingsController;
use App\Http\Controllers\V1\Admin\Settings\UpdateUserSettingsController;
use App\Http\Controllers\V1\Admin\Users\UsersController;
use App\Http\Controllers\V1\Customer\Auth\ForgotPasswordController as AuthForgotPasswordController;
use App\Http\Controllers\V1\Customer\Auth\ResetPasswordController as AuthResetPasswordController;
use App\Http\Controllers\V1\Customer\General\BootstrapController as CustomerBootstrapController;
use App\Http\Controllers\V1\Customer\General\DashboardController as CustomerDashboardController;
use App\Http\Controllers\V1\Customer\General\ProfileController as CustomerProfileController;
use App\Http\Controllers\V1\Webhook\CronJobController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// ping
//----------------------------------

Route::get('ping', function () {
    return response()->json([
        'success' => 'App-self-hosted',
    ]);
})->name('ping');


// Version 1 endpoints
// --------------------------------------
Route::prefix('/v1')->group(function () {


    // App version
    // ----------------------------------

    Route::get('/app/version', AppVersionController::class);


    // Authentication & Password Reset
    //----------------------------------

    Route::group(['prefix' => 'auth'], function () {
        Route::post('login', [AuthController::class, 'login']);

        Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

        // Send reset password mail
        Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->middleware("throttle:10,2");

        // handle reset password form process
        Route::post('reset/password', [ResetPasswordController::class, 'reset']);
    });


    // Countries
    //----------------------------------

    Route::get('/countries', CountriesController::class);


  


    Route::middleware(['auth:sanctum', 'company'])->group(function () {
        Route::middleware(['bouncer'])->group(function () {

            // Bootstrap
            //----------------------------------

            Route::get('/bootstrap', BootstrapController::class);

            


            // Dashboard
            //----------------------------------

            Route::get('/dashboard', DashboardController::class);


            // Auth check
            //----------------------------------

            Route::get('/auth/check', [AuthController::class, 'check']);


            // Search users
            //----------------------------------

            Route::get('/search', SearchController::class);

            Route::get('/search/user', SearchUsersController::class);


            // MISC
            //----------------------------------

            Route::get('/config', ConfigController::class);


            Route::get('/timezones', TimezonesController::class);

            Route::get('/date/formats', DateFormatsController::class);

            Route::get('/next-number', NextNumberController::class);

            Route::get('/number-placeholders', NumberPlaceholdersController::class);

            Route::get('/current-company', AdminCompanyController::class);


            // Customers
            //----------------------------------

            Route::post('/customers/delete', [CustomersController::class, 'delete']);

            Route::get('customers/{customer}/stats', CustomerStatsController::class);

            Route::resource('customers', CustomersController::class);


            // Items
            //----------------------------------

            Route::post('/items/delete', [ItemsController::class, 'delete']);

            Route::resource('items', ItemsController::class);

            Route::resource('units', UnitsController::class);



            // Custom fields
            //----------------------------------

            Route::resource('custom-fields', CustomFieldsController::class);


            // Backup & Disk
            //----------------------------------

            Route::apiResource('backups', BackupsController::class);

            Route::apiResource('/disks', DiskController::class);

            Route::get('download-backup', DownloadBackupController::class);

            Route::get('/disk/drivers', [DiskController::class, 'getDiskDrivers']);




            // Settings
            //----------------------------------


            Route::get('/me', [CompanyController::class, 'getUser']);

            Route::put('/me', [CompanyController::class, 'updateProfile']);

            Route::get('/me/settings', GetUserSettingsController::class);

            Route::put('/me/settings', UpdateUserSettingsController::class);

            Route::post('/me/upload-avatar', [CompanyController::class, 'uploadAvatar']);


            Route::put('/company', [CompanyController::class, 'updateCompany']);

            Route::post('/company/upload-logo', [CompanyController::class, 'uploadCompanyLogo']);

            Route::get('/company/settings', GetCompanySettingsController::class);

            Route::post('/company/settings', UpdateCompanySettingsController::class);

            Route::get('/settings', GetSettingsController::class);

            Route::post('/settings', UpdateSettingsController::class);

            Route::get('/company/has-transactions', CompanyCurrencyCheckTransactionsController::class);


            // Mails
            //----------------------------------

            Route::get('/mail/drivers', [MailConfigurationController::class, 'getMailDrivers']);

            Route::get('/mail/config', [MailConfigurationController::class, 'getMailEnvironment']);

            Route::post('/mail/config', [MailConfigurationController::class, 'saveMailEnvironment']);

            Route::post('/mail/test', [MailConfigurationController::class, 'testEmailConfig']);

            Route::get('/company/mail/config', GetCompanyMailConfigurationController::class);

            Route::apiResource('notes', NotesController::class);


            


            // Roles
            //----------------------------------

            Route::get('abilities', AbilitiesController::class);

            Route::apiResource('roles', RolesController::class);
        });


        

        // Companies
        //-------------------------------------------------

        Route::post('companies', [CompaniesController::class, 'store']);

        Route::post('/transfer/ownership/{user}', [CompaniesController::class, 'transferOwnership']);

        Route::post('companies/delete', [CompaniesController::class, 'destroy']);

        Route::get('companies', [CompaniesController::class, 'getUserCompanies']);
        Route::get('facilities', [CompaniesController::class, 'index']);


        // Users
        //----------------------------------

        Route::post('/users/delete', [UsersController::class, 'delete']);

        Route::apiResource('/users', UsersController::class);


        // Modules
        //----------------------------------

        Route::prefix('/modules')->group(function () {
            Route::get('/', ModulesController::class);

            Route::get('/check', ApiTokenController::class);

            Route::get('/{module}', ModuleController::class);

            Route::post('/{module}/enable', EnableModuleController::class);

            Route::post('/{module}/disable', DisableModuleController::class);

            Route::post('/download', DownloadModuleController::class);

            Route::post('/upload', UploadModuleController::class);

            Route::post('/unzip', UnzipModuleController::class);

            Route::post('/copy', CopyModuleController::class);

            Route::post('/complete', CompleteModuleInstallationController::class);
        });
    });


    Route::prefix('/{company:slug}/customer')->group(function () {


        // Authentication & Password Reset
        //----------------------------------

        Route::group(['prefix' => 'auth'], function () {

            // Send reset password mail
            Route::post('password/email', [AuthForgotPasswordController::class, 'sendResetLinkEmail']);

            // handle reset password form process
            Route::post('reset/password', [AuthResetPasswordController::class, 'reset'])->name('customer.password.reset');
        });



        Route::middleware(['auth:customer', 'customer-portal'])->group(function () {
            Route::get('/bootstrap', CustomerBootstrapController::class);

            Route::get('/dashboard', CustomerDashboardController::class);

           

            Route::post('/profile', [CustomerProfileController::class, 'updateProfile']);

            Route::get('/me', [CustomerProfileController::class, 'getUser']);

            Route::get('/countries', CountriesController::class);
        });
    });
});

Route::get('/cron', CronJobController::class)->middleware('cron-job');
