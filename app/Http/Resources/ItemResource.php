<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
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
            'description' => $this->description,
            'price' => $this->price,
            'hsn_sac' => $this->hsn_sac,
            'unit_id' => $this->unit_id,
            'company_id' => $this->company_id,
            'creator_id' => $this->creator_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'tax_per_item' => $this->tax_per_item,
            'formatted_created_at' => $this->formattedCreatedAt,
            'unit' => $this->when($this->unit()->exists(), function () {
                return new UnitResource($this->unit);
            }),
            'company' => $this->when($this->company()->exists(), function () {
                return new CompanyResource($this->company);
            }),
        ];
    }
}
