<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class PointClickCare
{
    private $client_id;
    private $client_secret;
    private $base_url;

    public function __construct()
    {
        $this->client_id = config('services.pointclickcare.client_id');
        $this->client_secret = config('services.pointclickcare.client_secret');
        $this->base_url = config('services.pointclickcare.base_url');

        // $this->path = storage_path('app/file.txt');

        $this->response = Http::withOptions([
            'ssl_key' => storage_path('app/pcc.key'),
            'cert' => storage_path('app/pcc.crt'),
            // 'form_params' => [
            //     'grant_type' => 'client_credentials'
            //   ]
        ])->withBasicAuth($this->client_id, $this->client_secret)->asForm()->post($this->base_url .'/auth/token', [
            
            'grant_type' => 'client_credentials'
        ])->body();
    }

    function test()
    {
        
        return $this->client_id;
    }

}