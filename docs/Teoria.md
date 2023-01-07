# Componentes

Crear componentes:

```
ng g c <nombre del componente>
```

Un componente es una porcion de la pantalla que controla determinada funcion. Una vista como tal.

Todos los componentes tendran 4 archivos por defecto: un archivo donde pod4remos modificar lo que el usuario puede ver, un archivo que modifica los estilos del componente solamente sin afectar a otros componentes, un archivo para ejecutar pruebas de lo que se supone debe ser el comportamiento del componente y el typescript que derterminara lo que hara el componente como tal.

En resumidas cuentas tiene una vista, una hoja de estilos, un archivo de pruebas y un controlador.

En el controlador podremos declarar lo que la vista muestra mediante atributos de clase a los que la vista tiene acceso. Todas las variables o atributos que declaremos en el controlador podremos mostrarlos en la vista mediante dobles llaves:

```
{{ variable }}
```

# Modulos

Crear modulos:

```
ng g m <nombre del modulo>
```

Dentro de los modulos podremos hacer declaraciones, importaciones, exportaciones y agregar providers.

Las declaraciones seran los componentes que podremos usar para ese modulo.

Las importaciones seran traer todo lo que exporte otro modulo.

Las exportaciones seran todo lo que nosotros exportemos hacia otro modulo que nos importe.

Para crear componentes para un modulo especifico debemos colocar la ruta exacta del modulo:

```
ng g c modules/<modulo>/<nombre del componente>
```

# Hooks

Los hooks o metodos del ciclo de vida son metodos que se ejecutan en determinado momento del ciclo de vida de un componente, sea antes de renderizar o al eliminar el componente.

## OnInit

Este hook ejecuta el codigo dentro de el antes de renderizar el componente.

# I/O

Inputs y Outputs que se utilizan para comunicar datos del padre al hijo y de los hijos al padre.

## Inputs

Se necesita importar Input de "@angular/core"

El decorador Input se debe usar en el controlador para indicar lo que vamos a recibir desde un componente de orden superior:

```
@Input() <nombre del atributo>: <tipo de dato> = <valor por defecto>;
```

El valor por defecto se agrega en caso de que deba tenerlo, para contemplar que no llegue desde el padre.

Para mandar inputs desde el componente padre debemos mandar el dato desde la etiqueta que recibe el input, podemos pasarlo de forma literal o dinamica (binding):

```
// Literal
<nombre-del-componente <nombre del input>="<valor>"></nombre-del-componente>

// Dinamica
<nombre-del-componente [<nombre del input>]="<nombre de la variable>"></nombre-del-componente>
```

En caso de no mandar ningun valor el componente usara en el input el valor por defecto si es que lo tiene.

Podemos pasar datos de forma literal

## Outputs

Se necesita importar Output y EventEmitter de "@angular/core"

En el controlador declaramos el emitter a usar con el decorador Output:

```
@Output() <nombre del output>: EventEmitter<tipo de dato> = new EventEmitter<tipo de dato>();
```

Utilizamos el metodo ya incluido en la clase EventEmitter llamado emit en el momento en que querramos mandar los datos:

```
this.mensajeEmiter.emit(<dato>);
```

# Routing

## Router Outlet

# Directivas
Las directivas nos ayudan a realizar acciones en nuestro HTML siendo ellas renderizados especificos (condicionales o repetitivos) asi como manejar parametros especificos de algunas etiquetas asi como sus clases o estilos.

## ngIf - else
Con esta directiva condicional podremos mostrar o no un bloque en nuestro HTML:

```
<p *ngIf="condicion">
  Bloque a mostrar
</p>
```

Si deseamos usar nuestro ngIf con su complemento else seria:

```
<ng-container *ngIf="condicion; else elseTemplate">
  <p>
    Bloque a mostrar
  </p>
</ng-container>
<ng-template #elseTemplate>
  <p>
    Bloque else
  </p>
</ng-template>
```

## ngFor
Para una directiva for la cual iterara una lista de elementos y repetir el contenido debe contener la lista de elementos y el nombre a del elemento a usar en cada iteración, al igual podemos ver si es par o impar (even, odd) asi como el index:

