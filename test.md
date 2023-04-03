# React-Router-Dom

React es una de las bibliotecas de JavaScript más populares para construir aplicaciones web modernas y escalables. Una de las características más útiles de React es su capacidad para manejar el enrutamiento del lado del cliente utilizando una librería llamada react-router-dom. Esta librería permite a los desarrolladores definir rutas y enlaces en una aplicación React, lo que permite a los usuarios navegar por la aplicación sin tener que recargar la página cada vez que cambian de vista.

En este artículo, vamos a ver cómo se utiliza react-router-dom para definir rutas en una aplicación React.

## ¿Qué es react-router-dom?

React-router-dom es una librería que proporciona herramientas para manejar el enrutamiento del lado del cliente en una aplicación React. Es una de las librerías más populares para manejar el enrutamiento en React y se utiliza ampliamente en la comunidad de desarrolladores de React.

Al utilizar react-router-dom, los desarrolladores pueden definir rutas y enlaces en su aplicación React y manejar la navegación del usuario sin tener que recargar la página cada vez que cambian de vista. Esto permite una experiencia de usuario más fluida y hace que la aplicación se sienta más como una aplicación de escritorio que como un sitio web tradicional.

Configurando react-router-dom
Antes de poder utilizar react-router-dom, es necesario instalarlo en nuestro proyecto de React. Podemos hacer esto utilizando el administrador de paquetes npm en la línea de comandos:

```sh
npm install react-router-dom
```

Una vez que se ha instalado react-router-dom, podemos comenzar a definir las rutas de nuestra aplicación.

## Definiendo rutas con react-router-dom

Para definir rutas en una aplicación React, debemos utilizar tres componentes principales de react-router-dom: BrowserRouter, Routes y Route.

### BrowserRouter

BrowserRouter es un componente de envoltorio que se utiliza para envolver toda la aplicación y proporcionar la funcionalidad de enrutamiento. Este componente debe envolver todo lo demás en nuestra aplicación React.

```jsx
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* El resto de nuestra aplicación va aquí */}
    </BrowserRouter>
  );
}
```

### Routes

Routes es un componente que se utiliza para definir todas las rutas de nuestra aplicación. Dentro de este componente, podemos definir múltiples rutas utilizando el componente Route.

```jsx
import {BrowserRouter Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

```

En este ejemplo, estamos definiendo tres rutas diferentes en nuestra aplicación: la página principal **(path="/", el componente Home)**, la página Acerca de **(path="/about", el componente About)** y la página de contacto **(path="/contact", el componente Contact).**

### Route

Route es un componente que se utiliza para definir una ruta individual en nuestra aplicación. Este componente debe especificar una path y un element correspondiente.

```jsx
import { Route } from "react-router";
```

En el ejemplo anterior, utilizamos el componente Route para definir tres rutas diferentes. Cada ruta tiene un path que corresponde a la URL que queremos que se active cuando se visite esa ruta, y un element que corresponde al componente que queremos que se muestre en esa ruta.

En este ejemplo, estamos utilizando una sintaxis abreviada que nos permite pasar el componente como una propiedad element en lugar de anidar el componente dentro del componente Route utilizando una etiqueta de cierre

### Parámetros de ruta y enlaces

Una de las características más útiles de react-router-dom es la capacidad de utilizar parámetros de ruta y enlaces para crear rutas dinámicas en nuestra aplicación. Los parámetros de ruta nos permiten pasar datos a través de la URL y utilizarlos para generar contenido dinámicamente en nuestra aplicación.

Por ejemplo, si tenemos una página de detalles de un producto en nuestra aplicación, podemos utilizar un parámetro de ruta para pasar el ID del producto a través de la URL y utilizar ese ID para recuperar la información del producto correspondiente de nuestra base de datos.

Podemos utilizar parámetros de ruta en nuestras rutas definidas utilizando una sintaxis especial. Por ejemplo, si queremos definir una ruta que acepte un parámetro de ID de producto, podemos hacerlo de la siguiente manera:

```jsx
<Route path="/product/:id" element={<Product />} />
```

En este ejemplo, estamos definiendo una ruta que acepta un parámetro de id en la URL. Podemos acceder a este parámetro en nuestro componente Product utilizando el objeto match.params proporcionado por react-router-dom.

Para crear enlaces en nuestra aplicación, podemos utilizar el componente Link proporcionado por react-router-dom. Este componente nos permite crear enlaces que navegan a una ruta específica en nuestra aplicación sin tener que recargar la página.

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
```

En este ejemplo, estamos utilizando el componente **Link** para crear enlaces a diferentes rutas en nuestra aplicación. Cuando el usuario hace clic en uno de estos enlaces, react-router-dom manejará la navegación y cambiará la vista de la aplicación sin tener que recargar la página.

Podemos reemplazar el uso de <Link> con el hook useNavigate de react-router-dom. Aquí está cómo se vería el código modificado

```jsx
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/about")}>About</button>
        </li>
        <li>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}
```

En lugar de crear enlaces <Link> para navegar entre rutas, estamos utilizando botones y el **useNavigate** hook. useNavigate es un hook que se utiliza para navegar a otras rutas programáticamente sin necesidad de un elemento HTML como un enlace. El **useNavigate** hook retorna una función que se puede llamar con la ruta a la que se desea navegar como su único argumento. En el ejemplo, hemos llamado a useNavigate para obtener la función navigate, que podemos utilizar en cada botón del menú de navegación. Cuando se hace clic en un botón, se llama a la función navigate con la ruta correspondiente, lo que cambia la ubicación actual a la nueva ruta.
