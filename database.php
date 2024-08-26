<?php
class Database {
    private $hostname = "localhost";
    private $Database = "certify";
    private $username = "root";
    private $password = "";
    private $charset = "utf8";

    function conectar() {
        try {
            $conexion = "mysql:host=" . $this->hostname .
                ";dbname=" . $this->Database . ";charset=" . $this->charset;
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false // Cambiado aquí
            ];

            $pdo = new PDO($conexion, $this->username, $this->password, $options);
            return $pdo;

        } catch (PDOException $e) {
            echo 'Error de conexión: ' . $e->getMessage();
            exit;
        }
    }
}