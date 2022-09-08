let valorAny: any; // É bom evitar

valorAny = 3; // number
valorAny = true; // boolean

let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'textao';
valorString2 = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);