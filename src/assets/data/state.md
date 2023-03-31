# Estado en react

En React, state se refiere a un objeto que contiene datos que un componente puede
utilizar y actualizar. Con la introducción de Hooks en React, ahora puedes usar el hook useState para manejar el estado en componentes funcionales.

El hook useState se utiliza para crear una variable de estado y una función para actualizar esa variable de estado. Aquí hay un ejemplo:

```js
import React, { useState } from "react";

function Ejemplo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hiciste clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz clic aquí</button>
    </div>
  );
}
```

En este ejemplo, useState se utiliza para crear una variable de estado count y una función setCount para actualizarla. La variable count se inicializa con un valor de 0. Cuando se hace clic en el botón, se llama a la función setCount con un nuevo valor, lo que actualiza el estado y hace que el componente se vuelva a renderizar con el nuevo valor.

También puedes usar el hook useState con objetos y arreglos, como este:

```js
import React, { useState } from "react";

function Ejemplo() {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={person.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={person.age}
        onChange={handleChange}
      />
      <p>Nombre: {person.name}</p>
      <p>Edad: {person.age}</p>
    </div>
  );
}
```

En este ejemplo, useState se utiliza para crear una variable de estado person que contiene un objeto con propiedades name y age. La función handleChange se llama cuando los campos de entrada cambian y actualiza el estado person con los nuevos valores. El componente se vuelve a renderizar con el estado person actualizado, y los valores Nombre y Edad se muestran en la página.
