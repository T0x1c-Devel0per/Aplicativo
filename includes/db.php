<?php

class DB{
    private $host;
    private $db;
    private $user;
    private $password;
    private $charset;
    
    public function __construct(){
        $this->host     = 'DESKTOP-DRDMF4H';
        $this->db       = 'dbprueba';
        $this->user     = 'UsuariosApp';
        $this->password = 'root';
    }
    
    function connect(){
        try{
            $connection = "sqlsrv:Server=" . $this->host . ";Database=" . $this->db;
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::SQLSRV_ATTR_ENCODING => PDO::SQLSRV_ENCODING_UTF8
            ];
            $pdo = new PDO($connection, $this->user, $this->password, $options);
            return $pdo;
        }catch(PDOException $e){
            print_r('Error de conexión: ' . $e->getMessage());
        }   
    }
}

?>