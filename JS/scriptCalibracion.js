function AgregarSeccionTabla() {
    let contenedor = document.querySelector('#seccion-tabla');
    let p = document.createElement('tbody');
    p.innerHTML = ` <br><br><br><br><br><br><br><br>      
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
                            </tr>`;
    contenedor.appendChild(p);
}
