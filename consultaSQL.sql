CREATE DATABASE dbprueba;
USE dbprueba;

CREATE TABLE usuarios (
  username VARCHAR(255) PRIMARY KEY,
  nombre VARCHAR(255),
  clave VARBINARY(255)
);
INSERT INTO usuarios (username, nombre , clave) VALUES ('1118572739', 'FRANCISCO ALVAREZ', AES_ENCRYPT('1118572739', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1113694019', 'SEBASTIAN ARROYO', AES_ENCRYPT('1113694019', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1088310226', 'JOHNATAN BALLESTEROS', AES_ENCRYPT('1088310226', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1088347331', 'SEBASTIAN BEDOYA', AES_ENCRYPT('1088347331', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1003383351', 'MARIO BOLAÑO', AES_ENCRYPT('1003383351', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('72220381', 'ENRIQUE CARBONELL', AES_ENCRYPT('72220381', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1001274863', 'ALEJANDRO GIRALDO', AES_ENCRYPT('1001274863', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1012411296', 'ANDRES OVALLE', AES_ENCRYPT('1012411296', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1193527978', 'ALDEMAN REAL', AES_ENCRYPT('1193527978', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1007819833', 'ANDRES ROA', AES_ENCRYPT('1007819833', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1003230667', 'ELÍAS RODRÍGUEZ', AES_ENCRYPT('1003230667', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1013670911', 'FERNEY ROMERO', AES_ENCRYPT('1013670911', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1000991649', 'ANGEL SANCHEZ', AES_ENCRYPT('1000991649', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1045693476', 'CARLOS SILVA', AES_ENCRYPT('1045693476', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1140822500', 'ANDRES FONTALVO', AES_ENCRYPT('1140822500', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1233892103', 'CAMILO MORA', AES_ENCRYPT('1233892103', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('75096272', 'FERNANDO PATIÑO', AES_ENCRYPT('75096272', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('79614278', 'ANDRES QUINTERO', AES_ENCRYPT('79614278', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1030601579', 'ALEJANDRO REINA', AES_ENCRYPT('1030601579', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1010028806', 'FELIPE RINCON', AES_ENCRYPT('1010028806', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1225089594', 'RICARDO ROJAS', AES_ENCRYPT('1225089594', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1003699847', 'DAVID RUIZ', AES_ENCRYPT('1003699847', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1022982481', 'FERNANDO RUIZ', AES_ENCRYPT('1022982481', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('79691811', 'CARLOS BERNAL', AES_ENCRYPT('79691811', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1012386190', 'LUIZ DAZA', AES_ENCRYPT('1012386190', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1042451262', 'JOSE JIMENEZ', AES_ENCRYPT('1042451262', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('80054480', 'SIGIFREDO MARIN', AES_ENCRYPT('80054480', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1140841366', 'SOFAR MERLANO', AES_ENCRYPT('1140841366', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('18519917', 'ANDRES POSADA', AES_ENCRYPT('18519917', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('8566364', 'DEJESUS VELANDIA', AES_ENCRYPT('8566364', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1058275450', 'ANDREA GONZALEZ', AES_ENCRYPT('1058275450', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1012384368', 'PAOLA MARTINEZ', AES_ENCRYPT('1012384368', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1106895138', 'ANDRES ROJAS', AES_ENCRYPT('1106895138', 'clave'));
INSERT INTO usuarios (username, nombre , clave) VALUES ('1012404172', 'ALEJANDRO SIERRA', AES_ENCRYPT('1012404172', 'clave'));


SELECT * FROM usuarios;
DROP TABLE usuarios;


CREATE TABLE formulario (
  ott INT AUTO_INCREMENT PRIMARY KEY,
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
CREATE TABLE tabla_equipos (
  id INT AUTO_INCREMENT PRIMARY KEY,
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
CREATE TABLE tabla_tanques (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ott INT,
  usuario_id VARCHAR(255),
  tanque VARCHAR(255),
  producto VARCHAR(255),
  capacidadgl VARCHAR(255),
  estado VARCHAR(255),
  FOREIGN KEY (ott) REFERENCES formulario(ott),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(username)
);
CREATE TABLE tabla_control_ventas (
  id INT AUTO_INCREMENT PRIMARY KEY,
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
CREATE TABLE tabla_tablero_electrico (
  id INT AUTO_INCREMENT PRIMARY KEY,
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

SELECT * FROM formulario;
SELECT * FROM tabla_equipos;
SELECT * FROM tabla_tanques;
SELECT * FROM tabla_control_ventas;
SELECT * FROM tabla_tablero_electrico;

DROP TABLE tabla_tablero_electrico;
DROP TABLE tabla_control_ventas;
DROP TABLE tabla_tanques;
DROP TABLE tabla_equipos;
DROP TABLE formulario;

SELECT * FROM tabla_equipos WHERE ott = 1;