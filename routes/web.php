<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Auth/Login');
})->name('login');



Route::middleware('[role:ADMIN]')->group(function () {
    Route::get('/admin-dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('admin-dashboard');

    Route::get('/provinces/{region_id}', [App\Http\Controllers\Admin\AddressController::class, 'provinces']);
    Route::get('/cities/{province_id}', [App\Http\Controllers\Admin\AddressController::class, 'cities']);
    Route::get('/barangay/{city_id}', [App\Http\Controllers\Admin\AddressController::class, 'barangays']);


    Route::resource('/users', App\Http\Controllers\Admin\UsersListController::class);
});

require __DIR__ . '/auth.php';
