<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('machine_right_data', function (Blueprint $table) {
            $table->id();
            $table->timestamp('timestamp')->useCurrent();  // your custom timestamp
            $table->integer('rpm');
            $table->integer('rev');
            $table->integer('load');
            $table->integer('rpm_target');
            $table->integer('rev_target');
            $table->integer('load_target');
            $table->integer('alarm')->default(0);
            $table->boolean('isRunning')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('machine_right_data');
    }
};
