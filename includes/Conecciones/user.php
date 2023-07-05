<?php
include_once 'includes/db.php';

class User extends DB{
    private $nombre;
    private $username;

    public function userExists($user, $pass){
        $pdo = $this->connect();
        $query = $pdo->prepare("SELECT * FROM usuarios WHERE username = :user AND CONVERT(VARCHAR(255), DECRYPTBYPASSPHRASE('sJ8e9#2L@df4!hN$', clave)) = :pass");
        $query->bindParam(':user', $user, PDO::PARAM_STR);
        $query->bindParam(':pass', $pass, PDO::PARAM_STR);
        $query->execute();

        if($query instanceof PDOStatement && $query->rowCount()){
            return true;
        } else {
            return false;
        }
    }

    public function setUser($user){
        $query = $this->connect()->prepare('SELECT * FROM usuarios WHERE username = :user');
        $query->execute(['user' => $user]);
        
        foreach ($query as $currentUser) {
            $this->nombre = $currentUser['nombre'];
            $this->username = $currentUser['username'];
        }
    }

    public function getNombre(){
        return $this->nombre;
    }
    
    public function getUsuario(){
        return $this->username;
    }
}
?>
