<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = [
            [
                'fname' => 'Admin',
                'username' => 'admin',
                'password' => Hash::make('aa'),
                'role' => 'ADMIN',
            ],

        ];

        \App\Models\User::insertOrIgnore($admin);
    }
}
