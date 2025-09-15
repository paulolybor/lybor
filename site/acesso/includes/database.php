<?php

class Banco
{
    private static $dbNome = 'lyborcomuser_site';
    private static $dbHost = 'localhost';
    private static $dbUsuario = 'lyborcomuser_admin';
    private static $dbSenha = 'bfs32cMQ@!';
    private static $cont = null;

    public function __construct()
    {
        die('A função Init nao é permitido!');
    }

    public static function conectar()
    {
        if (null == self::$cont) {
            try {
                //self::$options = [
                //    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
                //    PDO::ATTR_PERSISTENT => true
                //];

                self::$cont =  new PDO("mysql:host=" . self::$dbHost . ";" . "dbname=" . self::$dbNome, self::$dbUsuario, self::$dbSenha, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            } catch (PDOException $exception) {
                die($exception->getMessage());
            }
        }
        return self::$cont;
    }

    public static function desconectar()
    {
        self::$cont = null;
    }
}
