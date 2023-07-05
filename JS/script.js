var contador = 1, count1 = 2, count2 = 2, count3 = 2, count4 = 2, count5 = 2, count6 = 2, count7 = 2, count8 = 2; countEliminar = 2; countEliminar2 = 2;
var id1 = 1, id2 = 1;
var countFotos = 1;
var countFotos2 = 1;

(function () {
    "use strict";

    var cvs, ctx;
    var nodes = 6;
    var waves = [];
    var waveHeight = 60;
    var colours = ["#f80000", "#00f800", "#0000f8"];

    // Initiator function
    function init() {
        cvs = document.getElementById("canvas");
        ctx = cvs.getContext("2d");
        resizeCanvas(cvs);

        for (var i = 0; i < 3; i++) {
            waves.push(new wave(colours[i], 1, nodes));
        }

        update();
    }

    function update() {
        var fill = window.getComputedStyle(document.querySelector(".header"), null).getPropertyValue("background-color");
        ctx.fillStyle = fill;
        ctx.globalCompositeOperation = "source-over";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        ctx.globalCompositeOperation = "screen";
        for (var i = 0; i < waves.length; i++) {
            for (var j = 0; j < waves[i].nodes.length; j++) {
                bounce(waves[i].nodes[j]);
            }
            drawWave(waves[i]);
        }
        ctx.fillStyle = fill;

        requestAnimationFrame(update);
    }

    function wave(colour, lambda, nodes) {

        this.colour = colour;
        this.lambda = lambda;
        this.nodes = [];
        var tick = 1;

        for (var i = 0; i <= nodes + 2; i++) {
            var temp = [(i - 1) * cvs.width / nodes, 0, Math.random() * 200, .3];
            this.nodes.push(temp);
            console.log(temp);
        }
        console.log(this.nodes);
    }

    function bounce(nodeArr) {
        nodeArr[1] = waveHeight / 2 * Math.sin(nodeArr[2] / 20) + cvs.height / 2;
        nodeArr[2] = nodeArr[2] + nodeArr[3];

    }

    function drawWave(obj) {

        var diff = function (a, b) {
            return (b - a) / 2 + a;
        }

        ctx.fillStyle = obj.colour;
        ctx.beginPath();
        ctx.moveTo(0, cvs.height);
        ctx.lineTo(obj.nodes[0][0], obj.nodes[0][1]);

        for (var i = 0; i < obj.nodes.length; i++) {

            if (obj.nodes[i + 1]) {
                ctx.quadraticCurveTo(
                    obj.nodes[i][0], obj.nodes[i][1],
                    diff(obj.nodes[i][0], obj.nodes[i + 1][0]), diff(obj.nodes[i][1], obj.nodes[i + 1][1])
                );
            }
            else {
                ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1]);
                ctx.lineTo(cvs.width, cvs.height);
            }
        }
        ctx.closePath();
        ctx.fill();
    }

    function drawNodes(array) {
        ctx.strokeStyle = "#888";

        for (var i = 0; i < array.length; i++) {
            ctx.beginPath();
            ctx.arc(array[i][0], array[i][1], 4, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();
        }

    }

    function drawLine(array) {
        ctx.strokeStyle = "#888";

        for (var i = 0; i < array.length; i++) {

            if (array[i + 1]) {
                ctx.lineTo(array[i + 1][0], array[i + 1][1]);
            }
        }

        ctx.stroke();
    }

    function resizeCanvas(canvas, width, height) {

        if (width && height) {
            canvas.width = width;
            canvas.height = height;
        }
        else {

            if (window.innerWidth > 1920) {
                canvas.width = window.innerWidth;
            }
            else {
                canvas.width = 1920;
            }

            canvas.height = waveHeight;
        }
    }

    document.addEventListener("DOMContentLoaded", init, false);
})();
function ocultarSeccion2() {
    document.getElementById("seccion2").style.display = "none";
}
function mostrarSeccion1() {
    document.getElementById("seccion1").style.display = "block";
}
/********************************Mostar Divs***************************************************/
function showContent1() {
    element = document.getElementById("tablaDispensadores");
    check = document.getElementById("dispensadores");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent2() {
    element = document.getElementById("tablaTanques");
    check = document.getElementById("tanque");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent3() {
    element = document.getElementById("consolaVeeder");
    check = document.getElementById("veeder");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
function showContent4() {
    element = document.getElementById("tablaSistemasnx");
    check = document.getElementById("sistemasnx");
    if (check.checked) {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
/****************firstDiv*******************/
function showContent5() {


    element = document.getElementById("tablaDispensadores1");
    element2 = document.getElementById("tabDispensers");
    check = document.getElementById("dispensadores1");
    if (check.checked) {
        element.style.display = 'block';
        element2.style.display = 'block';
    }
    else {
        element.style.display = 'none';
        element2.style.display = 'none';
    }
}
function showContent6() {
    element = document.getElementById("tablaTanques1");
    element2 = document.getElementById("tabTanks");
    check = document.getElementById("tanque1");
    if (check.checked) {
        element.style.display = 'block';
        element2.style.display = 'block';
    }
    else {
        element.style.display = 'none';
        element2.style.display = 'none';
    }
}
function showContent7() {
    element = document.getElementById("consolaVeeder1");
    element2 = document.getElementById("tabConsole");
    check = document.getElementById("veeder1");
    if (check.checked) {
        element.style.display = 'block';
        element2.style.display = 'block';
    }
    else {
        element.style.display = 'none';
        element2.style.display = 'none';
    }
}
function showContent8() {
    element = document.getElementById("tablaSistemasnx1");
    element2 = document.getElementById("tabSnx");
    check = document.getElementById("sistemasnx1");
    if (check.checked) {
        element.style.display = 'block';
        element2.style.display = 'block';
    }
    else {
        element.style.display = 'none';
        element2.style.display = 'none';
    }
}
/*********************secondDiv******************************/

/********************NavBar**************************/
function NavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTopnav").style.width = "100%";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.top = "0%";
    } else {
        document.getElementById("myTopnav").style.width = "80%";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.top = "2rem";
    }
}
/*********************************Fotos**********************************/

function initImageUpload(box) {
    let uploadField = box.querySelector('.image-upload');

    uploadField.addEventListener('change', getFile);

    function getFile(e) {
        let file = e.currentTarget.files[0];
        checkType(file);
    }

    function previewImage(file) {
        let thumb = box.querySelector('.js--image-preview'),
            reader = new FileReader();

        reader.onload = function () {
            thumb.style.backgroundImage = 'url(' + reader.result + ')';
        }
        reader.readAsDataURL(file);
        thumb.className += ' js--no-default';
    }

    function checkType(file) {
        let imageType = /image.*/;
        if (!file.type.match(imageType)) {
            throw 'Datei ist kein Bild';
        } else if (!file) {
            throw 'Kein Bild gewählt';
        } else {
            previewImage(file);
        }
    }

}

// initialize box-scope
var boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    initDropEffect(box);
    initImageUpload(box);
}



/// drop-effect
function initDropEffect(box) {
    let area, drop, areaWidth, areaHeight, maxDistance, dropWidth, dropHeight, x, y;

    // get clickable area for drop effect
    area = box.querySelector('.js--image-preview');
    area.addEventListener('click', fireRipple);

    function fireRipple(e) {
        area = e.currentTarget
        // create drop
        if (!drop) {
            drop = document.createElement('span');
            drop.className = 'drop';
            this.appendChild(drop);
        }
        // reset animate class
        drop.className = 'drop';

        // calculate dimensions of area (longest side)
        areaWidth = getComputedStyle(this, null).getPropertyValue("width");
        areaHeight = getComputedStyle(this, null).getPropertyValue("height");
        maxDistance = Math.max(parseInt(areaWidth, 10), parseInt(areaHeight, 10));

        // set drop dimensions to fill area
        drop.style.width = maxDistance + 'px';
        drop.style.height = maxDistance + 'px';

        // calculate dimensions of drop
        dropWidth = getComputedStyle(this, null).getPropertyValue("width");
        dropHeight = getComputedStyle(this, null).getPropertyValue("height");

        // calculate relative coordinates of click
        // logic: click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center
        x = e.pageX - this.offsetLeft - (parseInt(dropWidth, 10) / 2);
        y = e.pageY - this.offsetTop - (parseInt(dropHeight, 10) / 2) - 30;

        // position drop and animate
        drop.style.top = y + 'px';
        drop.style.left = x + 'px';
        drop.className += ' animate';
        e.stopPropagation();
    }
}
/**********************EditarTablas***************************/
var params = null;
var colsEdi = null;
var newColHtml = '<div class="btn-group pull-right">' +
    '<button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);">' +
    '<span class="glyphicon glyphicon-pencil" > <ion-icon name="create-outline"></ion-icon></span>' +
    '</button>' +
    '<button id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);">' +
    '<span class="glyphicon glyphicon-trash" ><ion-icon name="trash-outline"></ion-icon></span>' +
    '</button>' +
    '<button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowAcep(this);">' +
    '<span class="glyphicon glyphicon-ok" ><ion-icon name="checkmark-done-outline"></ion-icon> </span>' +
    '</button>' +
    '<button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowCancel(this);">' +
    '<span class="glyphicon glyphicon-remove" ><ion-icon name="close-circle-outline"></ion-icon></span>' +
    '</button>' +
    '</div>';
var colEdicHtml = '<td name="buttons">' + newColHtml + '</td>';
function FijModoNormal(but) {
    $(but).parent().find('#bAcep').hide();
    $(but).parent().find('#bCanc').hide();
    $(but).parent().find('#bEdit').show();
    $(but).parent().find('#bElim').show();
    var $row = $(but).parents('tr');
    $row.attr('id', '');
}
function FijModoEdit(but) {
    $(but).parent().find('#bAcep').show();
    $(but).parent().find('#bCanc').show();
    $(but).parent().find('#bEdit').hide();
    $(but).parent().find('#bElim').hide();
    var $row = $(but).parents('tr');
    $row.attr('id', 'editing');
}
function ModoEdicion($row) {
    if ($row.attr('id') == 'editing') {
        return true;
    } else {
        return false;
    }
}
function rowAcep(but) {
    var $row = $(but).parents('tr');
    var $cols = $row.find('td');
    if (!ModoEdicion($row)) return;
    IterarCamposEdit($cols, function ($td) {
        var cont = $td.find('input').val();
        $td.html(cont);
    });
    FijModoNormal(but);
    params.onEdit($row);
}
function rowCancel(but) {
    var $row = $(but).parents('tr');
    var $cols = $row.find('td');
    if (!ModoEdicion($row)) return;
    IterarCamposEdit($cols, function ($td) {
        var cont = $td.find('div').html();
        $td.html(cont);
    });
    FijModoNormal(but);
}
function rowEdit(but) {
    var $row = $(but).parents('tr');
    var $cols = $row.find('td');
    if (ModoEdicion($row)) return;
    IterarCamposEdit($cols, function ($td) {
        var cont = $td.html();
        var div = '<div style="display: none;">' + cont + '</div>';
        var input = '<input class="form-control input-sm" value="' + cont + '"required>';
        $td.html(div + input);
    });
    FijModoEdit(but);
}
function rowElim(but) {
    var $row = $(but).parents('tr');
    params.onBeforeDelete($row);
    $row.remove();
    params.onDelete();

}
function rowAddNew(tabId) {
    var $tab_en_edic = $("#" + tabId);
    var $filas = $tab_en_edic.find('tbody tr');

    if ($filas.length == 0) {

        var $row = $tab_en_edic.find('thead tr');
        var $cols = $row.find('th');

        var htmlDat = '';
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
                htmlDat = htmlDat + colEdicHtml;
            } else {
                htmlDat = htmlDat + '<td></td>';
            }
        });

        $tab_en_edic.find('tbody').append('<tr>' + htmlDat + '</tr>');
    } else {

        var $ultFila = $tab_en_edic.find('tr:last');
        $ultFila.clone().appendTo($ultFila.parent());
        $ultFila = $tab_en_edic.find('tr:last');
        var $cols = $ultFila.find('td');
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
            } else {
                $(this).html('');
            }
        });
    }
    params.onAdd();
}
function IterarCamposEdit($cols, tarea) {
    var n = 0;
    $cols.each(function () {
        n++;
        if ($(this).attr('name') == 'buttons') return;
        if (!EsEditable(n - 1)) return;
        tarea($(this));
    });

    function EsEditable(idx) {
        if (colsEdi == null) {
            return true;
        } else {
            for (var i = 0; i < colsEdi.length; i++) {
                if (idx == colsEdi[i]) return true;
            }
            return false;
        }
    }
}

