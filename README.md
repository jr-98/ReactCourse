# Calculadora implementada en React I Type Script
## TS
## Js vs Ts
## JSX vs TS
### Tipos de JSX que TS distingue
Se distinguen dos tipos de elementos JSX: los intrinsecos y los creados por el desarrollados (value-based)
Los elementos intrinsecos estan definidos en la definici'oin de React, mediante:

    interface IntrinsecElements
    
En este tipo de elementos no esnecesario realizar el *import* para que esten disponibles en donde se los requiera.
Algunos de estos archivos son:
- div
- spam
- a
- input
- main
- etc
Además de los elementos definidos en forma 'intrinsecas' hay algunos atributos que se defiunen de esta misma manera, por ejemplo:
- key
Cuando vemos un error que sea diga algo similar a *Intrinsic elements*  o props, en realidad lo que TS trata de advertir es que el elemento como tal no existe dentro de los elementos importados ni en los elementos intrisecos, o que la propiedad no existe entre lo elementos declarados ni en los intrinsecos.

## Porqué TS
#Arraque
Para iniciar este proyecto se recomient usar el comando:
```
npm install
```
y posteriornente:
```
npm start
```
