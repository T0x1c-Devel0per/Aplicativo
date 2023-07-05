var countFotos = 1;
/***************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************/
function crearAgregarSeccion(num) {
    return function agregarSeccion() {
        let contenedor = document.querySelector(`#AgregarFila1-${num}`);
        let p = document.createElement('div');
        p.setAttribute("class", "col");
        p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion1-1">
                        <input type="file" id="file" accept="image/*" hidden>
                        
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-1-`+ countFotos + `" id="file-seccionFotos-1-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-1-`+ countFotos + `" accept="image/*">
                        </label>                                                
                    </div>`;
        contenedor.appendChild(p);
        function previewBeforeUpload(id) {
            document.querySelector("#" + id).addEventListener("change", function (e) {
                if (e.target.files.length == 0) {
                    return;
                }
                let file = e.target.files[0];
                let url = URL.createObjectURL(file);
                document.querySelector("#" + id + "-preview img").src = url;
                let img = new Image();
                img.onload = function () {
                    // Crear un lienzo y obtener su contexto de dibujo
                    let canvas = document.createElement('canvas');
                    let ctx = canvas.getContext('2d');
                    // Cargar la imagen en el lienzo
                    ctx.drawImage(img, 0, 0);
                    // Redimensionar la imagen en el lienzo
                    let MAX_WIDTH = 600;
                    let MAX_HEIGHT = 548;
                    let width = img.width;
                    let height = img.height;
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    // Obtener la imagen redimensionada como JPEG con calidad del 80%
                    let imagenRedimensionada = canvas.toDataURL('image/jpeg', 0.8);
                    // Asignar la imagen redimensionada a la etiqueta de imagen
                    document.querySelector("#" + id + "-preview img").src = imagenRedimensionada;
                }
                img.src = url;
            });
        }
        previewBeforeUpload("file-seccionFotos-1-" + countFotos);
        countFotos++;
    }
}
for (let i = 1; i <= 36; i++) {
    let nombreFuncion = `agregarSeccion${i}`;
    let funcion = crearAgregarSeccion(i);
    window[nombreFuncion] = funcion;
}
/***************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************/
function crearAgregarSeccionTanques(num) {
    return function agregarSeccionTanques() {
        let contenedor = document.querySelector(`#AgregarFila2-${num}`);
        let p = document.createElement('div');
        p.setAttribute("class", "col");
        p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion2-1">
                        <input type="file" id="file" accept="image/*" hidden>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-2-`+ countFotos + `" id="file-seccionFotos-2-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-2-`+ countFotos + `" accept="image/*">
                        </label>                                                
                    </div>`;
        contenedor.appendChild(p);
        function previewBeforeUpload(id) {
            document.querySelector("#" + id).addEventListener("change", function (e) {
                if (e.target.files.length == 0) {
                    return;
                }
                let file = e.target.files[0];
                let url = URL.createObjectURL(file);
                document.querySelector("#" + id + "-preview img").src = url;
                let img = new Image();
                img.onload = function () {
                    // Crear un lienzo y obtener su contexto de dibujo
                    let canvas = document.createElement('canvas');
                    let ctx = canvas.getContext('2d');
                    // Cargar la imagen en el lienzo
                    ctx.drawImage(img, 0, 0);
                    // Redimensionar la imagen en el lienzo
                    let MAX_WIDTH = 600;
                    let MAX_HEIGHT = 548;
                    let width = img.width;
                    let height = img.height;
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    // Obtener la imagen redimensionada como JPEG con calidad del 80%
                    let imagenRedimensionada = canvas.toDataURL('image/jpeg', 0.8);
                    // Asignar la imagen redimensionada a la etiqueta de imagen
                    document.querySelector("#" + id + "-preview img").src = imagenRedimensionada;
                }
                img.src = url;
            });
        }
        previewBeforeUpload("file-seccionFotos-2-" + countFotos);
        countFotos++;
    }
}
for (let e = 1; e <= 36; e++) {
    let nombreFuncion = `agregarSeccionTanques${e}`;
    let funcion = crearAgregarSeccionTanques(e);
    window[nombreFuncion] = funcion;
}
/***************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************/
function crearAgregarSeccionConsola(num) {
    return function agregarSeccionConsola() {
        let contenedor = document.querySelector(`#AgregarFila3-${num}`);
        let p = document.createElement('div');
        p.setAttribute("class", "col");
        p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion2-1">
                        <input type="file" id="file" accept="image/*" hidden>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-2-`+ countFotos + `" id="file-seccionFotos-2-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-2-`+ countFotos + `" accept="image/*">
                        </label>                                                
                    </div>`;
        contenedor.appendChild(p);
        function previewBeforeUpload(id) {
            document.querySelector("#" + id).addEventListener("change", function (e) {
                if (e.target.files.length == 0) {
                    return;
                }
                let file = e.target.files[0];
                let url = URL.createObjectURL(file);
                document.querySelector("#" + id + "-preview img").src = url;
                let img = new Image();
                img.onload = function () {
                    // Crear un lienzo y obtener su contexto de dibujo
                    let canvas = document.createElement('canvas');
                    let ctx = canvas.getContext('2d');
                    // Cargar la imagen en el lienzo
                    ctx.drawImage(img, 0, 0);
                    // Redimensionar la imagen en el lienzo
                    let MAX_WIDTH = 600;
                    let MAX_HEIGHT = 548;
                    let width = img.width;
                    let height = img.height;
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    // Obtener la imagen redimensionada como JPEG con calidad del 80%
                    let imagenRedimensionada = canvas.toDataURL('image/jpeg', 0.8);
                    // Asignar la imagen redimensionada a la etiqueta de imagen
                    document.querySelector("#" + id + "-preview img").src = imagenRedimensionada;
                }
                img.src = url;
            });
        }
        previewBeforeUpload("file-seccionFotos-2-" + countFotos);
        countFotos++;
    }
}
for (let u = 1; u <= 36; u++) {
    let nombreFuncion = `agregarSeccionConsola${u}`;
    let funcion = crearAgregarSeccionConsola(u);
    window[nombreFuncion] = funcion;
}
/***************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************/
function crearAgregarSeccionSnx(num) {
    return function agregarSeccionSnx() {
        let contenedor = document.querySelector(`#AgregarFila4-${num}`);
        let p = document.createElement('div');
        p.setAttribute("class", "col");
        p.innerHTML = `<div class="container d-grid justify-content-center" id = "fotoSeccion2-1">
                        <input type="file" id="file" accept="image/*" hidden>
                        <div class="img-area" data-img="">
                            <div class="form-element">
                                <label for="file-seccionFotos-2-`+ countFotos + `" id="file-seccionFotos-2-` + countFotos + `-preview">
                                    <img src="https://bit.ly/3ubuq5o" alt="">
                                </label>
                            </div>
                        </div>
                        <label class=" d-flex justify-content-center">
                            <p style="color: white; padding-bottom: 0px;">
                            <input type="file" id="file-seccionFotos-2-`+ countFotos + `" accept="image/*">
                        </label>                                                
                    </div>`;
        contenedor.appendChild(p);
        function previewBeforeUpload(id) {
            document.querySelector("#" + id).addEventListener("change", function (e) {
                if (e.target.files.length == 0) {
                    return;
                }
                let file = e.target.files[0];
                let url = URL.createObjectURL(file);
                document.querySelector("#" + id + "-preview img").src = url;
                let img = new Image();
                img.onload = function () {
                    // Crear un lienzo y obtener su contexto de dibujo
                    let canvas = document.createElement('canvas');
                    let ctx = canvas.getContext('2d');
                    // Cargar la imagen en el lienzo
                    ctx.drawImage(img, 0, 0);
                    // Redimensionar la imagen en el lienzo
                    let MAX_WIDTH = 600;
                    let MAX_HEIGHT = 548;
                    let width = img.width;
                    let height = img.height;
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    // Obtener la imagen redimensionada como JPEG con calidad del 80%
                    let imagenRedimensionada = canvas.toDataURL('image/jpeg', 0.8);
                    // Asignar la imagen redimensionada a la etiqueta de imagen
                    document.querySelector("#" + id + "-preview img").src = imagenRedimensionada;
                }
                img.src = url;
            });
        }
        previewBeforeUpload("file-seccionFotos-2-" + countFotos);
        countFotos++;
    }
}
for (let u = 1; u <= 36; u++) {
    let nombreFuncion = `agregarSeccionSnx${u}`;
    let funcion = crearAgregarSeccionSnx(u);
    window[nombreFuncion] = funcion;
}
/***************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************/