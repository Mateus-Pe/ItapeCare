<?php

namespace App\Controllers;

class PerfilsController extends Controller
{
    public function index()
    {
        response()->json([
            'message' => 'PerfilsController@index output'
        ]);
    }
}
