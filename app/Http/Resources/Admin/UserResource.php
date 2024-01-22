<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'firstName' => $this->profile->first_name,
            'lastName' => $this->profile->last_name,
            'phone' => $this->profile->phone,
            'address' => $this->profile->address,
            'bio' => $this->profile->bio,
            'job' => $this->profile->job->name,
            'company' => $this->profile->company->name,
            'email' => $this->email,
            'image' => $this->profile->image ? asset($this->profile->image) : null,
        ];
    }
}
