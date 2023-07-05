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

    // Obtener los datos de todas las filas
    $tableData = json_decode($_POST['tableData'], true);

    $usuario = $userSession->getCurrentUser();

    // Preparar la consulta SQL para insertar los datos en la tabla "tabla_tablero_electrico"
    $sqlInsert = "INSERT INTO tabla_tablero_electrico (ott, regulador, ups, totalizadores, voltajes, paradaemergencia, usuario_id) 
                VALUES (:ott, :regulador, :ups, :totalizadores, :voltajes, :paradaemergencia, :usuario_id)";

    $stmtInsert = $pdo->prepare($sqlInsert);

    // Variable para verificar si se ingresaron datos en los campos
    $datosIngresados = false;

    // Vincular los parámetros y ejecutar la inserción en "tabla_tablero_electrico" para cada fila
    foreach ($tableData as $rowData) {
        $regulador = $rowData['regulador'];
        $ups = $rowData['ups'];
        $totalizadores = $rowData['totalizadores'];
        $voltajes = $rowData['voltajes'];
        $paradaemergencia = $rowData['paradaemergencia'];

        // Verificar si algún campo está vacío
        if (empty($regulador) || empty($ups) || empty($totalizadores) || empty($voltajes) || empty($paradaemergencia)) {
            echo 'Por favor, completa todos los campos.';
            exit; // Detener la ejecución del script
        }

        $datosIngresados = true;

        $stmtInsert->bindParam(':ott', $ultimoId);
        $stmtInsert->bindParam(':regulador', $regulador);
        $stmtInsert->bindParam(':ups', $ups);
        $stmtInsert->bindParam(':totalizadores', $totalizadores);
        $stmtInsert->bindParam(':voltajes', $voltajes);
        $stmtInsert->bindParam(':paradaemergencia', $paradaemergencia);
        $stmtInsert->bindParam(':usuario_id', $usuario);

        $stmtInsert->execute();
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