/********************AgregarSeccionFotos**************************/
function agregarHtlm() {
    let contenedor = document.querySelector('#tablaDispensadores1');
    let p = document.createElement('div');
    p.setAttribute("class", "row ");
    p.setAttribute("id", "dispensadoresElim" + countEliminar);

    p.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Equipo `+ count2 + ` antes</h1>
                        <h1 style="display:none"> Equipo `+ count1++ + `</h1>

                        <div class="row d-flex align-items-center" id="AgregarFila1-`+ count1 + `"style="min-height: 500px;">
                            <div class="letrero col" id="letrero1-`+ id1++ + `">
                                <div class="text-letrero">
                                    <h1 class="text">Clic en añadir fotografías</h1>
                                </div>
                                <div class="arrow-letrero">
                                    <div class="arrow"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row d-flex justify-content-center contDescripcion"Sstyle="display: flex; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="botonSeccionFotos1-`+ count1 + `" onclick="agregarSeccion` + count1 + `()">
                                    <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                                </button>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Equipo `+ count2 + ` despues</h1>
                        <h1 style="display:none"> Equipo `+ count1++ + `</h1>

                        <div class="row d-flex align-items-center" id="AgregarFila1-`+ count1 + `"style="min-height: 500px;">
                            <div class="letrero col" id="letrero1-`+ id1++ + `">
                                <div class="text-letrero">
                                    <h1 class="text">Clic en añadir fotografías</h1>
                                </div>
                                <div class="arrow-letrero">
                                    <div class="arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center contDescripcion"Sstyle="display: flex; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado a los equipos...."></textarea>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="botonSeccionFotos1-`+ count1 + `" onclick="agregarSeccion` + count1 + `()">
                                    <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                                </button>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    `;
    contenedor.appendChild(p);
    count2++;
    countEliminar++;

    $(document).ready(function () {
        for (let i = 0; i <= 36; i++) {
            let selector = `#botonSeccionFotos1-${i}`;
            let contadorFotos = 1;
            for (let e = 1; e <= 34; e++) {
                let selector2 = `#letrero1-${e}`;
                $(selector).click(function () {
                    $(selector2).css("display", "none");
                });
            }
            $(selector).click(function () {
                contadorFotos++;
                if (contadorFotos >= 7) {
                    $(selector).css("display", "none");
                }
            });
        }
    });
}
function eliminarSeccion() {
    swal({
        title: "¿Desea Eliminar La Última Sección Agregada?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                let contenedor = document.querySelector('#tablaDispensadores1');
                let divs = contenedor.querySelectorAll('div[id^="dispensadoresElim"]');
                if (divs.length > 0) {
                    let lastDiv = divs[divs.length - 1];
                    contenedor.removeChild(lastDiv);
                    count2--;
                } else {
                    alert("No Hay Secciones Para Eliminar");
                }
            }
        });
}
function eliminarSeccionCopia() {
    let contenedor = document.querySelector('#tablaDispensadores1');
    let divs = contenedor.querySelectorAll('div[id^="dispensadoresElim"]');
    if (divs.length > 0) {
        let lastDiv = divs[divs.length - 1];
        contenedor.removeChild(lastDiv);
        count2--;
    }
}

