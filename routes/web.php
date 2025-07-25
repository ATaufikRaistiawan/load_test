<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::resource('/index', IndexController::class);

Route::get('/', function () {
    return Inertia::render('dashboard');
})->name('home');

Route::get('/history', function () {
    return Inertia::render('history');
})->name('history');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });


// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
