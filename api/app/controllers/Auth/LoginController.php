<?php

namespace App\Controllers\Auth;

class LoginController extends Controller
{
    public function store()
    {
        $data = request()->validate([
            'email' => 'email',
            'password' => 'string',
        ]);

        if (!$data) {
            return response()->exit([
                'message' => 'Validação falhou',
                'errors' => request()->errors(),
            ], 400);
        }

        $success = auth()->login($data);

        if (!$success) {
            return response()->exit([
                'message' => 'Login inválido',
                'errors' => auth()->errors(),
            ], 400);
        }

        return response()->json([
            'message' => 'Login realizado com sucesso',
            'data' => auth()->data(), // Certifique-se que isso inclui o token ou ID do usuário
        ], 200);
    }

    public function logout()
    {
        auth()->logout();

        return response()->json([
            'message' => 'Logout realizado com sucesso',
        ]);
    }
}
