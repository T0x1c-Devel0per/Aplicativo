<?php
require_once '../../Conecciones/user_sesion.php';
require_once '../../db.php';

// Crear una instancia de la clase DB
$db = new DB();

// Crear una instancia de la clase UserSesion
$userSesion = new UserSesion();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los valores del formulario
    $fechaServicio = $_POST['fecha_servicio'];
    $ciudad = $_POST['ciudad'];
    $version = $_POST['version'];
    $nPedido = $_POST['n_pedido'];
    $bandera = $_POST['bandera'];
    $eds = $_POST['eds'];
    $tecnicos = $_POST['tecnicos'];
    $razonSocial = $_POST['razon_social'];
    $asunto = $_POST['asunto'];

    // Obtener una conexión PDO
    $pdo = $db->connect();

    try {
        // Preparar la consulta SQL sin la columna "ott"
        $sql = "INSERT INTO formulario (fecha_servicio, ciudad, version, n_pedido, bandera, eds, tecnicos, razon_social, asunto, usuario_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        // Preparar la sentencia
        $stmt = $pdo->prepare($sql);

        // Obtener el ID del usuario actual desde la variable de sesión
        $idUsuario = $userSesion->getCurrentUser();

        // Vincular los parámetros de la sentencia
        $stmt->bindParam(1, $fechaServicio);
        $stmt->bindParam(2, $ciudad);
        $stmt->bindParam(3, $version);
        $stmt->bindParam(4, $nPedido);
        $stmt->bindParam(5, $bandera);
        $stmt->bindParam(6, $eds);
        $stmt->bindParam(7, $tecnicos);
        $stmt->bindParam(8, $razonSocial);
        $stmt->bindParam(9, $asunto);
        $stmt->bindParam(10, $idUsuario);

        // Ejecutar la sentencia de inserción
        if ($stmt->execute()) {
            $mensaje = "¡Datos insertados correctamente!"; // Mensaje personalizado basado en alguna condición
            $ott = $pdo->lastInsertId(); // Obtener el valor de ott insertado

            // Generar una respuesta JSON con el mensaje de confirmación y el valor de ott
            $response = array('success' => true, 'message' => $mensaje, 'ott' => $ott);
            echo json_encode($response);
            exit(); // Asegurarse de que el script se detenga después de enviar la respuesta
        } else {
            echo "Error al insertar los datos en la base de datos.";
        }
    } catch (PDOException $e) {
        echo "Error de conexión a la base de datos: " . $e->getMessage();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Obtener el valor de OTT desde la solicitud GET
    $ott = $_GET['ott'];

    // Obtener una conexión PDO
    $pdo = $db->connect();

    try {
        // Preparar la consulta SQL
        $sql = "SELECT * FROM formulario WHERE ott = ?";

        // Preparar la sentencia
        $stmt = $pdo->prepare($sql);

        // Vincular el parámetro de la sentencia
        $stmt->bindParam(1, $ott);

        // Ejecutar la sentencia
        if ($stmt->execute()) {
            // Obtener los datos recuperados
            $datos = $stmt->fetch(PDO::FETCH_ASSOC);

            // Verificar si se encontraron datos
            if ($datos) {
                // Imprimir los datos encontrados
                echo json_encode($datos);
            } else {
                echo json_encode(array('error' => 'No se encontraron datos para la OTT especificada.'));
            }
        } else {
            echo json_encode(array('error' => 'Error al realizar la búsqueda en la base de datos.'));
        }
    } catch (PDOException $e) {
        echo json_encode(array('error' => 'Error de conexión a la base de datos: ' . $e->getMessage()));
    }
}
?>
