<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\Job;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $jobIds = Job::all()->pluck('id')->toArray();
        $companyIds = Company::all()->pluck('id')->toArray();

        return [
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'phone' => fake()->numerify('#########'),
            'address' => fake()->address(),
            'bio' => fake()->text(),
            'job_id' => fake()->randomElement($jobIds),
            'company_id' => fake()->randomElement($companyIds),
            'image' => null,
        ];
    }
}
