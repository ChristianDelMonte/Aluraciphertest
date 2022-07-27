
// variable de codigo de encriptacion a utilizar
const clave = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

//funcion para encriptar el texto usando el codigo de encriptacion dado
function cipher(clave){
    document.querySelector("#cuidado").removeAttribute("style");
    let texto = document.querySelector("#texto").value;
    let salida = document.querySelector("#salida");
    if (texto != ""){
        let out = ""
        for(var x= 0; x <texto.length; x++){
            if(((texto[x] < 'a') || (texto[x] > 'z')) && (texto[x] != ' ')){
                return "error";
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                return "error";
            }
            if(texto[x] == 'a'){
                out += clave["a"] ;
            }
            else if(texto[x] == 'e'){
                out += clave["e"];
            }
            else if(texto[x] == 'i'){
                out += clave["i"]; 
            }
            else if(texto[x] == 'o'){
                out += clave["o"]; 
            }
            else if(texto[x] == 'u'){
                out += clave["u"]; 
            }
            else{
                out += texto[x];
            }
        }
        salida.innerHTML = out;
    }
    return;
}

//funcion para desencriptar el texto usando el codigo de encriptacion dado
function decipher(clave){
    document.querySelector("#cuidado").removeAttribute("style");
    let texto = document.querySelector("#texto").value;
    let salida = document.querySelector("#salida");
    if (texto != ""){
        for(var x=0; x< texto.length; x++){
            if(((texto[x] < 'a') || (texto[x] > 'z')) && (texto[x] != ' ')){
                return "error";
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                return "error";
            }
        }
        texto = texto.replace(new RegExp(clave["a"], "g"), "a");
        texto = texto.replace(new RegExp(clave["e"], "g"), "e");
        texto = texto.replace(new RegExp(clave["i"], "g"), "i");
        texto = texto.replace(new RegExp(clave["o"], "g"), "o");
        texto = texto.replace(new RegExp(clave["u"], "g"), "u");   
        salida.innerHTML = texto;
    }
    return;
}

//funcion para copiar el resultado al portapapeles
function clipboard() {
    navigator.clipboard.writeText(document.querySelector("#salida").value);
}

//funcion para mostrar los mensajes de error
function mostrar_error(){
    document.querySelector("#cuidado").style.color = "red";
    document.querySelector("#cuidado").style.fontSize = "18px";
}

//funcion de visibilidad segun sea el caso
function visibilidad(tipo){
    let area_default = document.querySelector("#por_defecto");
    let area_result = document.querySelector("#resultado");
    if (tipo == "mostrar") {
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
    }else if (tipo == "ocultar") {
        area_default.classList.remove("invisible");
        area_result.classList.add("invisible");
    }
}

//definimos las constantes a utilizar
let enci = document.querySelector('#enc');
let desi = document.querySelector('#des');
let copy = document.querySelector('#copiar');

//al hacer click comienza la magia
enci.addEventListener('click', function() {
    if (cipher(clave) == "error") {
        mostrar_error();
        visibilidad("ocultar");
    }else{
        visibilidad("mostrar");
    }
});

desi.addEventListener('click', function() {
    if (decipher(clave) == "error") {
        mostrar_error();
        visibilidad("ocultar");
    }else{
        visibilidad("mostrar");
    }
});

copy.addEventListener('click', function() {
    clipboard();
});