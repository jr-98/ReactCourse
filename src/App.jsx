// importacion 
/* eslint no-eval: 0 */
import React, { useState } from 'react';
import Functions from './components/functions/Functions';
import Numbers from './components/numbers/Numbers';
import MathOpetations from './components/mathOperations/MathOperations';
import Result from './components/result/Result';
import words from 'lodash.words'
import './App.css';

// Codificacion del componente
const App = () => {
  // Use estate>recibe una variable y una funcion
  const [stack, setStack] = useState("");
  //const stack = modificarstack[0]
  //const  = modificarstack[1]
  const items = words(stack, /[^-^+^*^/]+/g)
  const value = items.length > 0 ? items[items.length - 1] : 0;
  // console.log('Renderizacion de la App', value)
  //Cuerpo de la function
  const clickHandlerFunction = number => {
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