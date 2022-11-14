<?php

use App\Models\Customer;
use App\Models\User;
use App\Models\CustomField;
use Silber\Bouncer\Database\Role;


return [

    /*
    * List of languages supported by App.
    */
    'languages' => [
        ["code" => "en", "name" => "English"],
        ["code" => "es", "name" => "Spanish"]
    ],

    /*
    * List of setting menu
    */
    'setting_menu' => [
        [
            'title' => 'settings.menu_title.account_settings',
            'group' => '',
            'name' => 'Account Settings',
            'link' => '/admin/settings/account-settings',
            'icon' => 'UserIcon',
            'owner_only' => false,
            'ability' => '',
            'model' => ''
        ],
        
        [
            'title' => 'settings.menu_title.clinic',
            'group' => '',
            'name' => 'Clinic',
            'link' => '/admin/settings/clinic',
            'icon' => 'OfficeBuildingIcon',
            'owner_only' => false,
            'ability' => 'manage-company',
            'model' => ''
        ],
        
        [
            'title' => 'settings.menu_title.preferences',
            'group' => '',
            'name' => 'Preferences',
            'link' => '/admin/settings/preferences',
            'icon' => 'CogIcon',
            'owner_only' => false,
            'ability' => 'manage-company',
            'model' => ''
        ],
        /*
        [
            'title' => 'settings.menu_title.customization',
            'group' => '',
            'name' => 'Customization',
            'link' => '/admin/settings/customization',
            'icon' => 'PencilAltIcon',
            'owner_only' => false,
            'ability' => 'manage-company',
            'model' => ''
        ],
        */
        
        [
            'title' => 'settings.roles.title',
            'group' => '',
            'name' => 'Roles',
            'link' => '/admin/settings/roles-settings',
            'icon' => 'UserGroupIcon',
            'owner_only' => false,
            'ability' => 'manage-role',
            'model' => Role::class
        ],
       /*
        [
            'title' => 'settings.menu_title.notifications',
            'group' => '',
            'name' => 'Notifications',
            'link' => '/admin/settings/notifications',
            'icon' => 'BellIcon',
            'owner_only' => false,
            'ability' => 'manage-company',
            'model' => ''
        ],
        [
            'title' => 'settings.menu_title.custom_fields',
            'group' => '',
            'name' => 'Custom fields',
            'link' => '/admin/settings/custom-fields',
            'icon' => 'CubeIcon',
            'owner_only' => false,
            'ability' => 'view-custom-field',
            'model' => CustomField::class
        ],
        [
            'title' => 'settings.mail.mail_config',
            'group' => '',
            'name' => 'Mail Configuration',
            'link' => '/admin/settings/mail-configuration',
            'icon' => 'MailIcon',
            'owner_only' => true,
            'ability' => '',
            'model' => ''
        ],
        [
            'title' => 'settings.menu_title.file_disk',
            'group' => '',
            'name' => 'File Disk',
            'link' => '/admin/settings/file-disk',
            'icon' => 'FolderIcon',
            'owner_only' => true,
            'ability' => '',
            'model' => ''
        ],
        [
            'title' => 'settings.menu_title.backup',
            'group' => '',
            'name' => 'Backup',
            'link' => '/admin/settings/backup',
            'icon' => 'DatabaseIcon',
            'owner_only' => true,
            'ability' => '',
            'model' => ''
        ],
       */
    ],

    /*
    * List of main menu
    */
    'main_menu' => [
        [
            'title' => 'navigation.dashboard',
            'group' => 1,
            'link' => '/admin/dashboard',
            'icon' => 'HomeIcon',
            'name' => 'Dashboard',
            'owner_only' => false,
            'ability' => 'dashboard',
            'model' => ''
        ],
        // [
        //     'title' => 'navigation.customers',
        //     'group' => 1,
        //     'link' => '/admin/customers',
        //     'icon' => 'UserIcon',
        //     'name' => 'Customers',
        //     'owner_only' => false,
        //     'ability' => 'view-customer',
        //     'model' => Customer::class
        // ],


        [
            'title' => 'Facilities',
            'group' => 3,
            'link' => '/admin/facilities',
            'icon' => 'PlusIcon',
            'name' => 'Modules',
            'owner_only' => false,
            'ability' => 'view-user',
            'model' => ''
        ],

        [
            'title' => 'Nurses',
            'group' => 3,
            'link' => '#',
            'icon' => 'UserIcon',
            'name' => 'Modules',
            'owner_only' => false,
            'ability' => 'view-user',
            'model' => ''
        ],
       
        
       
        // [
        //     'title' => 'navigation.modules',
        //     'group' => 3,
        //     'link' => '/admin/modules',
        //     'icon' => 'PuzzleIcon',
        //     'name' => 'Modules',
        //     'owner_only' => true,
        //     'ability' => '',
        //     'model' => ''
        // ],
        [
            'title' => 'navigation.users',
            'group' => 3,
            'link' => '/admin/users',
            'icon' => 'UsersIcon',
            'name' => 'Users',
            'owner_only' => false,
            'ability' => 'view-user',
            'model' => User::class
        ],
        // [
        //     'title' => 'navigation.reports',
        //     'group' => 3,
        //     'link' => '/admin/reports',
        //     'icon' => 'ChartBarIcon',
        //     'name' => 'Reports',
        //     'owner_only' => false,
        //     'ability' => 'view-financial-reports',
        //     'model' => ''
        // ],
        [
            'title' => 'navigation.settings',
            'group' => 3,
            'link' => '/admin/settings',
            'icon' => 'CogIcon',
            'name' => 'Settings',
            'owner_only' => false,
            'ability' => '',
            'model' => ''
        ],
    ],

    /*
    * List of customer portal menu
    */
    'customer_menu' => [
        [
            'title' => 'Dashboard',
            'link' => '/customer/dashboard',
            'icon' => '',
            'name' => '',
            'ability' => '',
            'owner_only' => false,
            'group' => '',
            'model' => ''
        ],
       
      
        
        
        [
            'title' => 'Settings',
            'link' => '/customer/settings',
            'icon' => '',
            'name' => '',
            'owner_only' => false,
            'ability' => '',
            'group' => '',
            'model' => ''
        ],
    ],

   

    /*
    * List of Custom field supported models
    */
    'custom_field_models' => [
        'Customer',
        
    ],

   

];
