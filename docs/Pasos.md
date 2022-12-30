# Iniciar el proyecto

Tener npm y node instalados

Instalar el cli de angular

```
sudo npm i -g @angular/cli
```

Crear un nuevo proyecto:

```
ng new <nombre del proyecto>
```

Indicamos que si queremos routing y el procesador de estilos de nuestra preferencia.

Terminado el proceso modificar el package.json para que el comando "ng serve" tambien abra la ventana solamente agregando "--open" al comando mencionado:

```
...

"scripts": {
    ...

    "start": "ng serve --open",

    ...
  },

...
```

Agregamos a nuestro modulo principal el FormsModule:
```
...

imports: [
    ...
    
    FormsModule,

    ...
  ],

...
```

Dentro de app creamos las carpetas de nuestro proyecto para tener mejor orden: components, services, modules, models, guards y pages.
