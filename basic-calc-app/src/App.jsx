// importacion 
import React from 'react';
import Button from './components/button/Button';
import Functions from './components/functions/Functions';
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
            <div className="numbers">
                <Button text='1' type="button" clickHandler={clickHandlerFunction}></Button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
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