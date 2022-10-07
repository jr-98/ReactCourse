import './App.css';
import {
  RecoilRoot,

} from 'recoil';
import { useState } from 'react';
//Funcion render
function App() {
  return (
    <RecoilRoot>
      <ItemCreator />
      <TodoList />
    </RecoilRoot>
  );
}
//cosntates
const todos = [
  { text: 'To do 1', isComplete: false },
  { text: 'To do 2', isComplete: true },
  { text: 'To do 3', isComplete: false },
]
//funciones
function ItemCreator() {
  const [text, setText] = useState()
  const onChangeText = value => {
    setText(value.target.value)
  }
  return (
    <div>
      <input value={text} onChange={onChangeText} />

    </div>
  )
}
function TodoList() {
  return (
    <div>
      {
        todos.map(item => <TodoItem key={item.id} {...item} />)
      }
    </div>
  )
}
function TodoItem({ text, isComplete }) {
  const onChangeTodoItem = e => {

  }
  return (
    <div>
      <input value={text} onChange={onChangeTodoItem} />
      <input type='checkbox' checked={isComplete} />
      <button>x</button>
    </div>
  )
}
export default App;
