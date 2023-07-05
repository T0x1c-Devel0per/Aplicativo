<?php
include_once 'includes/Conecciones/user.php';
include_once 'includes/Conecciones/user_sesion.php';
include_once 'includes/db.php';

$userSession = new UserSesion();
$user = new User();

if (isset($_SESSION['user'])) {

    $user->setUser($userSession->getCurrentUser());
    
    include_once 'vistas/Aplicativo.php';
} elseif (isset($_POST['username']) && isset($_POST['clave'])) {
    $userForm = $_POST['username'];
    $passForm = $_POST['clave'];

    $user = new User();
    if ($user->userExists($userForm, $passForm)) {
        $userSession->setCurrentUser($userForm);
        $user->setUser($userForm);

        include_once 'vistas/Aplicativo.php';
    } else {
        $errorLogin = "<p style='color:red;'>Nombre de usuario y/o contraseña incorrectos</p>";
        include_once 'vistas/login.php';
    }
} else {
    include_once 'vistas/login.php';
}
?>
