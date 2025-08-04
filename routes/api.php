<?php

use App\Http\Controllers\AlarmHistoryController;
use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// API for polling (can also be moved to routes/api.php)
Route::get('/api/latest-left-data', [IndexController::class, 'latestLeftData']);
Route::get('/api/latest-right-data', [IndexController::class, 'latestRightData']);
Route::get('/alarms', [AlarmHistoryController::class, 'index']);
