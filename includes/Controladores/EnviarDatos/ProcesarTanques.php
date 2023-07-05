<?php

require_once '../../Conecciones/user_sesion.php';
require_once '../../db.php';

// Crear una instancia de la clase DB
$db = new DB();

$userSession = new UserSesion();

// Realizar la conexión a la base de datos
$pdo = $db->connect();

try {
    $idUsuario = $userSession->getCurrentUser();

    // Obtener el último ID del usuario específico
    $sqlUltimoId = "SELECT TOP 1 ott FROM formulario WHERE usuario_id = :idUsuario ORDER BY ott DESC";
    $stmtUltimoId = $pdo->prepare($sqlUltimoId);
    $stmtUltimoId->bindValue(':idUsuario', $idUsuario, PDO::PARAM_INT);
    $stmtUltimoId->execute();
    $ultimoIdRow = $stmtUltimoId->fetch(PDO::FETCH_ASSOC);
    $ultimoId = $ultimoIdRow['ott'];


    // Obtener los datos enviados desde el cliente
    $tableData = json_decode($_POST['tableData'], true);

    // Preparar la consulta SQL para insertar los datos en la tabla "tabla_tanques"
    $sqlInsert = "INSERT INTO tabla_tanques (ott, tanque, producto, capacidadgl, estado, usuario_id) 
                VALUES (:ott, :tanque, :producto, :capacidadgl, :estado, :usuario_id)";

    $stmtInsert = $pdo->prepare($sqlInsert);

    // Variable para verificar si se ingresaron datos en los campos
    $datosIngresados = false;

    // Recorrer los datos de la tabla y realizar la inserción por cada fila
    foreach ($tableData as $rowData) {
        $tanque = $rowData['tanque'];
        $producto = $rowData['producto'];
        $capacidadgl = $rowData['capacidadgl'];
        $estado = $rowData['estado'];

        // Verificar si algún campo está vacío
        if (!empty($tanque) || !empty($producto) || !empty($capacidadgl) || !empty($estado)) {
            $datosIngresados = true;

            $usuario = $userSession->getCurrentUser();

            // Vincular los parámetros y ejecutar la inserción en "tabla_tanques"
            $stmtInsert->bindParam(':ott', $ultimoId);
            $stmtInsert->bindParam(':tanque', $tanque);
            $stmtInsert->bindParam(':producto', $producto);
            $stmtInsert->bindParam(':capacidadgl', $capacidadgl);
            $stmtInsert->bindParam(':estado', $estado);
            $stmtInsert->bindParam(':usuario_id', $usuario);

            $stmtInsert->execute();
        }
    }

    if ($datosIngresados) {
        echo 'Datos insertados correctamente en la base de datos.';
    } else {
        echo 'No se ingresaron datos en los campos.';
    }
} catch (PDOException $e) {
    echo "Error de conexión a la base de datos: " . $e->getMessage();
}
?>