/************************************************************************************************************/
function agregarHtlm1() {
    let contenedor = document.querySelector('#tablaTanques1');
    let p = document.createElement('div');
    p.setAttribute("class", "row ");
    p.setAttribute("id", "tanquesElim" + countEliminar2);

    p.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Tanque `+ count4 + ` antes</h1>
                        <h1 style="display:none"> Tanque `+ count3++ + `</h1>

                        <div class="row d-flex align-items-center" id="AgregarFila2-`+ count3 + `"style="min-height: 500px;">
                            <div class="letrero col" id="letrero2-`+ id2++ + `">
                                <div class="text-letrero">
                                    <h1 class="text">Clic en añadir fotografías</h1>
                                </div>
                                <div class="arrow-letrero">
                                    <div class="arrow"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row d-flex justify-content-center contDescripcion"Sstyle="display: flex; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado a los tanques...."></textarea>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="botonSeccionFotos2-`+ count3 + `" onclick="agregarSeccionTanques` + count3 + `()">
                                    <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                                </button>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Tanque `+ count4 + ` despues</h1>
                        <h1 style="display:none"> Tanque `+ count3++ + `</h1>

                        <div class="row d-flex align-items-center" id="AgregarFila2-`+ count3 + `"style="min-height: 500px;">
                            <div class="letrero col" id="letrero2-`+ id2++ + `">
                                <div class="text-letrero">
                                    <h1 class="text">Clic en añadir fotografías</h1>
                                </div>
                                <div class="arrow-letrero">
                                    <div class="arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center contDescripcion"Sstyle="display: flex; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado a los tnaques...."></textarea>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="botonSeccionFotos2-`+ count3 + `" onclick="agregarSeccionTanques` + count3 + `()">
                                    <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                                </button>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    `;
    contenedor.appendChild(p);
    count4++;
    countEliminar2++;



    $(document).ready(function () {
        for (let i = 0; i <= 36; i++) {
            let selector = `#botonSeccionFotos2-${i}`;
            let contadorFotos = 1;
            for (let e = 1; e <= 34; e++) {
                let selector2 = `#letrero2-${e}`;
                $(selector).click(function () {
                    $(selector2).css("display", "none");
                });
            }
            $(selector).click(function () {
                contadorFotos++;
                if (contadorFotos >= 7) {
                    $(selector).css("display", "none");
                }
            });
        }
    });
}
function eliminarSeccion2() {
    swal({
        title: "¿Desea Eliminar La Última Sección Agregada?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                let contenedor = document.querySelector('#tablaTanques1');
                let divs = contenedor.querySelectorAll('div[id^="tanquesElim"]');
                if (divs.length > 0) {
                    let lastDiv = divs[divs.length - 1];
                    contenedor.removeChild(lastDiv);
                    count2--;
                } else {
                    alert("No Hay Secciones Para Eliminar");
                }
            }
        });
}


