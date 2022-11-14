<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\Setting;
use App\Models\CompanySetting;
use App\Models\FileDisk;
use App\Models\User;
use Illuminate\Database\Seeder;


class DemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::whereIs('super admin')->first();

        $user->setSettings(['language' => 'en']);

        Address::create(['company_id' => $user->companies()->first()->id, 'country_id' => 1]);

        Setting::setSetting('profile_complete', 'COMPLETED');

        \Storage::disk('local')->put('database_created', 'database_created');


        $this->fileDiskSeed();

        Setting::setSetting('version', '4.0.0');
    }

    private function fileDiskSeed()
    {
        $privateDisk = [
            'root' => config('filesystems.disks.local.root'),
            'driver' => 'local',
        ];

        $publicDisk = [
            'driver' => 'local',
            'root' => storage_path('app/public'),
            'url' => env('APP_URL').'/storage',
            'visibility' => 'public',
        ];

        FileDisk::create([
            'credentials' => json_encode($publicDisk),
            'name' => 'local_public',
            'type' => 'SYSTEM',
            'driver' => 'local',
            'set_as_default' => false,
        ]);

        FileDisk::create([
            'credentials' => json_encode($privateDisk),
            'name' => 'local_private',
            'type' => 'SYSTEM',
            'driver' => 'local',
            'set_as_default' => true,
        ]);
    }

    
}
