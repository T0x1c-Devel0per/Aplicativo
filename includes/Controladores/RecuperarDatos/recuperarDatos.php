<?php

require_once '../../db.php';

try {
    // Crear una instancia de la clase DB
    $db = new DB();

    // Realizar la conexión a la base de datos
    $pdo = $db->connect();

    // Obtener la OTT ingresada en el input
    $ott = $_POST['ottBuscar'];

    // Preparar la consulta SQL para seleccionar los datos de la tabla "tabla_equipos"
    $sqlSelect = "SELECT equipo, marca, serial, modelo, referencia FROM tabla_equipos WHERE ott = :ott";
    $stmtSelect = $pdo->prepare($sqlSelect);
    $stmtSelect->bindParam(':ott', $ott);
    $stmtSelect->execute();

    // Construir un array asociativo con los valores de cada fila
    $rows = array();
    while ($row = $stmtSelect->fetch(PDO::FETCH_ASSOC)) {
        $equipo = $row['equipo'];
        $marca = $row['marca'];
        $serial = $row['serial'];
        $modelo = $row['modelo'];
        $referencia = $row['referencia'];

        $rows[] = array(
            'equipo' => $equipo,
            'marca' => $marca,
            'serial' => $serial,
            'modelo' => $modelo,
            'referencia' => $referencia
        );
    }

    // Convertir el array a formato JSON y enviarlo como respuesta
    echo json_encode($rows);
} catch (PDOException $e) {
    echo "Error de conexión a la base de datos: " . $e->getMessage();
}
?>
