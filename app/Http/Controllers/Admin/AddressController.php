<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Province;
use App\Models\City;
use App\Models\Barangay;


class AddressController extends Controller
{
    public function provinces()
    {
        return Province::orderBy('province_name', 'asc')->get();
    }
    public function cities($province_id)
    {
        return City::where('province_id', $province_id)->orderBy('municipality_name', 'asc')->get();
    }

    public function barangays($city_id)
    {
        return Barangay::where('municipality_id', $city_id)->orderBy('barangay_name', 'asc')->get();
    }
}
