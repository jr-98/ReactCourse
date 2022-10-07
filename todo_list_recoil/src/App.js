import './App.css';
import {
  RecoilRoot,
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState //Modifica el estado
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
let idEdit = 0
const TodoListState = atom({
  key: 'todoListState',
  default: []
})
//funciones
function ItemCreator() {
  const [text, setText] = useState()
  // const [newToDo, setNewToDo] = useRecoilState(TodoListState)
  const setNewToDo = useSetRecoilState(TodoListState)
  const onChangeText = value => {
    setText(value.target.value)
  }
  const onClickNewItem = () => {
    setNewToDo(oldToDoList => {
      return [...oldToDoList,
      {
        id: idEdit++, text, isComplete: false
      }
      ]
    }
    )
    setText('')
  }
  return (
    <div>
      <input value={text} onChange={onChangeText} />
      <button onClick={onClickNewItem}>Agregar</button>
    </div>
  )
}
function TodoList() {
  const todos = useRecoilValue(TodoListState)
  return (
    <div>
      {
        todos.map(item => <TodoItem key={item.id} {...item} />)
      }
    </div>
  )
}
function changeItem(id, toDoList, changedItem) {
  const index = toDoList.findIndex(item => item.id === id)

  return [...toDoList.slice(0, index), changedItem, ...toDoList.slice(index + 1, toDoList.lenght)]
}

function TodoItem({ id, text, isComplete }) {
  const [changeToDoList, setChangeToDoList] = useRecoilState(TodoListState)
  const onChangeTodoItem = event => {
    const textValue = event.target.value
    const changedItem = {
      id,
      text: textValue,
      isComplete
    }
    setChangeToDoList(changeItem(id, changeToDoList, changedItem))
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
