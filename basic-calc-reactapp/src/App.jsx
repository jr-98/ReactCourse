// importacion 
import React from 'react';
import Functions from './components/functions/Functions';
import Numbers from './components/numbers/Numbers';
import MathOpetations from './components/mathOperations/MathOperations';
import Result from './components/result/Result';
import './App.css';

// Codificacion del componente
const App = () => {
  console.log('Renderizacion de la App')
  //Cuerpo de la function
  const clickHandlerFunction = text => {
    console.log('click desde App.jsx', text)
  }
  return (
    <main className='react-calc'>
      <Result value={0} />
      <Numbers onClickNumber={clickHandlerFunction}></Numbers>
      <Functions
        onContentClear={clear => console.log('Clear', clear)}
        onDelete={del => console.log('Delete', del)}
      />
      <MathOpetations
        onClickOperation={operation => console.log("Operacion", operation)}
        onClickEqual={equal => console.log("Equial", equal)} />
    </main>
  )
}

export default App
// Exporatacion del componente