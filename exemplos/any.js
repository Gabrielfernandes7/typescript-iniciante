"use strict";
let valorAny; // É bom evitar
valorAny = 3; // number
valorAny = true; // boolean
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'textao';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