function agregarHtlm2() {
    let contenedor = document.querySelector('#consolaVeeder1');
    let p = document.createElement('div');
    p.setAttribute("class", "row ");
    p.setAttribute("id", "dispensadoresElim" + count5);

    p.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Control Ventas `+ count6 + ` antes</h1>
                        <h1 style="display:none"> Control Ventas `+ count5++ + `</h1>

                        <div class="row d-flex align-items-center" id="AgregarFila3-`+ count5 + `"style="min-height: 500px;">
                            <div class="letrero col" id="letrero3-`+ id2++ + `">
                                <div class="text-letrero">
                                    <h1 class="text">Clic en añadir fotografías</h1>
                                </div>
                                <div class="arrow-letrero">
                                    <div class="arrow"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row d-flex justify-content-center contDescripcion"Sstyle="display: flex; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado a las Consolas...."></textarea>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="botonSeccionFotos3-`+ count5 + `" onclick="agregarSeccionConsola` + count5 + `()">
                                    <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                                </button>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Control Ventas `+ count6 + ` despues</h1>
                        <h1 style="display:none"> Control Ventas `+ count5++ + `</h1>

                        <div class="row d-flex align-items-center" id="AgregarFila3-`+ count5 + `"style="min-height: 500px;">
                            <div class="letrero col" id="letrero3-`+ id2++ + `">
                                <div class="text-letrero">
                                    <h1 class="text">Clic en añadir fotografías</h1>
                                </div>
                                <div class="arrow-letrero">
                                    <div class="arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center contDescripcion"Sstyle="display: flex; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado a los tnaques...."></textarea>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="botonSeccionFotos3-`+ count5 + `" onclick="agregarSeccionConsola` + count5 + `()">
                                    <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                                </button>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    `;
    count6++;
    contenedor.appendChild(p);

    $(document).ready(function () {
        for (let i = 0; i <= 36; i++) {
            let selector = `#botonSeccionFotos3-${i}`;
            let contadorFotos = 1;
            for (let e = 1; e <= 34; e++) {
                let selector2 = `#letrero3-${e}`;
                $(selector).click(function () {
                    $(selector2).css("display", "none");
                });
            }
            $(selector).click(function () {
                contadorFotos++;
                if (contadorFotos >= 7) {
                    $(selector).css("display", "none");
                }
            });
        }
    });
}
function eliminarSeccion3() {
    swal({
        title: "¿Desea Eliminar La Última Sección Agregada?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                let contenedor = document.querySelector('#consolaVeeder1');
                let divs = contenedor.querySelectorAll('div[id^="dispensadoresElim"]');
                if (divs.length > 0) {
                    let lastDiv = divs[divs.length - 1];
                    contenedor.removeChild(lastDiv);
                    count2--;
                } else {
                    alert("No Hay Secciones Para Eliminar");
                }
            }
        });
}


function agregarHtlm3() {
    let contenedor = document.querySelector('#tablaSistemasnx1');
    let p = document.createElement('div');
    p.setAttribute("class", "row ");
    p.setAttribute("id", "sistemasnxElim" + count7);

    p.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Tablero Electrico `+ count8 + ` antes</h1>
                        <h1 style="display:none"> Tablero Electrico `+ count7++ + `</h1>

                        <div class="row d-flex align-items-center" id="AgregarFila4-`+ count7 + `"style="min-height: 500px;">
                            <div class="letrero col" id="letrero4-`+ id2++ + `">
                                <div class="text-letrero">
                                    <h1 class="text">Clic en añadir fotografías</h1>
                                </div>
                                <div class="arrow-letrero">
                                    <div class="arrow"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row d-flex justify-content-center contDescripcion"Sstyle="display: flex; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado a las Consolas...."></textarea>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="botonSeccionFotos4-`+ count7 + `" onclick="agregarSeccionSnx` + count7 + `()">
                                    <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                                </button>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <div class="container">
                        <h1> Tablero Electrico `+ count8 + ` despues</h1>
                        <h1 style="display:none"> Tablero Electrico `+ count7++ + `</h1>

                        <div class="row d-flex align-items-center" id="AgregarFila4-`+ count7 + `"style="min-height: 500px;">
                            <div class="letrero col" id="letrero4-`+ id2++ + `">
                                <div class="text-letrero">
                                    <h1 class="text">Clic en añadir fotografías</h1>
                                </div>
                                <div class="arrow-letrero">
                                    <div class="arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center contDescripcion"Sstyle="display: flex; justify-content: center;">
                            <div class="container">
                                <textarea class="textArea" placeholder="Describa el proceso que se realizado a los tnaques...."></textarea>
                            </div>
                            <div class="col-sm d-flex justify-content-center">
                                <button class="btn-info" id="botonSeccionFotos4-`+ count7 + `" onclick="agregarSeccionSnx` + count7 + `()">
                                    <span class="glyphicon glyphicon-plus-sign"></span>AÑADIR FOTOGRAFIAS
                                </button>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="min-width: 300px">><path fill="#0099ff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    `;
    count8++;
    contenedor.appendChild(p);

    $(document).ready(function () {
        for (let i = 0; i <= 36; i++) {
            let selector = `#botonSeccionFotos4-${i}`;
            let contadorFotos = 1;
            for (let e = 1; e <= 34; e++) {
                let selector2 = `#letrero4-${e}`;
                $(selector).click(function () {
                    $(selector2).css("display", "none");
                });
            }
            $(selector).click(function () {
                contadorFotos++;
                if (contadorFotos >= 7) {
                    $(selector).css("display", "none");
                }
            });
        }
    });
}
function eliminarSeccion4() {
    swal({
        title: "¿Desea Eliminar La Última Sección Agregada?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                let contenedor = document.querySelector('#tablaSistemasnx1');
                let divs = contenedor.querySelectorAll('div[id^="sistemasnxElim"]');
                if (divs.length > 0) {
                    let lastDiv = divs[divs.length - 1];
                    contenedor.removeChild(lastDiv);
                    count2--;
                } else {
                    alert("No Hay Secciones Para Eliminar");
                }
            }
        });
}








