# Notacion JSX

> Indice

- [Introducción](#introducción)
- [Usando valores en JSX](#usando-valores-en-jsx)
  - [Usando Strings y Numeros](#usando-strings-y-numeros)
  - [Usando Objetos](#usando-objetos)
  - [Usando Arrays](#usando-arrays)
- [Renderizado Condicional(Ternarios)](#renderizado-condicionalternarios)

## Introducción

JSX (JavaScript XML) es una extensión de la sintaxis de JavaScript que permite escribir código HTML/XML en archivos JavaScript. En React, JSX se utiliza para describir la interfaz de usuario en los componentes.

Aquí hay un ejemplo de cómo se utiliza JSX en un componente React:

```js
import React from "react";

function HelloWorld() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a paragraph.</p>
    </div>
  );
}
```

En este ejemplo, la función HelloWorld devuelve un fragmento de JSX que representa un elemento _*div*_ con un encabezado _*h1*_ y un párrafo _*p*_.

JSX permite que los componentes de React sean más legibles y mantenibles al combinar el código JavaScript y el HTML/XML en un solo archivo. Además, JSX proporciona una sintaxis familiar y fácil de usar para los desarrolladores que están acostumbrados a escribir HTML.

Aunque JSX es opcional en React, su uso se considera una práctica común porque hace que el código sea más legible y fácil de entender para los desarrolladores y mejora la eficiencia en la escritura de código.

## Usando valores en JSX

### Usando Strings y Numeros

Para mostrar variables en JSX usando un componente de React, simplemente se puede incluir la variable dentro de una llave {} en el cuerpo del componente. Por ejemplo:

```jsx
import React from "react";

function MyComponent() {
  const name = "John";
  const age = 30;

  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
}
```

En este ejemplo, se definen dos variables name y age. Dentro del componente MyComponent, las variables se incluyen dentro de llaves {} para ser renderizadas en el JSX. La variable name se utiliza dentro de un h1 y la variable age dentro de un p.

### Usando Objetos

En este ejemplo, se define un objeto user con tres propiedades: name, age y email. Dentro del componente MyComponent, se accede a las propiedades del objeto utilizando la notación de puntos y corchetes dentro de llaves {}. La propiedad name se utiliza dentro de un h1, la propiedad age dentro de un p, y la propiedad email dentro de otro p.

```jsx
import React from "react";

function MyComponent() {
  const user = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age} years old</p>
      <p>Email: {user["email"]}</p>
    </div>
  );
}
```

También se puede utilizar la destructuración de objetos para extraer propiedades del objeto en variables separadas y mostrarlas en JSX. Por ejemplo:

```jsx
function MyComponent() {
  const user = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };

  const { name, age, email } = user;

  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
      <p>Email: {email}</p>
    </div>
  );
}
```

En este ejemplo, se utiliza la destructuración de objetos para extraer las propiedades name, age y email del objeto user en variables separadas. Luego, se utilizan estas variables en JSX para mostrar los valores correspondientes en el HTML resultante.

### Usando Arrays

Para mas información consultar [Metodos de array aplicados a jsx](#usando-arrays)

## Renderizado Condicional(Ternarios)

Los ternarios se pueden utilizar dentro de JSX en componentes de React para condicionar la renderización de elementos basados en una expresión booleana. La sintaxis general de un ternario en JSX es la siguiente:

```jsx
{
  condicion ? elementoSiTrue : elementoSiFalse;
}
```

Por ejemplo, supongamos que tenemos un componente MyComponent que renderiza un botón que cambia de color en función de un estado isActive:

```jsx
import React, { useState } from "react";

function MyComponent() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: isActive ? "blue" : "red" }}
    >
      {isActive ? "Active" : "Inactive"}
    </button>
  );
}
```

En este ejemplo, se utiliza un ternario para establecer el color de fondo del botón en función del estado isActive. Si isActive es true, el fondo del botón será azul; de lo contrario, será rojo. Además, se utiliza otro ternario para establecer el texto del botón como "Active" o "Inactive" en función del estado isActive.

El uso de ternarios en JSX es muy útil para renderizar elementos de manera condicional, y es una herramienta poderosa para construir interfaces de usuario dinámicas en React.
