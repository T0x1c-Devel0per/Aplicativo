<?php
require_once 'db.php';

$db = new DB();
$pdo = $db->connect();

try {
    $stmt = $pdo->query("SELECT * FROM formulario");
    $datos = $stmt->fetch(PDO::FETCH_ASSOC);

    // Devolver los datos en formato JSON
    header('Content-Type: application/json');
    echo json_encode($datos);
} catch (PDOException $e) {
    // Manejar errores de conexión o consulta
    echo "Error: " . $e->getMessage();
}
?>
