<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="/fichatecnica/CSS/calibracion.css">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="/fichatecnica/JS/sweetalert.min.js"></script>
        <script src="/fichatecnica/JS/jquery-3.6.3.min.js"></script>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script src="/fichatecnica/JS/printThis.js"></script>
        <script src="/fichatecnica/JS/scriptCalibracion.js"></script>
    </head>
    <header id="header" style="z-index: 99999;">
        <div class="topnav" id="myTopnav" style="width: 95%;">
            <a href="#" id="active" style="color: white; background-color: black;">INSEPET</a>
            <div class="container w-100">
                <a href="/fichatecnica">VOLVER</a>
                <a href="#inicio"><button id="exportarpdf">EXPORTAR</button></a>
                <a href="../includes/logout.php" id = "cerrarSesion">Cerrar Sesión</a>
                <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="NavBar()">&#9776;</a>
            </div>
        </div>
    </header>
    <body>
        <div class = "container" id = "fullcontainer">
            <div class="card" style="width: 100%;">

            </div>    
            <div class="card-body">
                <div class = "row">
                    <div class = "col">
                        <img class = "imgInicio" src="/fichatecnica/IMG/logo-insepet1.png" with = "250px" alt="...">
                    </div>
                    <div class = "col">
                        <h5 class="card-title"> CALIBRACIONUNIDAD DE MEDIDAS EQUIPOS DE DESPACHO ESTACION DE SERVICIO </h5>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class ="row">
                    <div class = "col-md">
                        <h5 class ="gestion-mantenimiento">PN-LO.MP.GÑ.F41.COL GESTION DE MANTENIMIENTO</h5>
                    </div>
                    <div class = "col-sm">
                        <h6>VERSIÓN : <input type ="text" class= "form-control margin-b-20" placeholder ="Versión"></h6>
                    </div>
                    <div class = "col-sm">
                        <h6>FECHA : &nbsp&nbsp&nbsp&nbsp<input type ="date" class= "form-control margin-b-20"></h6>
                    </div>
                </div>
                
                
            </div>
            <ul class="list-group list-group-flush">
            </ul>
            <div class="card-body">
                <div class ="row" style = "text-align : center">
                    <div class = "col-sm">
                        <h6>E.D.S : <input type ="text" class= "form-control margin-b-20" placeholder ="Estacion De Servicio"></h6>
                    </div>
                    <div class = "col-sm">
                        <h6>CIUDAD : <input type ="text" class= "form-control margin-b-20" placeholder ="Ciudad"></h6>
                    </div>
                    <div class = "col-sm">
                        <h6>FECHA : <input type ="date" class= "form-control margin-b-20"></h6>
                    </div>
                </div>
            </div>
            <ul class="list-group list-group-flush">
            </ul>
            <div class="card-body">
                <div class ="row" style = "text-align : center">
                <h4>CALIBRADOR DE 5 GL</h4>
                    <div class = "col-sm">
                        <h6>N° CERTIFICADO : <input type ="text" class= "form-control margin-b-20"placeholder ="N° Certificado"></h6>
                    </div>
                    <div class = "col-sm">
                        <h6>CERTIFICADO POR : <input type ="text" class= "form-control margin-b-20" placeholder ="Certificado Por"></h6>
                    </div>
                </div>
            </div>
            <ul class="list-group list-group-flush">
            </ul>
            <div class="card-body">
                <div class ="row" style = "text-align : center">
                <h4>CALIBRADOR DE 0.5 GL</h4>
                    <div class = "col-sm">
                        <h6>N° CERTIFICADO : <input type ="text" class= "form-control margin-b-20"placeholder ="N° Galones"></h6>
                    </div>
                    <div class = "col-sm">
                        <h6>CERTIFICADO POR : <input type ="text" class= "form-control margin-b-20" placeholder ="Certificado Por"></h6>
                    </div>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <br><br><br><br><br>
                <div class = "container tabla-principal">
                    <table class="table table-striped table-dark table-bordered table-hover" id = "seccion-tabla">
                        <tbody>
                            <tr>
                                <th colspan = "3" scope = "row">EQUIPO DISPENSADOR</th>
                                <td>CALIBRADOR 5 GL</td>
                                <td>CALIBRADOR 0.5 GL</td>
                            </tr>
                            <tr>
                                <th><b>EQUIPO N°</b> <input type = "number" class ="input-tabla form-control margin-b-20" placeholder ="Equipo N°"></th>
                                <td><b>PRODUCTO</b> <input type = "text" class ="input-tabla form-control margin-b-20" placeholder ="Producto"></td>
                                <td><b>CONT. INICIAL</b> <input type = "number" class ="input-tabla form-control margin-b-20" placeholder ="Contador Inicial"></td>
                                <th><b>VERIFICACIÓN</b> <input type = "number" class ="input-tabla form-control margin-b-20" placeholder ="1"></th>
                                <th><b>VERIFICACIÓN</b> <input type = "number" class ="input-tabla form-control margin-b-20" placeholder ="1"></th>
                            </tr>
                            <tr>
                                <th><b>SERIE N°</b> <input type = "number" class ="input-tabla form-control margin-b-20" placeholder ="Serie N°"></th>
                                <td><b>PRECI. INICIAL </b><input type = "number" class ="input-tabla form-control margin-b-20" placeholder ="Precinto Inicial"></td>
                                <td><b>CONT. FINAL <input type = "number" class ="input-tabla form-control margin-b-20"placeholder ="Contador Final"></td>
                                <th><b>VERIFICACIÓN</b> <input type = "number" class ="input-tabla form-control margin-b-20"placeholder ="2"></th>
                                <th><b>VERIFICACIÓN</b> <input type = "number" class ="input-tabla form-control margin-b-20"placeholder ="2"></th>
                            </tr>
                            <tr>
                                <th><b>MANGUERA<b> <input type = "number" class ="input-tabla form-control margin-b-20" placeholder ="Manguera"></th>
                                <td><b>PRECINTO FINAL</b> <input type = "number" class ="input-tabla form-control margin-b-20" placeholder ="Precinto Final"></td>
                                <td></td>
                                <th><b>VERIFICACIÓN</b> <input type = "number" class ="input-tabla form-control margin-b-20"placeholder ="3"></th>
                                <th><b>VERIFICACIÓN</b> <input type = "number" class ="input-tabla form-control margin-b-20"placeholder ="3"></th>
                            </tr>
                        </tbody>
                    </table>
                <button type="submit" onclick="AgregarSeccionTabla();" class="btn-theme-sm  btn-base-bg" id ="btn-agregarTablas">
                    <span></span>AGREGAR FILA
                </button>
                </div>
            </ul>            
        </div>
    </body>
    <script>
        $(document).ready(function () {
        $("#exportarpdf").click(function () {
            $("#fullcontainer").css("margin-top","0px");
            $("#btn-agregarTablas").css("display","none");
            swal({
                title: "¿Desea Exportar el Aplicativo?",
                text: "Al presionar Ok saldrá una ventana emergente, la cual debe configurar en la parte superior derecha de tal forma: \n \n Destino: Guardar como PDF. \n Páginas : Todo. \n Diseño: Vertical. \n \n Seleccione la opcion de mas ajustes: \n\n Tamaño Papel: Letter. / Carta. \n Página por hoja : 1. \n  Margenes : Predeterminadas. \n Escala : Predeterminado. \n \n Seleccional la casilla de Graficos de Fondo.',",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        $('#fullcontainer').printThis();
                        pageTitle: "INSEPET SAS";
                        importCSS: true;
                    } else {
                        swal("Se cancelo la solicitud.");
                    }
                });

        })
    });
    </script>
</html>
