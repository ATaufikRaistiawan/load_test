<?php

use App\Http\Controllers\IndexController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\AlarmHistoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Root dashboard
Route::get('/', [IndexController::class, 'index'])->name('home');
Route::get('/history', [HistoryController::class, 'index'])->name('history');

// Stage page (Inertia View)
Route::get('/stage', fn () => Inertia::render('Stage/Index'))->name('stage.index');


Route::get('/api/latest-left-data', [IndexController::class, 'latestLeftData']);
Route::get('/api/latest-right-data', [IndexController::class, 'latestRightData']);
Route::get('/alarms', [AlarmHistoryController::class, 'index']);
