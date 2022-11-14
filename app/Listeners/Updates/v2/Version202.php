<?php

namespace App\Listeners\Updates\v2;

use App\Events\UpdateFinished;
use App\Listeners\Updates\Listener;
use App\Models\Setting;

class Version202 extends Listener
{
    public const VERSION = '2.0.2';

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(UpdateFinished $event)
    {
        if ($this->isListenerFired($event)) {
            return;
        }

        // Update App app version
        Setting::setSetting('version', static::VERSION);
    }
}
