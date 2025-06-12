<?php

app()->get('/', function () {
    response()->json(['message' => 'Congrats!! You\'re on Leaf MVC']);
});

app()->get('/perfil', 'PerfilsController@index');
app()->post('/insert', [\App\Controllers\Auth\LoginController::class, 'store']);

