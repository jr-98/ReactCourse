import './App.css';
import {
  RecoilRoot,
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState, //Modifica el estado
  selector,
} from 'recoil';
import { useState } from 'react';
//Funcion render

function App() {
  return (
    <RecoilRoot>
      <ItemCreator />
      <TodoList />
      <ToDoListFilter />
    </RecoilRoot>
  );
}
//Atomos
const todoListState = atom({
  key: 'todoListState',
  default: []
})
const todoFilterState = atom({
  key: 'todoFilterState',
  default: "all"
})
const todoFilterSelector = selector({
  key: 'todoFilterSelector',
  get: ({ get }) => {
    const list = get(todoListState)
    const filter = get(todoFilterState)
    switch (filter) {
      case 'done':
        return list.filter(item => item.isComplete)
      case 'notDone':
        return list.filter(item => !item.isComplete)
      default:
        return list
    }
  }
})

// variables
let idEdit = 0

//funciones
function ItemCreator() {
  const [text, setText] = useState()
  // const [newToDo, setNewToDo] = useRecoilState(todoListState)
  const setNewToDo = useSetRecoilState(todoListState)
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
  const todos = useRecoilValue(todoFilterSelector)
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
  const [changeToDoList, setChangeToDoList] = useRecoilState(todoListState)
  const onChangeTodoItem = event => {
    const textValue = event.target.value
    const changedItem = {
      id,
      text: textValue,
      isComplete
    }
    setChangeToDoList(changeItem(id, changeToDoList, changedItem))
  }
  const onToggleComplete = () => {
    const changedItem = {
      id,
      text,
      isComplete: !isComplete
    }
    setChangeToDoList(changeItem(id, changeToDoList, changedItem))
  }

  function deleteItem(id, toDoList) {
    const index = toDoList.findIndex(item => item.id === id)
    return [...toDoList.slice(0, index), ...toDoList.slice(index + 1, toDoList.lenght)]
  }

  function onClickDelete() {
    setChangeToDoList(deleteItem(id, changeToDoList))
  }

  return (
    <div>
      <input value={text} onChange={onChangeTodoItem} />
      <input type='checkbox' checked={isComplete} onChange={onToggleComplete} />
      <button onClick={onClickDelete}>x</button>
    </div>
  )
}

function ToDoListFilter() {
  const [filterState, setFilterState] = useRecoilState(todoFilterState)
  const onSelectedItem = event => {
    const { value } = event.target
    setFilterState(value)
  }
  return <div>
    Filtro:
    <select value={filterState} onChange={onSelectedItem}>
      <option value="all">Todos</option>
      <option value="done">Completos</option>
      <option value="notDone">Incompletos</option>
    </select>
  </div>
}
export default App;
