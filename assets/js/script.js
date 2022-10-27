console.log("Holi holi") // String

// Tipos de datos
// String
// Number
// Boolean

/* 

$texto: String
$texto = "Hola mundo"

$texto = 2 // Error

*/

// Cómo declarar variables?
// var
// let
// const

// Definir la variable edad
// var edad = 32
// let edad = 32
let edad = 32 // Se declara con let y se asigna o define con =

edad = "holi"

// console.log("Edad: ", edad)

const nombreProfe1 = "Gonzalo"

const pi_entero = 3
const pi_decimal = 3.14;

var nombre, edad2, mascota;

// console.log("Mascota:", mascota);
// Comentario de linea
/* Comentario de Bloque
Clasificación de Tipos de Datos:
- Primitivos: String, Number, Boolean, Null, Undefined
- No primitivos: Object, Array, Function
*/

// String
let texto = "Hola mundo"
let texto2 = 'Hola mundo'

// Number
let numero = 2
let numero2 = 2.5

// Boolean
let booleano = true
let booleano2 = false

// Null
let nulo = null

// Undefined
let indefinido = undefined

// Object {}
const profesor = {
  nombre: "Gonzalo",
  edad: 32,
  mascota1: "Frijol",
  mascota2: "Nieblita",
  hijos: false
}
// Cómo acceder a las propiedades de un objeto?
// console.log("Nombre:", profesor.nombre)
// console.log("Edad:", profesor.edad)
// nombre_del_objeto.propiedad

const profesor_extra = {
  apellido: "Fleming",
  hermanos: 2
}
// Spread Operator: ...
const profesorTotal = {...profesor, ...profesor_extra}

// console.log("El objeto profesorTotal es:", profesorTotal);
const profe2 = { nombre: "Juan", edad: 4 };
profe2.edad = 6

// Array o Arreglos
const miArreglo = ["hola", 32, true, profe2, {}, [1, 2, 3, 4, 5]];
// Cada uno de los elementos de un arreglo va a tener un índice particular
// El índice depende de la posición del elemento en el arreglo
// i = posición - 1

// console.log("El tercer elemento de arreglo es:", miArreglo[2]); // true

// Cómo yo sé cual es el último elemento de un arreglo?
// La longitud del arreglo coincide con la posición del último elemento
// console.log("La longitud del arreglo", miArreglo.length);
// console.log("El último elemento es: ", miArreglo[miArreglo.length - 1]);

// Consumir data de un endpoint de una API // Arreglo de Objetos!
const pokemones = [
  {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/"
  },
  {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/"
  },
  {
    name: "venusaur",
    indicarNombre: function () {
      console.log("Hola soy Venusaur");
    },
    url: "https://pokeapi.co/api/v2/pokemon/3/"
  },
]

// Funciones
// Es un trozo de código que se puede reutilizar

// Declaración de la función
function suma(uno, dos) {
  // const uno = 1
  // const dos = 2;
  const suma = uno + dos;
  return suma
}

// Invocación de la función
// suma();

const sumaResultado = suma(25, 75);

console.log("Función sumaResultado: ", sumaResultado);

/*
class Persona { 
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log("Hola, soy " + this.nombre);
  }
}
*/