$(document).ready(function () {

    
    
    /********************************************************************************************************************************************************************/
    /*********************************************************************SOLICITUDES TAABLA PRINCIPAL*******************************************************************/
    /********************************************************************************************************************************************************************/
    const ottInput = document.getElementById('ott');
    const buscarButton = document.getElementById('buscarOTT');
    const fechaInput = document.getElementById('fecha');
    const ciudadInput = document.getElementById('ciudad');
    const versionInput = document.getElementById('version');
    const pedidoInput = document.getElementById('pedido');
    const banderaInput = document.getElementById('bandera');
    const edsInput = document.getElementById('eds');
    const tecnicosInput = document.getElementById('tecnicos');
    const razonSocialInput = document.getElementById('razonSocial');
    const asuntoInput = document.getElementById('asunto');

    $.fn.SetEditable = function (options) {
        var defaults = {
            columnsEd: null,
            $addButton: null,
            onEdit: function () { },
            onBeforeDelete: function () { },
            onDelete: function () { },
            onAdd: function () { }
        };
        params = $.extend(defaults, options);
        this.find('thead tr').append('<td name="buttons"><span class="glyphicon glyphicon-thumbs-up"></span></td>');
        this.find('tbody tr').append(colEdicHtml);
        var $tabedi = this;
        if (params.$addButton != null) {
            params.$addButton.click(function () {
                rowAddNew($tabedi.attr("id"));
            });
        }
        if (params.columnsEd != null) {
            colsEdi = params.columnsEd.split(',');
        }

    };
    buscarButton.addEventListener('click', () => {
        const ottValue = ottInput.value;
        // Realizar una petición al servidor para recuperar los datos por el ID (OTT)

        fetch(`./includes/Controladores/EnviarDatos/procesarFormulario.php?ott=${ottValue}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert('No se encontraron datos para la OTT especificada');
                } else {
                    fechaInput.value = data.fecha_servicio;
                    ciudadInput.value = data.ciudad;
                    versionInput.value = data.version;
                    pedidoInput.value = data.n_pedido;
                    banderaInput.value = data.bandera;
                    edsInput.value = data.eds;
                    tecnicosInput.value = data.tecnicos;
                    razonSocialInput.value = data.razon_social;
                    asuntoInput.value = data.asunto;
                    // Mostrar la OTT en un alert
                    alert(`OTT recuperada: ${data.ott}`);
                    $("#seccionApp02").show();
                    // Deshabilitar el botón "buscarButton"
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    $(document).ready(function () {
        $('#formularioRazon').submit(function (event) {
            event.preventDefault(); // Evitar el envío normal del formulario

            // Obtener los datos del formulario
            var formData = $(this).serialize();

            // Enviar los datos mediante AJAX
            $.ajax({
                type: 'POST',
                url: './includes/Controladores/EnviarDatos/procesarFormulario.php', // Reemplaza con la URL de tu archivo PHP
                data: formData,
                dataType: 'json',
                success: function (response) {
                    // Mostrar el mensaje de confirmación en la misma página
                    alert(response.message);

                    // Asignar el valor de ott al campo de entrada correspondiente
                    $('#ott').val(response.ott);
                    $("#seccionApp02").show();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR);
                    console.log(textStatus);

                    //alert('Error al enviar los datos.');
                }
            });
        });
    });

    /***********************************************************************************************************************************************************************/
    /*********************************************************************SOLICITUDES TABLA DISPENSADORES*******************************************************************/
    /***********************************************************************************************************************************************************************/
    $(document).ready(function () {
        // Evento de clic del botón "Guardar"
        $('#guardar').click(function () {
            // Obtener todas las filas de la tabla
            var tableRows = $('#table-list8 tbody tr');

            // Crear un array para almacenar los datos de todas las filas
            var tableData = [];

            // Recorrer todas las filas y obtener sus datos
            tableRows.each(function () {
                var rowData = {
                    equipo: $(this).find('td:eq(0)').text(),
                    marca: $(this).find('td:eq(1)').text(),
                    serial: $(this).find('td:eq(2)').text(),
                    modelo: $(this).find('td:eq(3)').text(),
                    referencia: $(this).find('td:eq(4)').text()
                };
                tableData.push(rowData);
            });

            // Crear un objeto con los datos a enviar
            var postData = {
                tableData: JSON.stringify(tableData)
            };

            // Enviar los datos al archivo PHP mediante AJAX
            $.ajax({
                type: 'POST',
                url: './includes/Controladores/EnviarDatos/procesarDispensadores.php',
                data: postData,
                success: function (response) {
                    // Manejar la respuesta del servidor
                    console.log(response);
                    if (response === 'No se ingresaron datos en los campos.') {
                        // Mostrar el mensaje de error si no se encontraron datos en la tabla
                        alert(response);
                    } else {
                        // Actualizar el contenido de la página o realizar otras acciones
                        alert('Datos insertados correctamente en la base de datos.');
                    }
                },
                error: function (xhr, status, error) {
                    // Manejar errores en la comunicación con el servidor
                    console.error(error);
                }
            });
        });
    });

    $(document).ready(function () {
        // Evento de clic del botón "Recuperar"
        $('#recuperar').click(function () {
            var ottBuscar = $('#ottBuscar').val();
            $.ajax({
                type: "POST",
                url: "./includes/Controladores/RecuperarDatos/recuperarDatos.php",
                data: {
                    ottBuscar: ottBuscar
                },
                success: function (response) {
                    try {
                        var data = JSON.parse(response);
                        if (data.length > 0) {
                            var tableBody = $('#table-list8 tbody');
                            tableBody.empty(); // Eliminar filas existentes

                            // Crear filas para cada dato recuperado
                            $.each(data, function (index, row) {
                                var newRow = '<tr>' +
                                    '<td>' + row.equipo + '</td>' +
                                    '<td>' + row.marca + '</td>' +
                                    '<td>' + row.serial + '</td>' +
                                    '<td>' + row.modelo + '</td>' +
                                    '<td>' + row.referencia + '</td>' +
                                    '<td name="buttons"><div class="btn-group pull-right"><button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);" style=""><span class="glyphicon glyphicon-pencil"> <ion-icon name="create-outline" role="img" class="md hydrated" aria-label="create outline"></ion-icon></span></button><button id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);" style=""><span class="glyphicon glyphicon-trash"><ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon></span></button><button id="bAcep" type="button" class="btn btn-sm btn-default" style="display: none;" onclick="rowAcep(this);"><span class="glyphicon glyphicon-ok"><ion-icon name="checkmark-done-outline" role="img" class="md hydrated" aria-label="checkmark done outline"></ion-icon> </span></button><button id="bCanc" type="button" class="btn btn-sm btn-default" style="display: none;" onclick="rowCancel(this);"><span class="glyphicon glyphicon-remove"><ion-icon name="close-circle-outline" role="img" class="md hydrated" aria-label="close circle outline"></ion-icon></span></button></div></td>' +
                                    '</tr>';
                                tableBody.append(newRow);
                            });
                            alert("Datos recuperados. Cantidad de filas: " + data.length);

                            // Deshabilitar el botón "Recuperar"
                            $('#recuperar').prop('disabled', true);
                        } else {
                            alert("La OTT ingresada no existe en la base de datos.");
                        }
                    } catch (error) {
                        console.log('Error al analizar la respuesta JSON:', error);
                    }
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        });
    });
    /*******************************************************************************************************************************************************************************/
    /*********************************************************************************SOLICITUDES TABLA TANQUES*********************************************************************/
    /*******************************************************************************************************************************************************************************/
    $(document).ready(function () {
        // Evento de clic del botón "Guardar"
        $('#guardarTanques').click(function () {
            // Obtener los datos de la tabla
            var tableData = [];
            $('#table-list9 tbody tr').each(function () {
                var rowData = {
                    tanque: $(this).find('td:nth-child(1)').text(),
                    producto: $(this).find('td:nth-child(2)').text(),
                    capacidadgl: $(this).find('td:nth-child(3)').text(),
                    estado: $(this).find('td:nth-child(4)').text()
                };
                tableData.push(rowData);
            });

            // Verificar si se ingresaron datos en los campos
            var datosIngresados = false;
            for (var i = 0; i < tableData.length; i++) {
                var rowData = tableData[i];
                if (rowData.tanque !== '' || rowData.producto !== '' || rowData.capacidadgl !== '' || rowData.estado !== '') {
                    datosIngresados = true;
                    break;
                }
            }

            // Si no se ingresaron datos, mostrar mensaje de error
            if (!datosIngresados) {
                alert('No se ingresaron datos en los campos.');
                return;
            }

            // Convertir los datos a formato JSON
            var jsonData = JSON.stringify(tableData);

            // Enviar la solicitud AJAX al controlador PHP
            $.ajax({
                type: 'POST',
                url: './includes/Controladores/EnviarDatos/ProcesarTanques.php',
                data: {
                    tableData: jsonData
                },
                success: function (response) {
                    alert('Los datos se han subido correctamente.');
                    console.log(response);
                    // Realizar cualquier acción adicional después de guardar los datos
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        });
    });

    $(document).ready(function () {
        // Evento de clic del botón "Guardar"
        $('#recuperarTanques').click(function () {
            var ottBuscarTanques = $('#ottBuscarTanques').val();
            $.ajax({
                type: "POST",
                url: "./includes/Controladores/RecuperarDatos/recuperarTabTanques.php",
                data: {
                    ottBuscarTanques: ottBuscarTanques
                },
                success: function (response) {
                    try {
                        var data = JSON.parse(response);
                        if (data.length > 0) {
                            var tableBody = $('#table-list9 tbody');
                            tableBody.empty(); // Eliminar filas existentes

                            // Crear filas para cada dato recuperado
                            $.each(data, function (index, row) {
                                var newRow = '<tr>' +
                                    '<td>' + row.tanque + '</td>' +
                                    '<td>' + row.producto + '</td>' +
                                    '<td>' + row.capacidadgl + '</td>' +
                                    '<td>' + row.estado + '</td>' +
                                    '<td name="buttons"><div class="btn-group pull-right"><button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);" style=""><span class="glyphicon glyphicon-pencil"> <ion-icon name="create-outline" role="img" class="md hydrated" aria-label="create outline"></ion-icon></span></button><button id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);" style=""><span class="glyphicon glyphicon-trash"><ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon></span></button><button id="bAcep" type="button" class="btn btn-sm btn-default" style="display: none;" onclick="rowAcep(this);"><span class="glyphicon glyphicon-ok"><ion-icon name="checkmark-done-outline" role="img" class="md hydrated" aria-label="checkmark done outline"></ion-icon> </span></button><button id="bCanc" type="button" class="btn btn-sm btn-default" style="display: none;" onclick="rowCancel(this);"><span class="glyphicon glyphicon-remove"><ion-icon name="close-circle-outline" role="img" class="md hydrated" aria-label="close circle outline"></ion-icon></span></button></div></td>' +
                                    '</tr>';
                                tableBody.append(newRow);
                            });

                            alert("Datos recuperados. Cantidad de filas: " + data.length);
                        } else {
                            alert("La OTT ingresada no existe en la base de datos.");
                        }
                    } catch (error) {
                        console.log('Error al analizar la respuesta JSON:', error);
                    }
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        });
    });
    /*****************************************************************************************************************************************************************************/
    /******************************************************************************SOLICITUDES TABLA CONTROL VENTAS***************************************************************/
    $(document).ready(function () {
        // Evento de clic del botón "Guardar"
        $('#guardarControlVentas').click(function () {
            // Obtener todas las filas de la tabla
            var tableRows = $('#table-list10 tbody tr');

            // Crear un array para almacenar los datos de todas las filas
            var tableData = [];

            // Recorrer todas las filas y obtener sus datos
            tableRows.each(function () {
                var rowData = {
                    sistema: $(this).find('td:eq(0)').text(),
                    impresoras: $(this).find('td:eq(1)').text(),
                    lectores: $(this).find('td:eq(2)').text(),
                    pantallas: $(this).find('td:eq(3)').text(),
                    operatividad: $(this).find('td:eq(4)').text(),
                    versionSistema: $(this).find('td:eq(5)').text(),
                    alarma: $(this).find('td:eq(6)').text()
                };
                tableData.push(rowData);
            });

            // Verificar si se ingresaron datos en los campos
            var datosIngresados = false;
            for (var i = 0; i < tableData.length; i++) {
                var rowData = tableData[i];
                if (rowData.sistema !== '' || rowData.impresoras !== '' || rowData.lectores !== '' || rowData.pantallas !== '' || rowData.operatividad !== '' || rowData.versionSistema !== '' || rowData.alarma !== '') {
                    datosIngresados = true;
                    break;
                }
            }

            // Si no se ingresaron datos, mostrar mensaje de error
            if (!datosIngresados) {
                alert('No se ingresaron datos en los campos.');
                return;
            }

            // Convertir los datos a formato JSON
            var jsonData = JSON.stringify(tableData);

            // Enviar la solicitud AJAX al controlador PHP
            $.ajax({
                type: 'POST',
                url: './includes/Controladores/EnviarDatos/procesarTablaVentas.php',
                data: {
                    tableData: jsonData
                },
                success: function (response) {
                    alert('Los datos se han subido correctamente.');
                    console.log(response);
                    // Realizar cualquier acción adicional después de guardar los datos
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        });
    });

    $(document).ready(function () {
        $('#recuperarControlVentas').click(function () {
            var ott = $('#ottBuscarControlVentas').val();

            // Enviar la OTT al archivo PHP mediante AJAX
            $.ajax({
                type: 'POST',
                url: './includes/Controladores/RecuperarDatos/recuperarTablaControlVentas.php',
                data: {
                    ottBuscarControlVentas: ott
                },
                success: function (response) {
                    // Manejar la respuesta del servidor
                    try {
                        var data = JSON.parse(response);

                        if (data.length > 0) {
                            var tableBody = $('#table-list10 tbody');
                            tableBody.empty(); // Eliminar filas existentes

                            // Crear filas para cada dato recuperado
                            $.each(data, function (index, row) {
                                var newRow = '<tr>' +
                                    '<td>' + row.sistema + '</td>' +
                                    '<td>' + row.impresoras + '</td>' +
                                    '<td>' + row.lectores + '</td>' +
                                    '<td>' + row.pantallas + '</td>' +
                                    '<td>' + row.operatividad + '</td>' +
                                    '<td>' + row.versionsistema + '</td>' +
                                    '<td>' + row.alarma + '</td>' +
                                    '<td name="buttons"><div class="btn-group pull-right"><button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);" style=""><span class="glyphicon glyphicon-pencil"> <ion-icon name="create-outline" role="img" class="md hydrated" aria-label="create outline"></ion-icon></span></button><button id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);" style=""><span class="glyphicon glyphicon-trash"><ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon></span></button><button id="bAcep" type="button" class="btn btn-sm btn-default" style="display: none;" onclick="rowAcep(this);"><span class="glyphicon glyphicon-ok"><ion-icon name="checkmark-done-outline" role="img" class="md hydrated" aria-label="checkmark done outline"></ion-icon> </span></button><button id="bCanc" type="button" class="btn btn-sm btn-default" style="display: none;" onclick="rowCancel(this);"><span class="glyphicon glyphicon-remove"><ion-icon name="close-circle-outline" role="img" class="md hydrated" aria-label="close circle outline"></ion-icon></span></button></div></td>' +
                                    '</tr>';
                                tableBody.append(newRow);
                            });

                            alert("Datos recuperados. Cantidad de filas: " + data.length);
                        } else {
                            alert("La OTT ingresada no existe en la base de datos.");
                        }
                    } catch (error) {
                        console.log('Error al analizar la respuesta JSON:', error);
                    }
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        });
    });
    /*****************************************************************************************************************************************************************************/
    /************************************************************************SOLICITUDES TABLA TABLERO ELECTRICO******************************************************************/
    $(document).ready(function () {
        // Evento de clic del botón "Guardar"
        $('#guardarTablElectrico').click(function () {
            // Obtener todas las filas de la tabla
            var tableRows = $('#table-list11 tbody tr');

            // Crear un array para almacenar los datos de todas las filas
            var tableData = [];

            // Recorrer todas las filas y obtener sus datos
            tableRows.each(function () {
                var rowData = {
                    regulador: $(this).find('td:eq(0)').text(),
                    ups: $(this).find('td:eq(1)').text(),
                    totalizadores: $(this).find('td:eq(2)').text(),
                    voltajes: $(this).find('td:eq(3)').text(),
                    paradaemergencia: $(this).find('td:eq(4)').text(),
                };
                tableData.push(rowData);
            });

            // Verificar si se ingresaron datos en los campos
            var datosIngresados = false;
            for (var i = 0; i < tableData.length; i++) {
                var rowData = tableData[i];
                if (rowData.regulador !== '' || rowData.ups !== '' || rowData.totalizadores !== '' || rowData.voltajes !== '' || rowData.paradaemergencia !== '') {
                    datosIngresados = true;
                    break;
                }
            }

            // Si no se ingresaron datos, mostrar mensaje de error
            if (!datosIngresados) {
                alert('No se ingresaron datos en los campos.');
                return;
            }

            // Convertir los datos a formato JSON
            var jsonData = JSON.stringify(tableData);

            // Enviar la solicitud AJAX al controlador PHP
            $.ajax({
                type: 'POST',
                url: './includes/Controladores/EnviarDatos/procesarTableroElectico.php',
                data: {
                    tableData: jsonData
                },
                success: function (response) {
                    alert('Los datos se han subido correctamente.');
                    console.log(response);
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        });
    });

    $(document).ready(function () {
        $('#recuperarTablElectrico').click(function () {
            var ott = $('#ottBuscarTablElectrico').val();

            // Enviar la OTT al archivo PHP mediante AJAX
            $.ajax({
                type: 'POST',
                url: './includes/Controladores/RecuperarDatos/recuperarTablaElectrico.php',
                data: {
                    ottBuscarTablElectrico: ott // Corrección aquí
                },
                success: function (response) {
                    // Manejar la respuesta del servidor
                    try {
                        var data = JSON.parse(response);

                        if (data.length > 0) {
                            var tableBody = $('#table-list11 tbody');
                            tableBody.empty(); // Eliminar filas existentes

                            // Crear filas para cada dato recuperado
                            $.each(data, function (index, row) {
                                var newRow = '<tr>' +
                                    '<td>' + row.regulador + '</td>' +
                                    '<td>' + row.ups + '</td>' +
                                    '<td>' + row.totalizadores + '</td>' +
                                    '<td>' + row.voltajes + '</td>' +
                                    '<td>' + row.paradaemergencia + '</td>' +
                                    '<td name="buttons"><div class="btn-group pull-right"><button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);" style=""><span class="glyphicon glyphicon-pencil"> <ion-icon name="create-outline" role="img" class="md hydrated" aria-label="create outline"></ion-icon></span></button><button id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);" style=""><span class="glyphicon glyphicon-trash"><ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon></span></button><button id="bAcep" type="button" class="btn btn-sm btn-default" style="display: none;" onclick="rowAcep(this);"><span class="glyphicon glyphicon-ok"><ion-icon name="checkmark-done-outline" role="img" class="md hydrated" aria-label="checkmark done outline"></ion-icon> </span></button><button id="bCanc" type="button" class="btn btn-sm btn-default" style="display: none;" onclick="rowCancel(this);"><span class="glyphicon glyphicon-remove"><ion-icon name="close-circle-outline" role="img" class="md hydrated" aria-label="close circle outline"></ion-icon></span></button></div></td>' +
                                    '</tr>';
                                tableBody.append(newRow);
                            });

                            alert("Datos recuperados. Cantidad de filas: " + data.length);
                        } else {
                            alert("La OTT ingresada no existe en la base de datos.");
                        }
                    } catch (error) {
                        console.log('Error al analizar la respuesta JSON:', error);
                    }
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        });
    });
    /********************AgregarFilasTablas*********************/
    $("#table-list").SetEditable({
        $addButton: $('#add')
    });
    $("#table-list1").SetEditable({
        $addButton: $('#add1')
    });
    $("#table-list2").SetEditable({
        $addButton: $('#add2')
    });
    $("#table-list3").SetEditable({
        $addButton: $('#add3')
    });
    $("#table-list4").SetEditable({
        $addButton: $('#add4')
    });
    $("#table-list5").SetEditable({
        $addButton: $('#add5')
    });
    $("#table-list6").SetEditable({
        $addButton: $('#add6')
    });
    $("#table-list7").SetEditable({
        $addButton: $('#add7')
    });
    $("#table-list8").SetEditable({
        $addButton: $('#add8')
    });
    $("#table-list9").SetEditable({
        $addButton: $('#add9')
    });
    $("#table-list10").SetEditable({
        $addButton: $('#add10')
    });
    $("#table-list11").SetEditable({
        $addButton: $('#add11')
    });
    ///////////////////////////////////////MOSTRAR DIVS////////////////////////////////////////
    $(document).ready(function () {
        $("#btnComprobar").click(function () {
            if ($("#btnradio1").is(':checked')) {
                $("#div1").show();
                $("#tituloMantenimientos").text('Mantenimiento Correctivo');
                alert("Mantenimiento Correctivo")

            } else if ($("#btnradio2").is(':checked')) {
                $("#div1").show();
                $("#tituloMantenimientos").text('Mantenimiento Preventivo');
                alert("Mantenimiento Preventivo")
            } else if ($("#btnradio3").is(':checked')) {
                $("#div1").show();
                $("#tituloMantenimientos").text('Puesta En Marcha');
                alert("Puesta En Marcha")
            } else {
                alert("Seleccione el tipo de Mantenimiento")

            }
        })
    });
    /************************Boton Exportar*****************************/
    $(document).ready(function () {
        $("#exportarpdf").click(function () {
            swal({
                title: "¿Desea Exportar el Aplicativo?",
                text: "Al presionar Ok saldrá una ventana emergente, la cual debe configurar en la parte superior derecha de tal forma: \n \n Destino: Guardar como PDF. \n Páginas : Todo. \n Diseño: Vertical. \n \n Seleccione la opcion de mas ajustes: \n\n Tamaño Papel: Letter. / Carta. \n Página por hoja : 1. \n  Margenes : Predeterminadas. \n Escala : Predeterminado. \n \n Seleccional la casilla de Graficos de Fondo.',",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        $("#header").hide();
                        $("#footerApp").hide();
                        $("#tituloInforme").show();
                        $("#ocultarContenido").hide();
                        $("button").hide();
                        $("#seleccionMant").hide();
                        $("#seleccionMant1").hide();
                        $("#seleccionMant2").hide();
                        $("#tituloSeleccion").hide();
                        $("#titulosMant").show();
                        $("#seccion1").show();
                        $("#seccion02").hide();
                        $("#infoImportante").show();
                        $("#exportarpdf").show();
                        $("#editar").show();
                        $("p").hide();
                        $("#tablas1-1").css("height", "800px");
                        $("#tablas1-2").css("height", "800px");
                        $("#tablas1-3").css("height", "800px");
                        $("#tablas1-4").css("height", "800px");
                        $("#tablas1-5").css("height", "800px");
                        $("br").css("display", "none");
                        $(".header").css("display", "none");
                        $("#boton-fixed").css("display", "block");
                        $('#seccion1,#seccionApp02').printThis({
                            beforePrintEvent: function () {
                                $('#seccion1,#seccionApp02').addClass('hide-backgrounds');
                            },
                            afterPrintEvent: function () {
                                $('#seccion1,#seccionApp02').removeClass('hide-backgrounds');
                            }
                        });
                    }
                });

        })
    });

    $(document).ready(function () {
        $("#boton-fixed").click(function () {
            swal({
                title: "¿Desea Volver A Editar el Aplicativo?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        $("#header").show();
                        $("#footerApp").show();
                        $("#tituloInforme").show();
                        $("#ocultarContenido").show();
                        $("button").show();
                        $("#seleccionMant").show();
                        $("#seleccionMant1").show();
                        $("#seleccionMant2").show();
                        $("#tituloSeleccion").show();
                        $("#titulosMant").show();
                        $("#seccion1").show();
                        $("#seccion02").show();
                        $("#infoImportante").show();
                        $("#exportarpdf").show();
                        $("#editar").show();
                        $("p").show();
                        $("#boton-fixed").hide();
                        for (var i = 0; i <= 74; i++) {
                            $("#fotoSeccion1-" + i).css("margin-top", "none");
                        }
                    }
                });

        })
    });
    /*************************Eliminar-Boton-Agregar-Secciones*************************/

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#add8").click(function () {
            contadorFotos++;
            if (contadorFotos >= 18) {
                $("#add8").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#add9").click(function () {
            contadorFotos++;
            if (contadorFotos >= 18) {
                $("#add9").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#add10").click(function () {
            contadorFotos++;
            if (contadorFotos >= 18) {
                $("#add10").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#add11").click(function () {
            contadorFotos++;
            if (contadorFotos >= 18) {
                $("#add11").css("display", "none")
            }
        })
    })
    /**************************************************************************************************/
    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-1").click(function () {
            contadorFotos++;
            if (contadorFotos >= 7) {
                $("#botonSeccionFotos1-1").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotos1-2").click(function () {
            contadorFotos++;
            if (contadorFotos >= 7) {
                $("#botonSeccionFotos1-2").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotosp2-1").click(function () {
            contadorFotos++;
            if (contadorFotos >= 7) {
                $("#botonSeccionFotosp2-1").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotosp2-2").click(function () {
            contadorFotos++;
            if (contadorFotos >= 7) {
                $("#botonSeccionFotosp2-2").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotosp3-1").click(function () {
            contadorFotos++;
            if (contadorFotos >= 7) {
                $("#botonSeccionFotosp3-1").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotosp3-2").click(function () {
            contadorFotos++;
            if (contadorFotos >= 7) {
                $("#botonSeccionFotosp3-2").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotosp4-1").click(function () {
            contadorFotos++;
            if (contadorFotos >= 7) {
                $("#botonSeccionFotosp4-1").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        var contadorFotos = 1;
        $("#botonSeccionFotosp4-2").click(function () {
            contadorFotos++;
            if (contadorFotos >= 7) {
                $("#botonSeccionFotosp4-2").css("display", "none")
            }
        })
    })

    $(document).ready(function () {
        $("#botonSeccionFotos1-1").click(function () {
            $("#añadir1").css("display", "none")
        })
    })

    $(document).ready(function () {
        $("#botonSeccionFotos1-2").click(function () {
            $("#añadir2").css("display", "none")
        })
    })

    $(document).ready(function () {
        $("#botonSeccionFotosp2-1").click(function () {
            $("#añadir3").css("display", "none")
        })
    })

    $(document).ready(function () {
        $("#botonSeccionFotosp2-2").click(function () {
            $("#añadir4").css("display", "none")
        })
    })

    $(document).ready(function () {
        $("#botonSeccionFotosp3-1").click(function () {
            $("#añadir5").css("display", "none")
        })
    })

    $(document).ready(function () {
        $("#botonSeccionFotosp3-2").click(function () {
            $("#añadir6").css("display", "none")
        })
    })

    $(document).ready(function () {
        $("#botonSeccionFotosp4-1").click(function () {
            $("#añadir7").css("display", "none")
        })
    })

    $(document).ready(function () {
        $("#botonSeccionFotosp4-2").click(function () {
            $("#añadir8").css("display", "none")
        })
    })

});