<?php

    include_once 'user_sesion.php';

    $userSession = new UserSesion();
    $userSession->closeSession();

    header("location: ../../index.php");


?>