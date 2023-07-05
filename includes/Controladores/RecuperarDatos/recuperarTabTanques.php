<?php

require_once '../../db.php';

try {
    // Crear una instancia de la clase DB
    $db = new DB();

    // Realizar la conexión a la base de datos
    $pdo = $db->connect();

    // Obtener la OTT ingresada en el input
    $ott = $_POST['ottBuscarTanques'];

    // Preparar la consulta SQL para seleccionar los datos de la tabla "tabla_tanques"
    $sqlSelect = "SELECT tanque, producto, capacidadgl, estado FROM tabla_tanques WHERE ott = :ott";
    $stmtSelect = $pdo->prepare($sqlSelect);
    $stmtSelect->bindParam(':ott', $ott);
    $stmtSelect->execute();

    // Construir un array asociativo con los valores de cada fila
    $rows = array();
    while ($row = $stmtSelect->fetch(PDO::FETCH_ASSOC)) {
        $tanque = $row['tanque'];
        $producto = $row['producto'];
        $capacidadgl = $row['capacidadgl'];
        $estado = $row['estado'];

        $rows[] = array(
            'tanque' => $tanque,
            'producto' => $producto,
            'capacidadgl' => $capacidadgl,
            'estado' => $estado
        );
    }

    // Convertir el array a formato JSON y enviarlo como respuesta
    echo json_encode($rows);
} catch (PDOException $e) {
    echo "Error de conexión a la base de datos: " . $e->getMessage();
}
?>
