<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AlarmList;

class AlarmListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    AlarmList::factory()->count(50)->create();
        //
    }
}
