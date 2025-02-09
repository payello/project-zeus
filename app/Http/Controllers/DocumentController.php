<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{
    public function store(): void
    {
        Storage::disk('s3')->put('test3.txt', 'Hello MinIO!');
    }
}
