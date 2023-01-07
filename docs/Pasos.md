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

Dentro de app creamos las carpetas de nuestro proyecto para tener mejor orden: components, pipes, services, modules, models, guards y pages.

Agregamos angular material:
```
ng add @angular/material
```

Creamos el modulo personalizado para material:
```
ng g m modules/Material
```

Importamos el modulo Materail en app.module.ts.

Importamos el modulo HttpClientModulo para poder hacer peticiones http en nuestro proyecto:
```
// app.module.ts
...

import { HttpClientModule } from '@angular/common/http';

...

imports: [
  ...

  // Importamos el modulo http para las peticiones
  HttpClientModule,

  ...
],
```
