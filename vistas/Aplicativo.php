<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/fichatecnica/JS/sweetalert.min.js"></script>
    <script src="/fichatecnica/JS/jquery-3.6.3.min.js"></script>
    <script src="/fichatecnica/JS/agregarFotos.js"></script>
    <script src="/fichatecnica/JS/script.js"></script>
    <script src="/fichatecnica/JS/printThis.js"></script>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="/fichatecnica/CSS/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</head>
<header id="header" style="z-index: 99999;">
    <div class="topnav" id="myTopnav" style="width: 95%;">
        <a href="#" id="active" style="color: white; background-color: black;">INSEPET</a>
        <div class="container w-100">
            <a href="#">INICIO</a>
            <a href="#seccion1">IMPORTANTE</a>
            <a href="#formularioRazon">MANTENIMIENTO</a>
            <a href="/fichatecnica/vistas/Calibracion.php">CALIBRACION</a>
            <a href="#inicio"><button id="exportarpdf">EXPORTAR</button></a>
            <a href="#inicio"><button id="editar"> EDITAR DOCUMENTO</button></a>
            <a href="./includes/Conecciones/logout.php" id="cerrarSesion">SALIR</a>
            <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="NavBar()">&#9776;</a>
        </div>
    </div>
</header>

<body>
    <div class="container-fluid">
        <div class="header">
            <h1><img src="/fichatecnica/IMG/logo-insepet.png" width="100%"></h1>
        </div>
        <div class="canvas-wrap" style="padding-right: 12px;">
            <canvas id="canvas"></canvas>
        </div>
    </div>
    <div class="container-fluid">
        <div class="container" id="seccion1" style="margin-top: 50px;">
            <div class="row d-flex justify-content-center">
                <div class="col d-flex justify-content-center">
                    <img src="/fichatecnica/IMG/certificado1.png">
                </div>
                <div class="col d-flex justify-content-center">
                    <img src="/fichatecnica/IMG/logo-insepet1.png">

                </div>
                <div class="col d-flex justify-content-center">
                    <img src="/fichatecnica/IMG/certificado2.png">

                </div>
            </div>
            <h1>INFORME MANTENIMIENTO</h1>
            <div class="row" id="formRazon">
                <div class="container d-flex justify-content-center">
                    <div class="col-12" id="infoImportante" style="display: block; width: 100%;">
                        <div class="card mb-12">
                            <img class="card-img-top" src="/fichatecnica/IMG/headerFondo.jpg" alt="Card image cap" style="height: 420px;">
                            <div class="card-body">
                                <h6 class="card-text">- Comprometidos con hacer de su EDS un lugar seguro y productivo.</h6>
                                <h6>- Línea VIP para atención de emergencias en su EDS de forma prioritaria.</h6>
                                <h6>- Evita las paradas de tu EDS realizando mantenimiento preventivo.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <h5>Tecnico:
                    <?php
                    echo $user->getNombre();
                    ?>

                </h5>
                <div class="col">
                    <button class="btn-info" id="boton-fixed" style="display: none;">
                        <span class="glyphicon glyphicon-plus-sign"></span><ion-icon name="arrow-back-circle-outline"></ion-icon>
                    </button>
                    <br>
                    <form id="formularioRazon" action="./includes/procesarFormulario.php" method="POST">
                        <div class="row">
                            <div class="col">
                                <b>OTT</b>
                                <input name="ott" id="ott" class="form-control footer-input margin-b-20" placeholder="Ingrese la OTT a Buscar"></td>
                            </div>
                            <div class="col">
                                <b>FECHA SERVICIO</b>
                                <input type="date" name="fecha_servicio" id="fecha" class="form-control footer-input margin-b-20" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <b>CIUDAD</b>
                                <input type="text" name="ciudad" id="ciudad" class="form-control footer-input margin-b-20" placeholder="Ciudad" required>
                            </div>
                            <div class="col">
                                <b>VERSION</b>
                                <input type="number" name="version" id="version" class="form-control footer-input margin-b-20" placeholder="Version" required>
                            </div>
                            <div class="col">
                                <b>N PEDIDO</b>
                                <input type="text" name="n_pedido" id="pedido" class="form-control footer-input margin-b-20" placeholder="#Pedido" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <b>BANDERA</b>
                                <input type="text" name="bandera" id="bandera" class="form-control footer-input margin-b-20" placeholder="Bandera Eds" required>
                            </div>
                            <div class="col">
                                <b>EDS</b>
                                <input type="text" name="eds" id="eds" class="form-control footer-input margin-b-20" placeholder="Estación de Servicio" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <b>TÉCNICOS</b>
                                <input type="text" name="tecnicos" id="tecnicos" class="form-control footer-input margin-b-20" placeholder="Nombre Técnico" required>
                            </div>
                            <div class="col">
                                <b>RAZÓN SOCIAL</b>
                                <input type="text" name="razon_social" id="razonSocial" class="form-control footer-input margin-b-20" placeholder="Razón Social" required>
                            </div>
                            <div class="col">
                                <b>ASUNTO</b>
                                <input type="text" name="asunto" id="asunto" class="form-control footer-input margin-b-20" placeholder="Asunto" required>
                            </div>
                        </div>
                        <br>
                        <button type="submit" id="btnContinuar" class="btn-theme-sm  btn-base-bg text-uppercase margin-b-30" form="formularioRazon" style="margin-top:20px;margin-bottom: 20px;">Continuar</button>
                        <button type="button" id="buscarOTT" class="btn-theme-sm  btn-base-bg2 text-uppercase margin-b-30">Buscar Por OTT</button>


                    </form>
                </div>
            </div>
        </div>
        <div class="container" id="seccionApp02" style="display: none;">
            <div class="container" id="tituloSeleccion">
                <h1 class="container d-flex justify-content-center" style="text-align: center; padding-top: 200px;">Seleccione tipo de mantenimiento</h1>
            </div>

            <div class="container" id="seccion02">
                <div class="row d-flex justify-content-center">
                    <div class="col d-flex justify-content-center">
                        <label>
                            <input type="radio" name="pago1" value="Correctivo" id="btnradio1">
                            <img src="/fichatecnica/IMG/maintenance.gif" alt="Option 1" style="width: 200; height: 200px;">
                            <div class="col d-flex justify-content-center">
                                <p>Mant.Correctivo</p>
                            </div>
                        </label>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <label>
                            <input type="radio" name="pago1" value="Preventivo" id="btnradio2">
                            <img src="/fichatecnica/IMG/mant-prev.gif" alt="Option 1" style="width: 200; height: 200px;">
                            <div class="col d-flex justify-content-center">
                                <p>Mant.Preventivo</p>
                            </div>
                        </label>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <label>
                            <input type="radio" name="pago1" value="Marcha" id="btnradio3">
                            <img src="/fichatecnica/IMG/browser.gif" alt="Option 1" style="width: 200; height: 200px;">
                            <div class="col d-flex justify-content-center">
                                <p>Puesta Marcha</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col d-flex justify-content-center">
                    <button class="btn-theme-sm  btn-base-bg text-uppercase margin-b-30" style="margin-top:20px" id="btnComprobar">Seleccionar </button>
                </div>
            </div>
            <div id="div1" class="container" style="display:none;">
                <h1 id="tituloMantenimientos" style="font-size: 20px;font-weight: bold;text-align: center;">Mantenimiento Correctivo</h1>
                <div class="container" id="seleccionMant">
                    <div class="row d-flex justify-content-center">
                        <div class="col-sm d-flex justify-content-center">
                            <label>
                                <img src="/fichatecnica/IMG/gas-station.gif" checked style="width: 200; height: 200px;">
                                <input type="checkbox" name="check" id="dispensadores1" value="1" onchange="javascript:showContent5()" style="width: 40px; height: 20px;" />
                                <p>Dispensadores</p>
                            </label>
                        </div>
                        <div class="col-sm d-flex justify-content-center">
                            <label>
                                <img src="/fichatecnica/IMG/gas-storage.gif" checked style="width: 200; height: 200px;">
                                <input type="checkbox" name="check" id="tanque1" value="1" onchange="javascript:showContent6()" style="width: 40px; height: 20px;" />
                                <p>Tanques y Bombas</p>
                            </label>
                        </div>
                        <div class="col-sm d-flex justify-content-center">
                            <label>
                                <img src="/fichatecnica/IMG/supervision.gif" checked style="width: 200; height: 200px;">
                                <input type="checkbox" name="check" id="veeder1" value="1" onchange="javascript:showContent7()" style="width: 40px; height: 20px;" />
                                <p>Control Ventas</p>
                            </label>
                        </div>
                        <div class="col-sm d-flex justify-content-center">
                            <label>
                                <img src="/fichatecnica/IMG/electrical-panel.gif" checked style="width: 200; height: 200px;">
                                <input type="checkbox" name="check" id="sistemasnx1" value="1" onchange="javascript:showContent8()" style="width: 40px; height: 20px;" />
                                <p>Tablero Eléctrico</p>
                            </label>
                        </div>
                    </div>

                </div>
                <div class="container" id="tabDispensers" style="display:none">
                    <div id="tablaDispensadores1" style="display: none;">
                        <h1 style="text-align: center;color: #777777;">Dispensadores</h1>
                        <div class="row">
                            <div class="col-12" id="tablas1-1">
                                <div class="table-content" style="overflow:auto;">
                                    <table class="table table-borded table-responsive table-striped " id="table-list8">
                                        <thead class="table-dark">
                                            <tr style="font-size: 10px;">
                                                <td>EQUIPO</td>
                                                <td>MARCA</td>
                                                <td>SERIAL</td>
                                                <td>MODELO</td>
                                                <td>REFERENCIA</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td aria-required="true"></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="full-container">
                                    <div class="row d-flex justify-content-center btn-ptions-dispensadores">

                                        <div class="col d-flex justify-content-center mt-3">
                                            <input name="ottBuscar" id="ottBuscar" class="form-control footer-input margin-b-20 input-busqueda-disp" placeholder="Ingrese la OTT a Buscar">
                                            <button class="btn-tabdispensadores" id="recuperar" type="submit">
                                                <span class="glyphicon glyphicon-refresh"></span><ion-icon name="search-outline"></ion-icon>
                                            </button>
                                        </div>

                                        <div class="col d-flex justify-content-center mt-3">
                                            <button class="btn-info2" id="add8" type="submit">
                                                <span class="glyphicon glyphicon-plus-sign"></span>AGREGAR FILA
                                            </button>
                                        </div>

                                        <div class="col d-flex justify-content-center mt-3">
                                            <button class="btn-info" id="guardar" type="submit">
                                                <span class="glyphicon glyphicon-plus-sign"></span>GUARDAR
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="container" style="margin-top: 50px;">
                                <div class="row" id="dispensadores01">
                                    <div class="container-fluid" style="min-width: 300px">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px"> style="min-width: 300px">
                                            <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h1> Equipo 1 antes</h1>
                                    <div class="row d-flex align-items-center" id="AgregarFila1-1" style="min-height: 500px;">
                                        <div class="letrero col" id="añadir1">
                                            <div class="text-letrero">
                                                <h1 class="text">Haga Clic en <img src="./IMG/añadirimagen.png" width="24px"> para añadir fotografías</h1>
                                            </div>
                                            <div class="arrow-letrero">
                                                <div class="arrow"></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center contDescripcion">
                                        <div class="container">
                                            <textarea class="textArea" placeholder="Describa el proceso que se realizado a los Equipos...."></textarea>
                                        </div>
                                        <div class="col d-flex justify-content-center">
                                            <button class="btn-info" id="botonSeccionFotos1-1" onclick="agregarSeccion1()">
                                                <span class="glyphicon glyphicon-plus-sign"><img src="./IMG/añadirimagen.png" width="24px"></span>
                                            </button>
                                        </div>

                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px"> style="min-width: 300px">
                                        <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>

                            <div class="container">
                                <div class="row" id="dispensadores01">
                                    <div class="container-fluid" style="min-width: 300px">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">
                                            <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h1> Equipo 1 despues</h1>
                                    <div class="row d-flex align-items-center" id="AgregarFila1-2" style="min-height: 500px;">
                                        <div class="letrero col" id="añadir2">
                                            <div class="text-letrero">
                                                <h1 class="text">Haga Clic en <img src="./IMG/añadirimagen.png" width="24px"> para añadir fotografías</h1>
                                            </div>
                                            <div class="arrow-letrero">
                                                <div class="arrow"></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center contDescripcion ">
                                        <div class="container">
                                            <textarea class="textArea" placeholder="Describa el proceso que se realizado a los Equipos...."></textarea>
                                        </div>
                                        <div class="col-6 d-flex justify-content-center mt-4">
                                            <button class="btn-info" id="botonSeccionFotos1-2" onclick="agregarSeccion2()">
                                                <span class="glyphicon glyphicon-plus-sign"><img src="./IMG/agregar.png"><img src="./IMG/añadirimagen.png" width="24px"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px"> style="min-width: 300px">
                                        <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center d-flex justify-content-center mt-5 mb-5 " id="seccionDispensers">
                        <div class="row d-flex justify-content-center">

                            <div class="col-6 d-flex justify-content-center mt-4">
                                <button class="btn-info2" type="submit" onclick="agregarHtlm();">
                                    <span class="glyphicon glyphicon-plus-sign"><img src="./IMG/agregar.png"> <img src="./IMG/añadirSeccion.png"></span>
                                </button>
                            </div>
                            <div class="col-6 d-flex justify-content-center mt-4">
                                <button class="btn-info3" id="Elimbtn2" onclick="eliminarSeccion();"><img src="./IMG/menos.png"> <img src="./IMG/añadirSeccion.png"></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container" id="tabTanks" style="display:none">
                    <div id="tablaTanques1" style="display: none;">
                        <h1 style="text-align: center;color: #777777;">Tanques y Bombas</h1>
                        <div class="row">
                            <div class="col-12" id="tablas1-2">
                                <div class="table-content" style="overflow:auto;">
                                    <table class="table table-borded table-responsive table-striped " id="table-list9">
                                        <thead class="table-dark">
                                            <tr style="font-size: 10px;">
                                                <td>TANQUE</td>
                                                <td>PRODUCTO</td>
                                                <td>CAPACIDAD GL</td>
                                                <td>ESTADO</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="full-container">
                                    <div class="row d-flex justify-content-center btn-ptions-dispensadores">

                                        <div class="col d-flex justify-content-center mt-3">
                                            <input name="ottBuscarTanques" id="ottBuscarTanques" class="form-control footer-input margin-b-20 input-busqueda-disp" placeholder="Ingrese la OTT a Buscar">
                                            <button class="btn-tabdispensadores" id="recuperarTanques" type="submit">
                                                <span class="glyphicon glyphicon-refresh"></span><ion-icon name="search-outline"></ion-icon>
                                            </button>
                                        </div>

                                        <div class="col d-flex justify-content-center mt-3">
                                            <button class="btn-info2" id="add9">
                                                <span class="glyphicon glyphicon-plus-sign"></span>
                                                AGREGAR FILA
                                            </button>
                                        </div>

                                        <div class="col d-flex justify-content-center mt-3">
                                            <button class="btn-info" id="guardarTanques" type="submit">
                                                <span class="glyphicon glyphicon-plus-sign"></span>GUARDAR
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="container" style="margin-top: 50px;">
                                <div class="row row d-flex align-items-center" id="TanquesyBombas1">
                                    <div class="container-fluid" style="min-width: 300px">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">>
                                            <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h1> Tanque 1 antes</h1>
                                    <div class="row d-flex align-items-center" id="AgregarFila2-1" style="min-height: 500px;">
                                        <div class="letrero col" id="añadir3">
                                            <div class="text-letrero">
                                                <h1 class="text">Haga Clic en <img src="./IMG/añadirimagen.png" width="24px"> para añadir fotografías</h1>
                                            </div>
                                            <div class="arrow-letrero">
                                                <div class="arrow"></div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row d-flex justify-content-center contDescripcion">
                                        <div class="container">
                                            <textarea class="textArea" placeholder="Describa el proceso que se realizado a los Tanques...."></textarea>
                                        </div>
                                        <div class="col d-flex justify-content-center">
                                            <button class="btn-info" id="botonSeccionFotosp2-1" onclick="agregarSeccionTanques1()">
                                                <span class="glyphicon glyphicon-plus-sign"><img src="./IMG/agregar.png"><img src="./IMG/añadirimagen.png" width="24px"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">
                                        <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row" id="TanquesyBombas1">
                                    <div class="container-fluid" style="min-width: 300px">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">>
                                            <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                                        </svg>
                                    </div>
                                    <h1> Tanque 1 despues</h1>
                                    <div class="row d-flex align-items-center" id="AgregarFila2-2" style="min-height: 500px;">
                                        <div class="letrero col" id="añadir4">
                                            <div class="text-letrero">
                                                <h1 class="text">Haga Clic en <img src="./IMG/añadirimagen.png" width="24px"> para añadir fotografías</h1>
                                            </div>
                                            <div class="arrow-letrero">
                                                <div class="arrow"></div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row d-flex justify-content-center contDescripcion">
                                        <div class="container">
                                            <textarea class="textArea" placeholder="Describa el proceso que se realizado a los Tanques...."></textarea>
                                        </div>
                                        <div class="col-6 d-flex justify-content-center mt-4">
                                            <button class="btn-info" id="botonSeccionFotosp2-2" onclick="agregarSeccionTanques2()">
                                                <span class="glyphicon glyphicon-plus-sign"><img src="./IMG/agregar.png"><img src="./IMG/añadirimagen.png" width="24px"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">
                                        <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center d-flex justify-content-center mt-5 mb-5 " id="seccionTanks" style="display : none;">

                        <div class="row d-flex justify-content-center">

                            <div class="col-6 d-flex justify-content-center mt-4">
                                <button class="btn-info2" onclick="agregarHtlm1();">
                                    <span class="glyphicon glyphicon-plus-sign"><span class="glyphicon glyphicon-plus-sign"><img src="./IMG/agregar.png"> <img src="./IMG/añadirSeccion.png"></span></span>
                                </button>
                            </div>

                            <div class="col-6 d-flex justify-content-center mt-4">
                                <button class="btn-info3" id="Elimbtn2" onclick="eliminarSeccion2();"><img src="./IMG/menos.png"> <img src="./IMG/añadirSeccion.png"></button>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="container" id="tabConsole" style="display:none">
                    <div id="consolaVeeder1" style="display: none;">
                        <h1 style="text-align: center;color: #777777;">Sistema Control Ventas</h1>
                        <div class="container d-flex justify-content-center">
                        </div>
                        <div class="row">
                            <div class="col-12" id="tablas1-3">
                                <div class="table-content" style="overflow:auto;">
                                    <table class="table table-borded table-responsive table-striped " id="table-list10">
                                        <thead class="table-dark">
                                            <tr style="font-size: 10px;">
                                                <td>SISTEMA</td>
                                                <td>IMPRESORAS</td>
                                                <td>LECTORES</td>
                                                <td>PANTALLAS</td>
                                                <td>OPERATIVIDAD</td>
                                                <td>VERSION SISTEMA</td>
                                                <td>ALRAM. SOBRELLENADO</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div class="full-container">
                                    <div class="row d-flex justify-content-center btn-ptions-dispensadores">

                                        <div class="col d-flex justify-content-center mt-3">
                                            <input name="ottBuscarControlVentas" id="ottBuscarControlVentas" class="form-control footer-input margin-b-20 input-busqueda-disp" placeholder="Ingrese la OTT a Buscar">
                                            <button class="btn-tabdispensadores" id="recuperarControlVentas" type="submit">
                                                <span class="glyphicon glyphicon-refresh"></span><ion-icon name="search-outline"></ion-icon>
                                            </button>
                                        </div>

                                        <div class="col d-flex justify-content-center mt-3">
                                            <button class="btn-info2" id="add10">
                                                <span class="glyphicon glyphicon-plus-sign"></span>
                                                AGREGAR FILA
                                            </button>
                                        </div>

                                        <div class="col d-flex justify-content-center mt-3">
                                            <button class="btn-info" id="guardarControlVentas" type="submit">
                                                <span class="glyphicon glyphicon-plus-sign"></span>GUARDAR
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="container" style="margin-top: 50px;">
                                <div class="row" id="controlVentas1">
                                    <div class="container-fluid" style="min-width: 300px">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">>
                                            <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h1> Control Ventas 1 antes</h1>
                                    <div class="row d-flex align-items-center" id="AgregarFila3-1" style="min-height: 500px;">
                                        <div class="letrero col" id="añadir5">
                                            <div class="text-letrero">
                                                <h1 class="text">Haga Clic en <img src="./IMG/añadirimagen.png" width="24px"> para añadir fotografías</h1>
                                            </div>
                                            <div class="arrow-letrero">
                                                <div class="arrow"></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center contDescripcion">
                                        <div class="container">
                                            <textarea class="textArea" placeholder="Describa el proceso que se realizado al Sistema...."></textarea>
                                        </div>

                                        <div class="col d-flex justify-content-center">
                                            <button class="btn-info" id="botonSeccionFotosp3-1" onclick="agregarSeccionConsola1()">
                                                <span class="glyphicon glyphicon-plus-sign"><img src="./IMG/agregar.png"><img src="./IMG/añadirimagen.png" width="24px"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">
                                <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>

                            <div class="container">
                                <div class="row" id="controlVentas1">
                                    <div class="container-fluid" style="min-width: 300px">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">>
                                            <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h1> Control Ventas 1 despues</h1>
                                    <div class="row d-flex align-items-center" id="AgregarFila3-2" style="min-height: 500px;">
                                        <div class="letrero col" id="añadir6">
                                            <div class="text-letrero">
                                                <h1 class="text">Haga Clic en <img src="./IMG/añadirimagen.png" width="24px"> para añadir fotografías</h1>
                                            </div>
                                            <div class="arrow-letrero">
                                                <div class="arrow"></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center contDescripcion">
                                        <div class="container">
                                            <textarea class="textArea" placeholder="Describa el proceso que se realizado al Sistema...."></textarea>
                                        </div>
                                        <div class="col-6 d-flex justify-content-center mt-4">
                                            <button class="btn-info" id="botonSeccionFotosp3-2" onclick="agregarSeccionConsola2()">
                                                <span class="glyphicon glyphicon-plus-sign"><img src="./IMG/agregar.png"><img src="./IMG/añadirimagen.png" width="24px"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">
                                <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="container text-center d-flex justify-content-center mt-5 mb-5 " id="seccionTanks" style="display : none;">
                        <div class="row d-flex justify-content-center">

                            <div class="col-6 d-flex justify-content-center mt-4">
                                <button class="btn-info2" id="add10" onclick="agregarHtlm2();">
                                    <span class="glyphicon glyphicon-plus-sign"><span class="glyphicon glyphicon-plus-sign"><img src="./IMG/agregar.png"> <img src="./IMG/añadirSeccion.png"></span></span>
                                </button>
                            </div>
                            <div class="col-6 d-flex justify-content-center mt-4">
                                <button class="btn-info3" id="Elimbtn2" onclick="eliminarSeccion3();"><img src="./IMG/menos.png"> <img src="./IMG/añadirSeccion.png"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" id="tabSnx" style="display:none">
                    <div id="tablaSistemasnx1" style="display: none;">
                        <h1 style="text-align: center;color: #777777">Tablero Eléctrico</h1>
                        <div class="row">
                            <div class="col-12" id="tablas1-4">
                                <div class="table-content" style="overflow:auto;">
                                    <table class="table table-borded table-responsive table-striped " id="table-list11">
                                        <thead class="table-dark">
                                            <tr style="font-size: 10px;">
                                                <td>REGULADOR</td>
                                                <td>UPS</td>
                                                <td>TOTALIZADORES</td>
                                                <td>VOLTAJES</td>
                                                <td>PARADA DE EMERGENCIA</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="full-container">
                                    <div class="row d-flex justify-content-center btn-ptions-dispensadores">

                                        <div class="col d-flex justify-content-center mt-3">
                                            <input name="ottBuscarTablElectrico" id="ottBuscarTablElectrico" class="form-control footer-input margin-b-20 input-busqueda-disp" placeholder="Ingrese la OTT a Buscar">
                                            <button class="btn-tabdispensadores" id="recuperarTablElectrico" type="submit">
                                                <span class="glyphicon glyphicon-refresh"></span><ion-icon name="search-outline"></ion-icon>
                                            </button>
                                        </div>

                                        <div class="col d-flex justify-content-center mt-3">
                                            <button class="btn-info2" id="add11">
                                                <span class="glyphicon glyphicon-plus-sign">

                                                </span>
                                                AGREGAR FILA

                                            </button>
                                        </div>

                                        <div class="col d-flex justify-content-center mt-3">
                                            <button class="btn-info" id="guardarTablElectrico" type="submit">
                                                <span class="glyphicon glyphicon-plus-sign"></span>GUARDAR
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container" id="Snx1" style="margin-top: 50px;">
                                <div class="row" id="controlVentas1">
                                    <div class="container-fluid" style="min-width: 300px">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">>
                                            <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h1> Tablero Electrico 1 antes</h1>
                                    <div class="row" id="AgregarFila4-1" style="min-height: 500px;">
                                        <div class="letrero col" id="añadir7">
                                            <div class="text-letrero">
                                                <h1 class="text">Haga Clic en <img src="./IMG/añadirimagen.png" width="24px"> para añadir fotografías</h1>
                                            </div>
                                            <div class="arrow-letrero">
                                                <div class="arrow"></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center contDescripcion">
                                        <div class="container">
                                            <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                        </div>
                                        <button class="btn-info" id="botonSeccionFotosp4-1" onclick="agregarSeccionSnx1()">
                                            <span class="glyphicon glyphicon-plus-sign"><img src="./IMG/agregar.png"><img src="./IMG/añadirimagen.png" width="24px"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">
                                <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                            <div class="container" id="Snx1">
                                <div class="row" id="controlVentas1">
                                    <div class="container-fluid" style="min-width: 300px">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">>
                                            <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h1> Tablero Electrico 1 despues</h1>
                                    <div class="row" id="AgregarFila4-2" style="min-height: 500px;">
                                        <div class="letrero col" id="añadir8">
                                            <div class="text-letrero">
                                                <h1 class="text">Haga Clic en <img src="./IMG/añadirimagen.png" width="24px"> para añadir fotografías</h1>
                                            </div>
                                            <div class="arrow-letrero">
                                                <div class="arrow"></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row d-flex justify-content-center contDescripcion">
                                        <div class="container">
                                            <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                                        </div>
                                        <div class="col-6 d-flex justify-content-center mt-4">
                                            <button class="btn-info" id="botonSeccionFotosp4-2" onclick="agregarSeccionSnx2()">
                                                <span class="glyphicon glyphicon-plus-sign"><img src="./IMG/agregar.png"><img src="./IMG/añadirimagen.png" width="24px"></span>
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">
                                <path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="container text-center d-flex justify-content-center mt-5 mb-5 " id="seccionTanks" style="display : none;">
                        <div class="row d-flex justify-content-center">
                            <div class="col-6 d-flex justify-content-center mt-4">
                                <button class="btn-info2" id="add11" onclick="agregarHtlm3()">
                                    <span class="glyphicon glyphicon-plus-sign"><span class="glyphicon glyphicon-plus-sign"><img src="./IMG/agregar.png"> <img src="./IMG/añadirSeccion.png"></span></span>
                                </button>
                            </div>
                            <div class="col-6 d-flex justify-content-center mt-4">
                                <button class="btn-info3" id="Elimbtn2" onclick="eliminarSeccion4();"><img src="./IMG/menos.png"> <img src="./IMG/añadirSeccion.png"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="site-footer" id="footerApp">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h6>SOBRE NOSOTROS</h6>
                        <h5>Buscamos ser referentes en la industria, marcando siempre pautas de innovación tanto en nuestros productos como en
                            nuestros procesos productivos, conservando siempre los más altos estándares de calidad.</h5>
                    </div>
                </div>
                <hr>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">© Grupo Empresarial Insepet 2021
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>
<script>
    $(document).ready(function() {
        $('#buscarOtt').click(function() {
            var $container = $('#seccionApp02');
            $container.css('display', 'block');
            $container.addClass('show');
        });
    });

</script>

</html>