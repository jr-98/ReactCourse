// importacion 
import React from 'react';
import './App.css';

// Codificacion del componente
const App = () => {
    //Cuerpo de la function
    return (
        <main className='react-calc'>
            <div className="result"></div>
            <div className="numbers">
                <button>1</button>
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
            <div className="functions">
                <button>Clear</button>
                <button>r</button>
            </div>
            <div className="math_operations">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>=</button>
            </div>
        </main>
    )
}

export default App
// Exporatacion del componente