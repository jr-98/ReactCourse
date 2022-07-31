// importacion 
/* eslint no-eval: 0 */
import React, { useState, FC } from 'react';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import MathOpetations from './components/MathOperations';
import Result from './components/Result';
import words from 'lodash.words'
import './App.css';

// Codificacion del componente
//FC es una sentecia que indica que App es un compoennete funcional  o Functional component 
//lo que significa que App es un componente funcional y por tanto tras su utilización, tendra un chequeo estático de tipos de datos.
const App: FC = () => {
  // Use estate>recibe una variable y una funcion
  //En TS reconoce automaticamente el tipo de dato que se ha de utilizar, inifierendo el tipo de variable de retorno y el 
  //Tipo de dato dque la funcion set del state recibira un tipo de dato específico
  const [stack, setStack] = useState("");
  //const stack = modificarstack[0]
  //const  = modificarstack[1]
  const items = words(stack, /[^-^+^*^/]+/g)
  // Al ser un tipo de tipado dionamico es necesario 'asignar' el tipon de dato acorde al establevido enla 
  //funcion  Result que fue string 
  const value = items.length > 0 ? items[items.length - 1] : '0';
  // console.log('Renderizacion de la App', value)
  //Cuerpo de la function
  const clickHandlerFunction = (number: string) => {
    // console.log('click desde App.jsx', number)
    setStack(`${stack}${number}`)
  }
  return (
    <main className='react-calc'>
      <Result value={value} />
      <Numbers onClickNumber={clickHandlerFunction} />
      <Functions
        onContentClear={() => {
          console.log('onCOntentClear')
          setStack('')
        }}
        onDelete={del => {
          if (stack.length > 0) {
            console.log('Delete', del)
            const newStack = stack.substring(0, stack.length - 1)
            setStack(newStack)
          }
        }}
      />
      <MathOpetations
        onClickOperation={operation => {
          // console.log("Operacion", operation)
          setStack(`${stack}${operation}`)
        }}
        onClickEqual={equal => {
          // console.log("Equial", equal)
          setStack(eval(stack).toString())
        }}
      />
    </main>
  )
}

export default App
// Exporatacion del componente