```
<div *ngFor="let elemento of listaElementos; let i = index; let even = even">
  <p>Index: {{index}}</p>
  <p>{{elemento.atributo1}}</p>
  <p>{{elemento.atributo2}}</p>
</div>
```

## ngSwitch
Para usar el *ngSwitch debemos usar una variable la cual funcionara como el switch:
```
<div [ngSwitch]="opcion">
  <p *ngSwitchCase="1">Opcion 1</p>
  <p *ngSwitchCase="2">Opcion 2</p>
  <p *ngSwitchDefault>Valor por defecto si no se obtienen las anteriores opciones</p>
  ...
</div>
```

# Servicios
Los servicios son clases las cuales ofrecen metodos que nuestros componentes pueden tener acceso para poder consumir informacion o realizar acciones que se repiten en la aplicación. Asi no repetir codigo.

Para crear un servicio usamos:
```
ng g s services/<nombre del servicio>
```

Esto añadira el archivo service y el archivo de pruebas. El archivo de servicio se ve asi:
```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }
}
```

## Promesas
Las promesas esperan en algun momento cambiar de estado una vez hacen la peticion, podemos crear dentro de nuestro servicio una funcion de tipo promesa de la siguiente forma:
```
obtenerContactos(): Promise<IContact[]> {
  return Promise.resolve(CONTACTS);
}
```

En este caso de prueba CONTACTS es una constante la cual es una lista de objetos.

Para usar nuestro servicio ahora en el componente debemos hacer:
```
ngOnInit(): void {
  // Obtener la lista de contactos:
  this.contactService
    .obtenerContactos()
    .then((lista: IContact[]) => (this.contactList = lista))
    .catch((error) => console.log(`Hubo un error: ${error}`))
    .finally(() => console.log('Peticion terminada'));
}
```

## Observables
Para usar observables debemos importar en nuestro servicio la herramienta Observable de rxjs:
```
import { Observable } from 'rxjs';
```

Normalmente las peticiones http en angular seran manejadas por observables que pueden estar suscritos a los mismos hasta estar resueltos.

Desde el servicio podremos crearlo de la siguiente manera:
```
obtenerContactoPorId(id: number): Observable<IContact> | undefined {
  const contact = CONTACTS.find((contact: IContact) => contact.id === id);

  // Creamos el obserbable
  let observable: Observable<IContact> = new Observable((observer) => {
    observer.next(contact); // Emitimos un valor a todo componente suscrito
    observer.complete(); // No emitimos mas valores
  });
  if (contact) {
    return observable;
  }
  return;
}
```

Y para consumirlo desde el componente usamos:
```
obtenerContacto(id: number) {
  this.subscription = this.contactService
    .obtenerContactoPorId(id)
    ?.subscribe((contacto: IContact) => (this.selectedContact = contacto));
  console.log(this.selectedContact);
}
```

Es importante desuscribirnos de nuestros observables al eliminar el componente usando ngOnDestroy:
```
subscription: Subscription | undefined;

...

obtenerContacto(id: number) {
  this.subscription = this.contactService
    .obtenerContactoPorId(id)
    ?.subscribe({
      next: (contact: IContact) => (this.selectedContact = contact),
    });
  console.log(this.selectedContact);
}

...

ngOnDestroy(): void {
  this.subscription?.unsubscribe();
}

...
```

# Http
El modulo HttpClientModule nos ayuda a realizar peticiones http y poder usarlas dentro de nuestros servicios, para ello necesitamos importarlo.

Importamos el modulo httpclient:
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

Ahora podemos usarlo en nuestros servicios inyectandolo en sus constructores:
```
constructor(private http: HttpClient) { }

login(email: string, password: string): Observable<any> {
  let body = {
    email: email,
    password: password,
  };
  // Devolvemos la respuesta del observable cuando la peticion
  // http se ah completado.
  return this.http.post('https://reqres.in/api/login', body);
}
```

Al consumirlo lo podemos hacer como a un observable:
```
suscription: Subscription | undefined;
  constructor(private loginService: AuthService) {}

  ngOnInit(): void {
    this.suscription = this.loginService
      .login('eve.holt@reqres.in', 'cityslicka')
      .subscribe({
        next: (res) => console.log(res),
        error: (e) => console.log(e),
        complete: () => console.log('terminado'),
      });
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }
```
