# Sesion 1
Explicación de angular. sus origenes y resumen de lo que se vera en el curso.
En sus inicios empezo como "Angular js", cuenta con su propia interfaz de  linea de comandos. Vemos las instalaciones necesarias para empezar un proyecto.

## Instalaciones.

- npm
- node

Primero necesitamos de las anteriores instalaciones para poder obtener angular cli (comand line interface).

Una vez teniendo npm podemos ejecutar:
```
sudo npm i -g @angular/cli
```

El cli nos permitira ejecutar los comandos "ng".

Para ver los comandos disponibles podemos ejecutar:
```
ng help
```

Crearemos nuestro primer proyecto:
```
ng new <nombre del proyecto>
```

Al crear un proyecto el cli nos hara unas preguntas, si queremos angular routing y el formato de stylesheet que usaremos.

Al terminar nos habra creado el proyecto.

Si queremos servir el proyecto para tenerlo en local host ejecutamos:
```
ng serve
```

