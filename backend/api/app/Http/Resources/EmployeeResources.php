<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResources extends JsonResource
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
            'id'=> $this->id,
            'name' => $this->name,
            'position' => $this->position,
            'salary' => $this->salary,
            'employment_type' => $this->employment_type,
            'employment_status' => $this->employment_status,
            'employment_duration' => $this->created_at->diffForHumans(),
            'profile_image' => 'images/'.$this->image,
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}