<?php

namespace App\Listeners\Updates\v3;

use Artisan;
use App\Events\UpdateFinished;
use App\Listeners\Updates\Listener;
use App\Models\Currency;
use App\Models\Setting;

class Version310 extends Listener
{
    public const VERSION = '3.1.0';

    /**
     * Handle the event.
     *
     * @param UpdateFinished $event
     * @return void
     */
    public function handle(UpdateFinished $event)
    {
        if ($this->isListenerFired($event)) {
            return;
        }

        Currency::firstOrCreate(
            [
                'name' => 'Kyrgyzstani som',
                'code' => 'KGS',
            ],
            [
                'name' => 'Kyrgyzstani som',
                'code' => 'KGS',
                'symbol' => 'С̲ ',
                'precision' => '2',
                'thousand_separator' => '.',
                'decimal_separator' => ',',
            ]
        );

        Artisan::call('migrate', ['--force' => true]);

        // Update App app version
        Setting::setSetting('version', static::VERSION);
    }
}
