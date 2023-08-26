//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron 
implementadas usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1
*/

function n1(){
  var resultado = "";
  for (var i = 10; i >= 1; i--){
    resultado += i + " ";
  }
  console.log(resultado.trim());
}

/*
 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99

*/

function n2(){
  var resultado = "";
  for (var i = 1; i <= 100; i = i+2){
    resultado += i + " ";
  }
  console.log(resultado.trim());
}

/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63
*/

function n3(){
  for (var i = 0; i <= 9; i++){
    console.log ("7x" + i + " = " + i*7);
  }
}

/*
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
*/

function n4(){
  for (var i = 1; i <= 9; i++){
    for (var j = 0; j <= 9; j++){
      console.log(i + "x" + j + " = " + i*j);
    }
  }
}

/*
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
*/

function n5(){
  var numeros = [1,2,3,4,5,6,7,8,9,10];
  var resultado = 0;

  for (var i = 0; i <= numeros.length-1; i++){
    resultado += numeros[i];
  }
  console.log(resultado);
}

/*
Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1
*/

function n6(){
  var resultado = 0;
  for (var i = 10; i >= 1; i--){
    if (resultado == 0){
      resultado = i;
    } else {
      resultado = resultado * i;
    }
  }
  console.log(resultado);
}

/*
Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
*/

function n7(){
  resultado = 0;
  for (var i = 11; i < 30; i = i+2){
    resultado += i;
  }
  console.log(resultado);
}

/*
Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
*/

function n8(celsius){
  const formula = celsius * (9 / 5) + 32
  console.log(formula);  
}

/*
Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
*/

function n9(fahrenheit){
  const formula = (fahrenheit - 32) * (5 / 9);
  console.log(formula);
}

/*
Desafío de programación #10: Calcula la suma de todos los números en un array de números
*/

function n10(arrayNums){
  resultado = 0;
  for (var i = 0; i <= arrayNums.length-1; i++){
    resultado += arrayNums[i];
  }
  console.log(resultado);
}

/*
Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
*/

function n11(arrayNums){
  var resultado = 0;
  for (var i = 0; i <= arrayNums.length-1; i++){
    resultado += arrayNums[i];
  }
  var total = resultado / arrayNums.length;
  console.log(total);
}

/*
Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
*/

function n12(arrayNums){
  var arrayFinal = [];
  for (var i = 0; i <= arrayNums.length-1; i++){
    if (arrayNums[i] > 0){
      arrayFinal.push(arrayNums[i]);
    }
  }
  console.log(arrayFinal);
}

/*
Desafío de programación #13: Find the maximum number in an array of numbers
*/

function n13(arrayNums){
  var mayorNum = 0;
  for (var i = 0; i <= arrayNums.length-1; i++){
    if (arrayNums[i] > mayorNum){
      mayorNum = arrayNums[i];
    }
  }
  console.log(mayorNum);
}

/*
Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/

function n14(){
  var num1 = 0;
  var num2 = 1;
  var suma;
  for (var i = 0; i <= 10; i++){
    if (i == 0){
      console.log(num1);
    } else if (i == 1){
      console.log(num2);
    } else {
      suma = num1 + num2;
      console.log(suma);
      num1 = num2;
      num2 = suma;
    }
  }
}

/*
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/

function n15(n){

}

/*
Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
*/

//EL 1 DEVUELVE TRUE!!!
function n16(num){
  bool = true;
  for (i = 2; i <= num/2; i++){
    if (num == 1 || num % i == 0){
      bool = false;
    }
  }
  console.log(bool);
}

/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10
*/

function n17(num){
  var numero = num.toString();
  var digito;
  var total = 0;
  for (var i = 0; i <= numero.length-1; i++){
    digito = parseInt(numero[i]);
    total += digito;
  }
  console.log(total);
}

/*
Desafío de programación #18: Imprimir los primeros 100 números primos
*/

function n18(){
}


/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
*/

function n19(){

}

/*
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
*/

function n20(arrayNums){
  var array = arrayNums.slice();
  array.push(array[0]);
  array.shift();
  console.log(array);
}

/*
Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]
*/

function n21(arrayNums){
  var array = arrayNums.slice();
  array.unshift(array[array.length-1]);
  array.pop();
  console.log(array);
}

/*
Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
*/

function n22(arrayNums){
  var array = [];
  for (var i = arrayNums.length-1; i >= 0; i--){
    array.push(arrayNums[i]);
  }
  console.log(array);
}

/*
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
*/

function n23(string){
  var frase = "";
  for (var i = string.length-1; i >= 0; i--){
    frase += string[i];
  }
  console.log(frase);
}

/*
Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
*/

function n24(arrayA, arrayB){
  var array = [];
  for (var i = 0; i <= arrayA.length-1; i++){
    array.push(arrayA[i]);
  }
  for (var j = 0; j <= arrayB.length-1; j++){
    array.push(arrayB[j]);
  }
  console.log(array);
}

/*
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno 
u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]
*/

function n25(array1, array2){
  var array = revisarNums(array1, array2).concat(revisarNums(array2, array1));
  console.log(array);
}

function revisarNums(arrayA, arrayB){
  var array = [];
  for (var i = 0; i <= arrayA.length-1; i++){
    var j = 0;
    var numRepetido = false;
    while (j <= arrayB.length && numRepetido == false){
      if (arrayA[i] == arrayB[j]){
        numRepetido = true;
      }
      j++;
    }
    if (!numRepetido){
      array.push(arrayA[i]);
    }
    numRepetido = false;
  }
  return array;
}

/*
Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en
el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]
*/

function n26(arrayA, arrayB){
  var array = [];
  var i = 0;
  var j = 0;
  var numRepetido = false;

  while (i <= arrayA.length && numRepetido == false){
    var num = arrayA[i];
    for (j = 0; j <= arrayB.length; j++){
      if (num == arrayB[j]){
        numRepetido = true;
      }
    }
      
    }

    }


/*
Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]
*/



/*
==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */
