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
        Schema::create('alarm_histories', function (Blueprint $table) {
            $table->id();
            $table->timestamp('timestamp'); // kapan alarm muncul
            $table->string('message');      // isi pesan alarm
            $table->boolean('active');      // status alarm (1 = aktif, 0 = sudah clear)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alarm_histories');
    }
};
