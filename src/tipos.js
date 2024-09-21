// Tipos de Datos en JavaScript

// Tipo string (cadena de caracteres)
let nombre = "Andres";
// Los strings pueden estar delimitados por comillas simples ('...'), dobles ("...") o backticks (`...`).

// Ejemplo con template strings (uso de backticks)
let saludo = `Hola, ${nombre}`; 
// Los template strings permiten interpolar variables o expresiones directamente dentro del string.
// Imprime: Hola, Andres
console.log(saludo);

// Tipo number (número)
let numeroEntero = 42;
let numeroDecimal = 3.14;
// JavaScript utiliza el tipo 'number' para representar tanto números enteros como decimales.
// Los números en JavaScript son de 64 bits de doble precisión (IEEE 754), lo que implica cierta imprecisión en operaciones con decimales.

// Precisión limitada con números decimales
console.log(0.1 + 0.2); 
// Imprime: 0.30000000000000004
// Este error se debe a cómo los números decimales se representan internamente en binario.

// Tipo boolean (verdadero o falso)
let esAlto = true; 
// Los booleanos solo pueden tener dos valores: true (verdadero) o false (falso).
// Son muy útiles en estructuras de control como 'if', 'while', o 'for'.

if (esAlto) {
    console.log("La persona es alta"); 
} else {
    console.log("La persona no es alta");
}
// Si esAlto es true, se imprimirá "La persona es alta". Si es false, se imprimirá "La persona no es alta".

// Tipo null (ausencia intencionada de valor)
let hayJuego = null; 
// 'null' se utiliza cuando queremos intencionadamente vaciar o resetear una variable. 
// Indica que la variable no tiene ningún valor, pero ha sido inicializada.

// Cuidado: typeof null devuelve 'object'
console.log(typeof null); 
// Imprime: 'object'
// Esto es un error histórico en JavaScript, pero es importante conocerlo.

// Tipo undefined (valor no definido)
let componente; 
// 'undefined' indica que una variable ha sido declarada, pero no se le ha asignado un valor.
// Es el valor por defecto para cualquier variable recién creada sin inicializar.

console.log(componente); 
// Imprime: undefined

// Diferencia entre null y undefined
// - null: Valor intencionadamente ausente. Se debe asignar explícitamente.
// - undefined: Valor predeterminado de una variable no inicializada o sin valor.
let vacio = null;
let sinDefinir;

console.log(vacio);        // Imprime: null
console.log(sinDefinir);   // Imprime: undefined
