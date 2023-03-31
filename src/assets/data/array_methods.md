# Metodos de Arrays

## Map

El método map crea un nuevo arreglo con los resultados de llamar a una función proporcionada en cada elemento del arreglo original. La función proporcionada recibe el elemento actual del arreglo como argumento y puede devolver cualquier valor.

```js
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number ** 2);
console.log(squares); // [1, 4, 9, 16, 25]
```

En este ejemplo, el método **map se utiliza para calcular el cuadrado** de cada número en el arreglo numbers. La función proporcionada (number) => number \*\* 2 eleva cada número al cuadrado y devuelve el resultado.

## Filter

El método filter() crea un nuevo arreglo con todos los elementos que pasan una condición dada por una función de prueba.

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

En este ejemplo, filter() recorre cada elemento del arreglo numbers y aplica la función de flecha que verifica si cada número es par, creando un nuevo arreglo llamado evenNumbers que solo contiene los números pares.

## Find

El método find() devuelve el primer elemento del arreglo que cumple con la condición dada por una función de prueba

```js
const fruits = ["apple", "banana", "orange"];
const banana = fruits.find((fruit) => fruit === "banana");
console.log(banana); // 'banana'
```

En este ejemplo, find() recorre cada elemento del arreglo fruits y devuelve el primer elemento que es igual a 'banana'.
