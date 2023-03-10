# Sesion 1

Explicación de angular. sus origenes y resumen de lo que se vera en el curso.
En sus inicios empezo como "Angular js", cuenta con su propia interfaz de linea de comandos. Vemos las instalaciones necesarias para empezar un proyecto.

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

Dentro de app crearemos la estructura de nuestro proyecto para tener todo mas ordenado.

Creamos las carpetas: componentes, pipes, services, models, guards, modules y pages.

# Sesion 2

Crearemos un componente para ver como se generan.

En la terminal ejecutamos:

```
ng g c components/Saludo
```

Al crear un componente viene por defecto con el hook OnInit el cual ejecuta determinada accion antes de renderizar el componente. Ademas de agregarse por defecto al modulo donde se crea y estar disponible como etiqueta html.

En el constructor podremos inyectar dependencias a usar, por ejemplo algun servicio.

Para poder mostrarlo dentro de app.component.html agregamos la etiqueta:

```
<app-saludo></app-saludo>
```

Veremos como pasarle propiedades a un componente desde un componente de orden inferior.

Agregamos el decorador Input de "@angular/core"

Declaramos un atributo que sera un input y trendra un valor por defecto:
```
@Input() nombre: string = "Usuario"
```

Para mandar este dato desde un componente padre podemos agregarlo de forma literal o de forma dinamica:
```
// Literal
<app-saludo nombre="Christos"></app-saludo>
// Dinamica
// Necesitamos haber creado la variable "usuario" en el controlador del padre para pasarselo a la etiqueta del hijo
<app-saludo [nombre]="usuario"></app-saludo>

```

Para bindear variables para props y que tengan una sola dirección usaremos los corchetes.

Para bindear variables en dos direcciones usaremos ngModel el cual es un modulo que se debe importar.

Por ejemplo crear un input que controle el atributo "usuario":
```
<input placeholder="Nombre de usuario" type="text" [(ngModel)]="usuario" />
```

Para que funcione la directiva ngModel necesitamos importar el modulo FormsModule en app.module.ts:
```
...

imports: [
    ...
    
    FormsModule,

    ...
  ],

...
```

Crearemos un metodo que gestione el evento click, para eventos usaremos parentesis y el nombre del evento:

```
<button (click)="alertaSaludo()">Mostrar alerta</button>
```

Con esto llamaremos a la funcion declarada en el evento click la cual debe estar ya disponible en el controlador para poder ejecutar una alerta por ejemplo.

Veremos lo que es ahora el output

Para poder usar los outputs necesitamos importar Output y EventEmitter desde "@angular/core"

Agregamos al controlador que emitira el evento:
```
...

@Output() mensajeEmiter: EventEmitter<string> = new EventEmitter<string>();

...

alertaSaludo(): void {
  this.mensajeEmiter.emit(
    `Hola, ${this.nombre}. Alerta despachada desde un click en Saludo`
  );
}

...
```

Aqui estamos indicando que tendremos un output de tipo EventEmitter de tipo string el cual hace una emision al padre cuando se ejecute la funcion alertaSaludo. Dentro del metodo emit de nuestro EventEmitter mandamos un string que recibira el padre.

Para capturar este evento desde el padre colocamos en la etiqueta de donde proviene el emitter lo siguiente:
```
<app-saludo (mensajeEmiter)="alertaSaludoPadre($event)" [nombre]="usuario"></app-saludo>
```

La funcion a la cual se captura el evento alertaSaludoPadre esta en el padre y recibe el "$event" el cual sera la informacion enviada de alertaSaludo del hijo la cual es un string.

Entonces desde el controlador del padre el metodo que reacciona a este evento contendra:
```
alertaSaludoPadre(evento: string): void {
    alert(evento);
  }
```

# Sesion 3
Creamos el proyecto evolutivo completo.
Nosotros ya lo creamos desde la sesion 1 pero los pasos son:
```
ng new <proyecto>
// Nos mostrara si queremos routing y que css preprocesor queremos
// Añadimos routing con "Yes"
// Añadimos el css preprocesor de nuestra preferencia
```

