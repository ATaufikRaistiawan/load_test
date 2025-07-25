<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MachineLeftData>
 */
class MachineLeftDataFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'rpm' => fake()->numberBetween(0, 10000),
            'rev' => fake()->numberBetween(0, 10000),
            'load' => fake()->numberBetween(0, 10000),
            'rpm_target' => fake()->numberBetween(0, 10000),
            'rev_target' => fake()->numberBetween(0, 10000),
            'load_target' => fake()->numberBetween(0, 10000),
            'alarm' => fake()->numberBetween(0, 32),
            'isRunning' => fake()->boolean,
        ];
    }
}
