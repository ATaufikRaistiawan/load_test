<?php

namespace Database\Seeders;

use App\Models\MachineLeftData;
use App\Models\MachineRightData;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        MachineLeftData::factory(150)->create();
        MachineRightData::factory(150)->create();

    }
}
