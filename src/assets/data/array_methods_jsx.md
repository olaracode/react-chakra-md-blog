# Metodos de array aplicados a JSX

## Array.Map()

El ejemplo representa una función de React llamada **_List_** que devuelve una **lista (ul)** de **elementos (li)** basada en un array de objetos llamada items. Cada objeto en el array tiene dos propiedades, id y name. La función de mapa se utiliza para recorrer el array de items y para cada elemento, se renderiza un li con la propiedad key establecida como el id del elemento y el contenido establecido como el name del elemento.

```jsx
const elementList = function List() {
  const items = [
    { id: 1, name: "element 1" },
    { id: 2, name: "element 2" },
  ];
  return (
    <ul>
      {items.map((item) => {
        return <li key={element.id}>{element.name}</li>;
      })}
    </ul>
  );
};
```

# Array.filter()

En este ejemplo, la función **.filter** se utiliza para crear un nuevo array filteredItems que contiene solo los objetos del array items cuyo id es par.

```js
const items = [
  { id: 1, name: "element 1" },
  { id: 2, name: "element 2" },
  { id: 3, name: "element 3" },
  { id: 4, name: "element 4" },
];
const filteredItems = items.filter((item) => item.id % 2 === 0);
```

Luego, el nuevo array filtrada filteredItems se utiliza en la función de .map para crear la **lista (ul)** de **elementos (li)** que se renderiza en la página. Cada objeto en el array filteredItems se recorre en el map y **se renderiza un li con el key establecido como el id del elemento y el contenido establecido como el name del elemento**. En este ejemplo, solo se renderizan los elementos cuyo id es par.

```jsx
const elementList = function List() {
  const items = [
    { id: 1, name: "element 1" },
    { id: 2, name: "element 2" },
    { id: 3, name: "element 3" },
    { id: 4, name: "element 4" },
  ];
  const filteredItems = items.filter((item) => item.id % 2 === 0);
  return (
    <ul>
      {filteredItems.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};
```

# Array.find()

En este ejemplo, la función find se utiliza para buscar un objeto en el array items cuyo id sea igual a 2 La función de devolución de llamada toma el elemento actual como argumento y debe devolver true si el elemento que se está buscando ha sido encontrado, o false si no se ha encontrado.

```jsx
const elementList = function List() {
  const items = [
    { id: 1, name: "element 1" },
    { id: 2, name: "element 2" },
    { id: 3, name: "element 3" },
    { id: 4, name: "element 4" },
  ];
  const foundItem = items.find((item) => item.id === 2);
  return (
    <ul>
      <li key={foundItem.id}>{foundItem.name}</li>
    </ul>
  );
};
```

Luego, el objeto encontrado foundItem se utiliza en el li para crear un elemento de la lista con el key establecido como el id del objeto encontrado y el contenido establecido como el name del objeto encontrado. En este ejemplo, solo se renderiza un elemento de la lista, ya que solo se encuentra un objeto en el array que cumple la condición establecida.
