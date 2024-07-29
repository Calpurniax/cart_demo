# Prueba para flying pigs

## Backend
Para comenzar he utilizado una API sencilla y he aprovechado el JSON con los productos, al tener solo una ruta es el mismo index.php el que devuelve los resultados. Esto sería interesante cambiarlo si hubiera más endpoints para que estuviera mejor organizado.
He utilizado una imagen de Docker para lanzar el servidor, es el que utilizo siempre por eso tiene MySQL aunque no hiciera falta para este proyecto, he preferido tirar de viejos conocidos.
Para arrancar el Docker, desde la carpeta de back, escribe:
```docker compose up -d```
El back estará escuchando en http://localhost:52000/

## Frontend
He utilizado Vite para crear una app de React.

Para instalar las dependencias, desde la carpeta de front, escribe:
```npm install```
Para arrancar el proyecto:
```npm run dev```
He modificado el diseño original porque el color naranja con texto blanco no tiene un contraste suficiente para ser leído por todas las personas, he decidido dejar el texto en negro que contrasta más y para que tuviera coherencia he cambiado el icono de color también. Y me parece que el botón de continuar debería estar siempre a la vista, y que el usuario deba sólo hacer scroll para encontrar los servicios y no para continuar.

En cuanto a cosas que me gustaría mejorar, por ejemplo el separar más el código, de tal forma que no haya tanto HTML en app.jsx si no sólamente los componentes. Al hacerlo con el aside del carrito de versión móvil dejaba de verse así que decidí dejarlo como estaba y centrarme en acabar otras funcionalidades.



