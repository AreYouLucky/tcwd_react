<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UsersListController extends Controller
{
    /**
     * Display a listing of the users.
     */
    public function index()
    {
        return  User::select(
            'users.fname',
            'users.lname',
            'users.lname',
            'users.suffix',
            'users.img',
            'users.role',
            'users.contact_no',
            'users.email',
            'users.meter_no',
            'users.meter_brand',
            'users.username',
            'table_region.region_name',
            'table_province.province_name',
            'table_municipality.municipality_name',
            'table_barangay.barangay_name',
            'users.street')
        ->leftJoin('table_region','table_region.region_id','=','users.region')
        ->leftJoin('table_province','table_province.province_id','=','users.province')
        ->leftJoin('table_municipality','table_municipality.municipality_id','=','users.city')
        ->leftJoin('table_barangay','table_barangay.barangay_id','=','users.barangay')
        ->where('users.role','USERS')
        ->get();
    }

    /**
     * get users list by barangay.
     */
    public function getUsersByBarangay($barangay){
        return  User::select(
                'users.fname',
                'users.lname',
                'users.lname',
                'users.suffix',
                'users.img',
                'users.role',
                'users.contact_no',
                'users.email',
                'users.meter_no',
                'users.meter_brand',
                'users.username',
                'table_region.region_name',
                'table_province.province_name',
                'table_municipality.municipality_name',
                'table_barangay.barangay_name',
                'users.street')
            ->leftJoin('table_region','table_region.region_id','=','users.region')
            ->leftJoin('table_province','table_province.province_id','=','users.province')
            ->leftJoin('table_municipality','table_municipality.municipality_id','=','users.city')
            ->leftJoin('table_barangay','table_barangay.barangay_id','=','users.barangay')
            ->where('users.role','USERS')
            ->where('users.barangay',$barangay)
            ->get();
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'fname' => 'required|string|max:255',
            'mname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'suffix' => 'required|string|max:255',
            'contact_no' => ['required,string,max:255','unique:users,contact_no'],
            'email' => ['required,string,max:255','unique:users,email'],
            'username' => ['required', 'string', 'unique:users,username'],
            'password' => 'required|confirmed|min:4',
            'region' => 'required|string|max:255',
            'province' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'barangay' => 'required|string|max:255',
            'street' => 'required|string|max:255',
            'img' => 'nullable|file|mimes:jpeg,png,jpg,gif|max:2048',
            'meter_no' => 'required|string|max:255',
            'meter_brand' => 'required|string|max:255',
        ]);

        $file_location = null;
        if ($request->hasFile('img_dir')) {
            $file = $request->file('img_dir');
            $filePath = $file->store('public/user_img');
            $filePathArray = explode('/', $filePath);
            $file_location = $filePathArray[2];
        }

        User::create([
            'fname' => $request->fname,
            'mname' => $request->mname,
            'lname' => $request->lname,
            'suffix' => $request->suffix,
            'contact_no' => $request->contact_no,
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'region' => $request->region,
            'province' => $request->province,
            'city' => $request->city,
            'barangay' => $request->barangay,
            'street' => $request->street,
            'img' => $file_location,
            'meter_no' => $request->meter_no,
            'meter_brand' => $request->meter_brand,
        ]);

        return  response()->json(
            [
                'status' => 'User successfully saved!'
            ]
            );

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return  User::select(
            'users.fname',
            'users.lname',
            'users.lname',
            'users.suffix',
            'users.img',
            'users.role',
            'users.contact_no',
            'users.email',
            'users.meter_no',
            'users.meter_brand',
            'users.username',
            'users.barangay',
            'users.street')
        ->where('users.role','USERS')
        ->where('users.user_id',$id)
        ->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'fname' => 'required|string|max:255',
            'mname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'suffix' => 'required|string|max:255',
            'contact_no' => ['required,string,max:255','unique:users,contact_no,' . $id . ',id'],
            'email' => ['required,string,max:255','unique:users,email,' . $id . ',id'],
            'username' => ['required', 'string', 'unique:users,username,' . $id . ',id'],
            'barangay' => 'required|string|max:255',
            'street' => 'required|string|max:255',
            'img' => 'nullable|file|mimes:jpeg,png,jpg,gif|max:2048',
            'meter_no' => 'required|string|max:255',
            'meter_brand' => 'required|string|max:255',
        ]);

        $file_location = null;
        if ($request->hasFile('img')) {
            $q = User::where('id', $id)->first();
            if (Storage::exists('public/questions/' . $q->img)) {
                Storage::delete('public/questions/' . $q->img);
            }
            $file = $request->file('img');
            $filePath = $file->store('public/user_img');
            $filePathArray = explode('/', $filePath);
            $file_location = $filePathArray[2];
        }

        User::where('id',$id)->update([
            'fname' => $request->fname,
            'mname' => $request->mname,
            'lname' => $request->lname,
            'suffix' => $request->suffix,
            'contact_no' => $request->contact_no,
            'email' => $request->email,
            'username' => $request->username,
            'region' => $request->region,
            'province' => $request->province,
            'city' => $request->city,
            'barangay' => $request->barangay,
            'street' => $request->street,
            'img' => $file_location,
            'meter_no' => $request->meter_no,
            'meter_brand' => $request->meter_brand,
        ]);

        return response()->json([
            'status' => 'User successfully update!'
        ],200 );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::destroy($id);

        return response()->json([
            'status' => 'User successfully deleted!'
        ],200 );
    }
}
