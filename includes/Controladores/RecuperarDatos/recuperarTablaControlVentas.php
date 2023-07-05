<?php

require_once '../../db.php';

try {
    // Crear una instancia de la clase DB
    $db = new DB();

    // Realizar la conexión a la base de datos
    $pdo = $db->connect();

    // Obtener la OTT ingresada en el input
    $ott = $_POST['ottBuscarControlVentas'];

    // Preparar la consulta SQL para seleccionar los datos de la tabla "tabla_control_ventas"
    $sqlSelect = "SELECT sistema, impresoras, lectores, pantallas, operatividad, versionsistema, alarma FROM tabla_control_ventas WHERE ott = :ott";
    $stmtSelect = $pdo->prepare($sqlSelect);
    $stmtSelect->bindParam(':ott', $ott);
    $stmtSelect->execute();

    // Construir un array asociativo con los valores de cada fila
    $rows = array();
    while ($row = $stmtSelect->fetch(PDO::FETCH_ASSOC)) {
        $sistema = $row['sistema'];
        $impresoras = $row['impresoras'];
        $lectores = $row['lectores'];
        $pantallas = $row['pantallas'];
        $operatividad = $row['operatividad'];
        $versionsistema = $row['versionsistema'];
        $alarma = $row['alarma'];

        $rows[] = array(
            'sistema' => $sistema,
            'impresoras' => $impresoras,
            'lectores' => $lectores,
            'pantallas' => $pantallas,
            'operatividad' => $operatividad,
            'versionsistema' => $versionsistema,
            'alarma' => $alarma
        );
    }

    // Convertir el array a formato JSON y enviarlo como respuesta
    echo json_encode($rows);
} catch (PDOException $e) {
    echo "Error de conexión a la base de datos: " . $e->getMessage();
}
?>
