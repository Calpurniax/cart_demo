# Cart demo

Ejemplo de proceso de selección de compra, los productos son llamados desde el cliente una API en php, y los datos relativos a ellos están simulados en un JSON.
He creado la lógica de añadir o quitar del carrito productos, sumando o restando del total, también teniendo en cuenta que algunos productos tienen un coste extra que solo se añade una vez.

## Backend

Para arrancar el Docker, desde la carpeta de back:
```docker compose up -d```
El back estará escuchando en http://localhost:52000/

## Frontend
He utilizado Vite para crear una app de React.

Para instalar las dependencias, desde la carpeta de front:
```npm install```
Para arrancar el proyecto:
```npm run dev```




