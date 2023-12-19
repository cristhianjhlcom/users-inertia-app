<?php

namespace Database\Seeders;

use App\Models\Job;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jobs = [
            ["name" => "Frotend Developer"],
            ["name" => "Backend Developer"],
            ["name" => "FullStack Developer"],
        ];

        foreach ($jobs as $job) {
            Job::firstOrCreate($job);
        }
    }
}
