import './App.css';
import React, { Suspense } from 'react';
import {
  RecoilRoot,
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState, //Modifica el estado
  selector,
} from 'recoil';
import { useState } from 'react';
import axios from 'axios';
//Funcion render

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<h1>Cargando</h1>}>
        <UserData />
        <ToDoListFilter />
        <TodoStats />
        <ItemCreator />
        <TodoList />
      </Suspense>
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
//Selectors
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
const todoStatsSelector = selector({
  key: 'todoStatsSelector',
  get: ({ get }) => {
    const list = get(todoListState)
    const total = list.length
    const toDo = list.filter(item => item.isComplete).length
    const notToDo = list.filter(item => !item.isComplete).length
    const completePercetaje = total === 0 ? 0 : (toDo / total) * 100
    const data = {
      total,
      toDo,
      notToDo,
      completePercetaje
    }
    return data
  }



})
const userDataSelector = selector({
  key: 'userDataSelector',
  get: async () => {
    const response = await axios.get('http://localhost:3001/users/1')
    return response.data
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
function TodoStats() {
  const { total, toDo, notToDo, completePercetaje } = useRecoilValue(todoStatsSelector)
  return (
    <div>
      <span>Tareas totales:{total}</span><br />
      <span>Tareas pendientes:{notToDo}</span><br />
      <span>Tareas completas:{toDo}</span><br />
      <span>Eficiencia:{completePercetaje}%</span>
    </div>
  )
}
function UserData() {
  const user = useRecoilValue(userDataSelector)
  return (
    <h1>{user.name}</h1>
  )
}
export default App;
