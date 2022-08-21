# Weather App con redux
Aplicacion sencilla de React para climas con  la aplicacion de redux basico en el manejos del estado.
* Cada reducer debe estar evocado en realizar una unica accion.
## Redux
### Smart Components vs Dumb Components
### Funciones puras
* Es uno de los conmceptos basicos de los reducers
* Una Función pura (Pure function) depende única y exclusivamente de los parámetros que se le asignen como entrada.
* Una FP no modifica el valor de los parametros que recibe, evitado los Side effects o efectos colaterales que dicah modificación lleguase a producir
* Unicamente se permite hacer una copia de los paremetros en un nuevo objeto usando el Express Operation
```
{...state, prop:'Nuevo valor'}
```
### Selectores
* Son eficientes ya que no se ejecutas si ninguno de sus parámetros se modifica.
* Permiten composición: nuevos selectores pueden tomar como entrada otros selectores.
* Pueden minimuzar el tamaño del store, ya que permiten generar datos procesado al vuelo, en lufa de guardarlos.
#### Memoization
Es una técnica de optimización que permite mejorar la celocidad de ejecución guardando valores que son resultado de cáculos complejor, la unica pega esque utilizan más memoria que lkso calulos normales.
#### bindActionCreator
El bindActionCreators es una propieda de reduxc que recibe como paramettros actions y dispatch donde actions en el numero de ctciones que tenemos en la clase y dispact es un objeto que contiene el valor de la actrion con el mismo nombre que la accion, lo cual no permite reducir codigo. en proyectos grandes es nmecesario evaluar su viabilidad ya que posse pros y contras que deben sopesarse.


