<?php

require_once '../../db.php';

try {
    // Crear una instancia de la clase DB
    $db = new DB();

    // Realizar la conexión a la base de datos
    $pdo = $db->connect();

    // Obtener la OTT ingresada en el input
    $ott = $_POST['ottBuscarTablElectrico'];

    // Preparar la consulta SQL para seleccionar los datos de la tabla "tabla_control_ventas"
    $sqlSelect = "SELECT regulador, ups, totalizadores, voltajes, paradaemergencia FROM tabla_tablero_electrico WHERE ott = :ott";
    $stmtSelect = $pdo->prepare($sqlSelect);
    $stmtSelect->bindParam(':ott', $ott);
    $stmtSelect->execute();

    // Construir un array asociativo con los valores de cada fila
    $rows = array();
    while ($row = $stmtSelect->fetch(PDO::FETCH_ASSOC)) {
        $regulador = $row['regulador'];
        $ups = $row['ups'];
        $totalizadores = $row['totalizadores'];
        $voltajes = $row['voltajes'];
        $paradaemergencia = $row['paradaemergencia'];

        $rows[] = array(
            'regulador' => $regulador,
            'ups' => $ups,
            'totalizadores' => $totalizadores,
            'voltajes' => $voltajes,
            'paradaemergencia' => $paradaemergencia,
        );
    }

    // Convertir el array a formato JSON y enviarlo como respuesta
    echo json_encode($rows);
} catch (PDOException $e) {
    echo "Error de conexión a la base de datos: " . $e->getMessage();
}
?>
