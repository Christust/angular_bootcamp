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



