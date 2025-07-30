<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Root dashboard
Route::get('/', [IndexController::class, 'index'])->name('home');

// History page
Route::get('/history', fn () => Inertia::render('history'))->name('history');

// Stage page (Inertia View)
Route::get('/stage', fn () => Inertia::render('Stage/Index'))->name('stage.index');

// API for polling (can also be moved to routes/api.php)
Route::get('/api/latest-left-data', [IndexController::class, 'latestLeftData']);
Route::get('/api/latest-right-data', [IndexController::class, 'latestRightData']);
