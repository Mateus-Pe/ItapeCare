<?php

namespace App\Controllers;

class InserttestsController extends Controller
{
    public function index()
    {
        db()->insert('db_users', [
        'email' => 'douglas@mail.to',
        'password' => password_hash('123456', PASSWORD_DEFAULT)
    ]);
    response()->json(['success' => true, 'message' => 'Usuário criado']);
    }
}

