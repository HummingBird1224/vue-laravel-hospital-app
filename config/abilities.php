<?php

use App\Models\Customer;
use App\Models\User;
use App\Models\CustomField;
use App\Models\Item;
use Silber\Bouncer\Database\Role;

return [
    'abilities' => [

         // User
         [
            "name" => "view user",
            "ability" => "view-user",
            "model" => User::class,
        ],
        [
            "name" => "create user",
            "ability" => "create-user",
            "model" => User::class,
            "depends_on" => [
                'view-user',
            ]
        ],
        [
            "name" => "edit user",
            "ability" => "edit-user",
            "model" => User::class,
            "depends_on" => [
                'view-user',
            ]
        ],
        [
            "name" => "delete user",
            "ability" => "delete-user",
            "model" => User::class,
            "depends_on" => [
                'view-user',
            ]
        ],

        // Role
        [
            "name" => "manage role",
            "ability" => "manage-role",
            "model" => Role::class,
        ],
    ]

    ];

return [
    'abilities' => [

        // Customer
        [
            "name" => "view customer",
            "ability" => "view-customer",
            "model" => Customer::class,
        ],
        [
            "name" => "create customer",
            "ability" => "create-customer",
            "model" => Customer::class,
            "depends_on" => [
                'view-customer',
                'view-custom-field',
            ]
        ],
        [
            "name" => "edit customer",
            "ability" => "edit-customer",
            "model" => Customer::class,
            "depends_on" => [
                'view-customer',
                'view-custom-field',
            ]
        ],
        [
            "name" => "delete customer",
            "ability" => "delete-customer",
            "model" => Customer::class,
            "depends_on" => [
                'view-customer',
            ]
        ],

         // Role
         [
            "name" => "view role",
            "ability" => "view-role",
            "model" => Role::class,
        ],
        [
            "name" => "create user",
            "ability" => "create-user",
            "model" => User::class,
            "depends_on" => [
                'view-user',
                'view-custom-field',
            ]
        ],
        [
            "name" => "edit user",
            "ability" => "edit-user",
            "model" => User::class,
            "depends_on" => [
                'view-user',
                'view-custom-field',
            ]
        ],
        [
            "name" => "delete user",
            "ability" => "delete-user",
            "model" => User::class,
            "depends_on" => [
                'view-user',
            ]
        ],

        // Item
        [
            "name" => "view item",
            "ability" => "view-item",
            "model" => Item::class,
        ],
        [
            "name" => "create item",
            "ability" => "create-item",
            "model" => Item::class,
            "depends_on" => [
                'view-item',
                'view-tax-type'
            ]
        ],
        [
            "name" => "edit item",
            "ability" => "edit-item",
            "model" => Item::class,
            "depends_on" => [
                'view-item',
            ]
        ],
        [
            "name" => "delete item",
            "ability" => "delete-item",
            "model" => Item::class,
            "depends_on" => [
                'view-item',
            ]
        ],

        
        // Custom Field
        [
            "name" => "view custom field",
            "ability" => "view-custom-field",
            "model" => CustomField::class,
        ],
        [
            "name" => "create custom field",
            "ability" => "create-custom-field",
            "model" => CustomField::class,
            "depends_on" => [
                'view-custom-field',
            ]
        ],
        [
            "name" => "edit custom field",
            "ability" => "edit-custom-field",
            "model" => CustomField::class,
            "depends_on" => [
                'view-custom-field',
            ]
        ],
        [
            "name" => "delete custom field",
            "ability" => "delete-custom-field",
            "model" => CustomField::class,
            "depends_on" => [
                'view-custom-field',
            ]
        ],

        // Financial Reports
        [
            "name" => "view financial reports",
            "ability" => "view-financial-reports",
            "model" => null,
        ],

        
        
        

        // Settings
        [
            "name" => "view company dashboard",
            "ability" => "dashboard",
            "model" => null,
        ],
        [
            "name" => "manage company",
            "ability" => "manage-company",
            "model" => null,
        ],
       
      
    ]
];
