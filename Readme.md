# Proyecto de turnos con SocketIO

Permite mediante sockets asignar turnos y que distintas personas vayan tomando los mismos.

Las tecnologías usadas son: React.js TypeScript Node y Javascript ant-desing y ant-design icons se creó custom hook de conexion de Sockets , uso de localStorage. 

Para verlo en funcionamiento debes  levantar el server ( backend ) y el front, una vez hecho esto veras  pantalla de  inicio.

En el menú lateral tenés "Ingresar" "Cola" "Crear"

La idea es que abras varias ventanas del navegador y 
coloques como Url la que estes usando, por ejemplo
http://localhost:5174/, luego de ello hacer click en cada una de las opciones del menú lateral y dejes abierto en cada ventana una opción distinta.

Creá un nombre y asigna un Escritorio aparecerá un boton de siguiente, luego vas a la instancia de crear ticket y clickeas varios por ejemplo 10.
Por último pulsa el botón de siguiente y verás cómo se van asignando los turnos hasta terminar todos los tickets. 

## Levantar el front 

Crear tu archivo .env como figura el .envtemplate

En el archivo .env
```
VITE_REACT_APP_URL_API='http://localhost:8080/'(url del back )

``` 

Abrir la terminal de Visual Studio 

Ejecutar el comando 

```

yarn 

```

Luego el comando 

```
yarn dev

```
Deberías ver en tu terminal lo siguiente 

```
VITE v4.2.0  ready in 3001 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h to show help

```





