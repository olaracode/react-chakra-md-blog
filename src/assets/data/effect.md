"# useEffect

**useEffect** es un hook de React que permite ejecutar efectos secundarios en componentes funcionales. **_Los efectos secundarios son acciones_** que no están directamente relacionadas con la renderización de la interfaz de usuario, como realizar solicitudes a una API, suscribirse a un evento, modificar el DOM, entre otros.

En este ejemplo, primero inicializamos el estado de los personajes como un arreglo vacío mediante el hook useState.

```jsx
import React, { useState, useEffect } from "react";

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  {...}
}
```

Luego, utilizamos useEffect para realizar una llamada a la API de Rick and Morty utilizando la función fetch. Dentro de la función pasada como primer parámetro a useEffect, llamamos a la API y actualizamos el estado de los personajes con la respuesta de la llamada.

```jsx
const fetchCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  setCharacters(data.results);
};

useEffect(() => {
  fetchCharacters();
}, []);
```

La lista de dependencias pasada como segundo parámetro a useEffect se establece en un arreglo vacío para indicar que solo deseamos que la llamada a la API se realice una vez, después del primer renderizado del componente. Si se quisiera que la llamada se realizara nuevamente cuando se actualice algún estado, se podría pasar el estado en el arreglo de dependencias.

```jsx
useEffect(() => {
  fetchCharacters();
}, []);
```

Finalmente, mostramos los personajes en una lista a través del método map del arreglo de personajes en el JSX.

```jsx
return (
  <div>
    <h1>Rick and Morty Characters</h1>
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  </div>
);
```

Ejemplo completo:

```jsx
import React, { useState, useEffect } from "react";

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

"
