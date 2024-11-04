<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserController extends Controller
{
    public function register(Request $request)
    {

        $request->validate([
            'img' => ['required', 'string'],
            'username' => ['required', 'string', 'unique:users,username'],
            'password' => 'required|confirmed|min:4',
            'region' => 'required|string|max:255',
            'province' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'fname' => 'required|string|max:255',
            'school' => 'required|string|max:255',
        ]);

        $user = User::create([
            'name' => $request->fname,
            'password' => Hash::make($request->password),
            'school_name' => $request->school,
            'region' => $request->region,
            'province' => $request->province,
            'city' => $request->city,
            'username' => $request->username,
            'img' => $request->img,
            'role' => 'PARTICIPANTS'
        ]);

        $credentials = [
            'username' => $request->username,
            'password' => $request->password,
        ];

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return Auth::user();
        }
    }

    public function destroy(string $id)
    {
        $user = User::findOrFail($id);
        if (Storage::exists('public/avatars/' . $user->img)) {
            Storage::delete('public/avatars/' . $user->img);
        }

        User::destroy($id);

        return response()->json([
            'status' => 'Account Successfully Deleted'
        ]);
    }

    public function login(Request $request)
    {

        $credentials = $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json([
                'status' => 'You successfully logged in!'
            ]);
        }
        return response()->json([
            'errors' => [
                'logs' => 'Invalid Credentials!',
            ]
        ], 422);
    }

    public function logout(Request $req)
    {
        Auth::logout();
        $req->session()->invalidate();
        $req->session()->regenerateToken();
        return redirect('/');
    }
}
