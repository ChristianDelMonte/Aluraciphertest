////////////////////////////////////////////////////
//
// Cipher Module Managger.
// Original: Visual Basic por Christian A. Del Monte
// Fecha: Febrero 2001
//
// Adaptación: Javascript por Christian A. Del Monte
// Fecha: 07-05-2022
//
// Realizado para el curso de Alura ONE Javascript
// Funciones originales de este archivo fueron
// escritas en Visual Basic y adaptadas para este
// curso y Alura ONE Challenge.
///////////////////////////////////////////////////


/////////////////////////////////////////////////
//* Valores y funcionamiento de la Funcion
//* Password:   clave de encriptacion
//* TxtOrigen:  texto a desencriptar
//* return:     texto desencriptado
/////////////////////////////////////////////////
function Desencriptar(Password,TxtOrigen) {

const MIN_ASC = 1;
const MAX_ASC = 255;
const NUM_ASC = MAX_ASC - MIN_ASC + 1;

var offset = 0;
var str_len = 0; 
var i = 0;
var ch = 0;
var TxtDestino = "";

    //'Inicializar el generador de numeros aleatorios
    offset = ClaveNumerica(Password);
    var Rnd = -1;
    Math.random(offset);
    
    //'Desencriptar el texto
    str_len = TxtOrigen.length;
    
    for (var i = 1; i < str_len; i++) {

        ch = TxtOrigen.substr(i, 1);

        if (ch >= MIN_ASC && ch <= MAX_ASC) {
            ch = ch - MIN_ASC;
            offset = parseInt((NUM_ASC + 1) * Rnd);
            ch = ((ch - offset) / NUM_ASC);
            
            if (ch < 0) {
                ch = ch + NUM_ASC;
            } else {
                ch = ch + MIN_ASC;
            }
            TxtDestino = TxtDestino & ch;
        }
    }

return TxtDestino;

}

/////////////////////////////////////////////////
//* Valores y funcionamiento de la Funcion
//* Password:   clave de encriptacion
//* TxtOrigen:  texto a encriptar
//* return:     texto encriptado
/////////////////////////////////////////////////
function Encriptar(Password,TxtOrigen) {

const MIN_ASC = 1;
const MAX_ASC = 255;
const NUM_ASC = MAX_ASC - MIN_ASC + 1;

var offset = 0;
var str_len = 0;
var i = 0;
var ch = 0;
var TxtDestino = "";

    //'Inicializar el generador de numeros aleatorios
    offset = ClaveNumerica(Password);
    var Rnd = -1;
    Math.random(offset);
    
    //'Encriptar el texto
    str_len = TxtOrigen.length;

    for (var i = 1; i < str_len; i++) {
        
        ch = TxtOrigen.substr(i, 1);
        
        if (ch >= MIN_ASC && ch <= MAX_ASC) {
            ch = ch - MIN_ASC;
            offset = parseInt((NUM_ASC + 1) * Rnd);
            ch = ((ch + offset) / NUM_ASC);
            ch = ch + MIN_ASC;
            TxtDestino = TxtDestino & ch;
        }
    }
return TxtDestino

}

function ClaveNumerica(Password) {

var value = 0;
var ch = 0;
var shift1 = 0;
var shift2 = 0;
var str_len = 0;

    str_len = Password.length;

    for(var i = 1; i < str_len; i++) {
        ch = Password.substr(i, 1);
        value = value + Math.Xor(ch * 2 ^ shift1);
        value = value + Math.Xor(ch * 2 ^ shift2);
        shift1 = Math.Mod(shift1 + 7, 19);
        shift2 = Math.Mod(shift2 + 13, 23);
    }
    return value;
}

