<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'logo' => $this->logo,
            'logo_path' => $this->logo_path,
            'unique_hash' => $this->unique_hash,
            'owner_id' => $this->owner_id,
            'slug' => $this->slug,
            'gst' => $this->gst,
            'pan' => $this->pan, 
            'address' => $this->when($this->address()->exists(), function () {
                return new AddressResource($this->address);
            }),
            'created_at' => $this->created_at,
            'formatted_created_at' => $this->formattedCreatedAt,
            'roles' => RoleResource::collection($this->roles)
        ];
    }
}