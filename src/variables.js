// 1. Declaración con `let` sin valor
let color; 
// `let` permite declarar una variable sin inicializarla, con alcance de bloque.
// Si no se asigna valor, por defecto es `undefined`.

color = "Rojo"; 
// Asignación de un valor a la variable. La asignación puede hacerse después de la declaración.

console.log(color); 
// Uso de la variable. Imprime: Rojo

color = "Verde"; 
// Modificación del valor. `let` permite cambiar el valor de la variable en cualquier momento.

// Forma antigua de declarar variables (ya no se usa mucho)
var nombre = "Juan"; 
// `var` permite re-declarar la misma variable en el mismo ámbito y tiene alcance de función.
// Es propenso a errores debido a su hoisting (elevación) y a que permite múltiples declaraciones.

nombre = "Pedro"; 
// Se puede reasignar valor con `var`, igual que con `let`, pero `var` tiene un alcance más amplio (global o de función).

// Nueva forma a partir de ES6
let ciudad = "New York"; 
// `let` es preferido sobre `var` porque evita errores relacionados con el alcance y la re-declaración.
// Alcance de bloque: `ciudad` solo está disponible en el bloque donde se declara.

ciudad = "Los Angeles"; 
// Se puede reasignar, pero no se puede re-declarar dentro del mismo ámbito.

// Constante (su valor no cambia)
const PI = 3.14; 
// `const` se utiliza para valores que no van a cambiar durante la ejecución del programa.
// Obliga a inicializar la variable en el momento de la declaración y no permite la reasignación.

//PI = 3.1416; 
// Esto generará un error, ya que las variables declaradas con `const` no pueden ser modificadas después de su inicialización.