Creamos los componentes a los cuales podremos usar en nuestra app (TaskList, Task, TaskForm):
```
ng g c components/<componente>
```

Creamos los componentes de tipo form para auth en nuestra app:
```
ng g c components/auth/<componente form de login>
ng g c components/auth/<componente form de registro>
```

Creamos el componentes de tipo navbar en nuestra app:
```
ng g c components/nav/<componente navbar>
```

Creamos los componentes de tipo pagina a los cuales podremos navegar en nuestra app:
```
ng g c pages/<componente>
```

Agregamos angular material:
```
ng add @angular/material
```

# Sesion 4
Vimos el uso de los modulos los cuales pueden exportar componentes y las directivas mas usadas en angular.

# Sesion 5
Veremos el uso de servicios, inyeccion de clases a nuestros componentes. El fin de los servicios es sacar la logica compartida de toda la app de los componentes y asi no repetir codigo. Solo inyectar los servicios para usarlos y asi no repetir su escritura.

Principalmente seran peticiones HTTP en forma de respuesta o de observable para que los componentes puedan obtener los datos o estar observando los cambios de la respuesta.

Creamos el servicio Contacto:
```
ng g s services/Contacto
```

Esto genera dos archivos, el de pruebas y el servicio, el servicio se ve asi:
```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }
}
```

Para usarlo debemos inyectar el servicio en el constructor del componente que lo consumira:
```
...

constructor(private contactService: ContactoService) {}

...
```


# Sesion 6
Aplicaremos y entenderemos el routing de angular junto con los guards para proteger rutas y subrutas.

En el modulo de enrutado se cargan todas las rutas en la constante routes.

Para las rutas debemos ir creando los componentes a los cuales podremos navegar.

La etiqueta router-outlet se encargara de renderizar el componente que corresponde en la ruta en cuestion.

Para empezar debemos declarar las rutas a las que navegaremos.

```
...

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  ...

  {
    path: 'contact/:id',
    component: ContactDetailPageComponent,
  },
  ...

  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
```

Con esto hemos declarado rutas redirijen a otras rutas, rutas normales, rutas que pueden recibir parametros por url y una ruta que cargara un componente en dado caso que no encuentre ninguna ruta que haga match con las anteriores existentes.

En dado caso que querramos darle hijos a una ruta debemos agregar children con una array de objetos con la misma estructura que routes y en dicho componente agregar el router-outlet para poder renderizar al hijo dentro del padre.

Para poder navegar entre rutas debemos usar la propiedad routerLink en nuestro html colocando la ruta a la que queremos navegar.

```
<a routerLink="/login">Navegar a login</a>
```

Debe tener el diagonal ya que si no lo tiene sobrepondra la ruta a navegar encima de la ruta en la que estamos.

Si queremos recibir desde la ruta al componente esos parametros enviador podemos utilizar ActivatedRoute:
```
import { ActivatedRoute } from '@angular/router';

...

constructor(private route: ActivatedRoute) {}

...

ngOnInit(): void {
    // Vamos a leer los parametros:
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });
  }

...
```

Generaremos un guard:
```
ng g g guards/auth
```

Los guards deben retornar true para que la ruta que protegen pueda ser utilizada, en caso de devolver false el routing no nos permitira ingresar a la ruta.

# Sesion 7
Aplicamos el routing para poder navegar tanto de forma programatica como utilizando routeLink en nuestras anclas en html, utilizamos NavigationExtras para pasar datos entre nuestras rutas y conectamos el servicio de auth para poder hacer un login a reqres.in

# Sesion 8
Importamos el ReactiveFormsModule para utilizar formularios reactivos y poder validarlos.

# Sesion 9
Veremos los pipes de angular para personalizar nuestros datos en la vista.

Agregaremos el locale de donde nos encontramos:
```
// app.module.ts
...

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

registerLocaleData(localeES);

...

providers: [
    // Registramos el locale ES
    { provide: LOCALE_ID, useValue: 'es' },
  ],

...
```
