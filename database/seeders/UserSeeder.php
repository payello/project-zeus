<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'first_name' => 'Peter',
            'last_name' => 'Wright',
            'email' => 'peter.ayellowright@gmail.com',
            'password' => Hash::make('password'),
        ]);
    }
}
