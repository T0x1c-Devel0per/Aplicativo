CREATE DATABASE dbprueba;
USE dbprueba;

/****************************************************************************************/
/****************************************************************************************/

CREATE TABLE usuarios (
  username VARCHAR(255) PRIMARY KEY,
  nombre VARCHAR(255),
  clave VARBINARY(255)
);

SELECT * FROM usuarios;
DROP TABLE usuarios;

/****************************************************************************************/
/****************************************************************************************/

/* Creamos un tipo de tabla definido para utilizar como esquema en la inserción de datos y en el procedimiento de encriptación */

CREATE TYPE UsuarioType AS TABLE
(
    username VARCHAR(255),
    nombre VARCHAR(255),
    clave VARCHAR(255)
);

/****************************************************************************************/
/****************************************************************************************/

/* Creamos el Procedimiento Almacenado CrearUsuarios */

CREATE PROCEDURE CrearUsuarios
    /* Llamamos el esquema de tabla UsuarioType, pero solo en Lectura para no modificar los datos */
    @usuarios UsuarioType READONLY
AS
BEGIN
    DECLARE @usuariosEncriptados TABLE
    (
        username VARCHAR(255),
        nombre VARCHAR(255),
        clave VARBINARY(8000)
    );

    INSERT INTO @usuariosEncriptados (username, nombre, clave)
    SELECT username, nombre, ENCRYPTBYPASSPHRASE('sJ8e9#2L@df4!hN$', clave)
    FROM @usuarios;

    INSERT INTO usuarios (username, nombre, clave)
    SELECT username, nombre, clave
    FROM @usuariosEncriptados;
END

/****************************************************************************************/
/****************************************************************************************/

/* Generamos la estructura proporcionada por la tabla definida para la inserción de datos */

DECLARE @usuarios UsuarioType;

INSERT INTO @usuarios (username, nombre, clave)
VALUES
    ('Jp.Sanchez', 'Juan Pablo', 'Juan123'),
    ('Pa.Sanchez', 'Pablo Sanchez', 'juan123');

EXEC CrearUsuarios @usuarios;

/****************************************************************************************/
/****************************************************************************************/

CREATE TABLE formulario (
  ott INT IDENTITY(1,1) PRIMARY KEY,
  fecha_servicio DATE,
  ciudad VARCHAR(255),
  version INT,
  n_pedido VARCHAR(255),
  bandera VARCHAR(255),
  eds VARCHAR(255),
  tecnicos VARCHAR(255),
  razon_social VARCHAR(255),
  asunto VARCHAR(255),
  usuario_id VARCHAR(255),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(username)
);

SELECT * FROM formulario;
DROP TABLE formulario;

/****************************************************************************************/
/****************************************************************************************/

CREATE TABLE tabla_equipos (
  id INT IDENTITY(1,1) PRIMARY KEY,
  ott INT,
  usuario_id VARCHAR(255),
  equipo VARCHAR(255),
  marca VARCHAR(255),
  serial VARCHAR(255),
  modelo VARCHAR(255),
  referencia VARCHAR(255),
  FOREIGN KEY (ott) REFERENCES formulario(ott),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(username)
);

SELECT * FROM tabla_equipos;
DROP TABLE tabla_equipos;

/****************************************************************************************/
/****************************************************************************************/

CREATE TABLE tabla_tanques (
  id INT IDENTITY(1,1) PRIMARY KEY,
  ott INT,
  usuario_id VARCHAR(255),
  tanque VARCHAR(255),
  producto VARCHAR(255),
  capacidadgl VARCHAR(255),
  estado VARCHAR(255),
  FOREIGN KEY (ott) REFERENCES formulario(ott),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(username)
);

SELECT * FROM tabla_tanques;
DROP TABLE tabla_tanques;

/****************************************************************************************/
/****************************************************************************************/

CREATE TABLE tabla_control_ventas (
  id INT IDENTITY(1,1) PRIMARY KEY,
  ott INT,
  usuario_id VARCHAR(255),
  sistema VARCHAR(255),
  impresoras VARCHAR(255),
  lectores VARCHAR(255),
  pantallas VARCHAR(255),
  operatividad VARCHAR(255),
  versionsistema VARCHAR(255),
  alarma VARCHAR(255),
  FOREIGN KEY (ott) REFERENCES formulario(ott),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(username)
);

SELECT * FROM tabla_control_ventas;
DROP TABLE tabla_control_ventas;

/****************************************************************************************/
/****************************************************************************************/

CREATE TABLE tabla_tablero_electrico (
  id INT IDENTITY (1,1) PRIMARY KEY,
  ott INT,
  usuario_id VARCHAR(255),
  regulador VARCHAR(255),
  ups VARCHAR(255),
  totalizadores VARCHAR(255),
  voltajes VARCHAR(255),
  paradaemergencia VARCHAR(255),
  FOREIGN KEY (ott) REFERENCES formulario(ott),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(username)
);

SELECT * FROM tabla_tablero_electrico;
DROP TABLE tabla_tablero_electrico;

/****************************************************************************************/
/****************************************************************************************/
