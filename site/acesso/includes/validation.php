<?php

header('Content-type: text/html; charset=utf-8');

error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'database.php';

$senha = isset($_POST['senha']) ? $_POST['senha'] : '';

if (empty($senha)) {
    if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') {
        echo "<script>alert('ATENÇÃO! INFORME A SENHA.');location.href='../../normas';</script>";
    }
    if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') {
        echo "<script>alert('ATTENTION! ENTER THE PASSWORD.');location.href='../../normas';</script>";
    }
    exit;
}

$pdo = Banco::conectar();

$sql = "SELECT * FROM tbl_acesso WHERE senha = :senha LIMIT 1";
$stmt = $pdo->prepare($sql);

$stmt->bindParam(':senha', $senha);

$stmt->execute();

$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (count($users) != 1) {
    if ($_SERVER['HTTP_HOST'] == 'pt.lybor.com.br' || $_SERVER['HTTP_HOST'] == 'localhost') {
        echo "<script>alert('ATENÇÃO! SENHA INVÁLIDA.');location.href='../../normas';</script>";
    }
    if ($_SERVER['HTTP_HOST'] == 'en.lybor.com.br') {
        echo "<script>alert('ATTENTION! INVALID PASSWORD.');location.href='../../normas';</script>";
    }
    exit;
} else {

    $resultado = $users[0];

    if (!isset($_SESSION)) session_start();

    $_SESSION['UsuarioSenha'] = $resultado['senha'];

    header("Location: ../../decisoes-do-colegiado");
    exit;
}
