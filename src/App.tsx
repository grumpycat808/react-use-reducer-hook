import logo from './logo.svg';
import React, {useState, useEffect, useRef, useReducer} from 'react'
import './App.css';
import TextField from './TextField.tsx';
import Todo from './Todo.tsx'

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO:'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {

  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          todo.complete = !todo.complete;
        }
        return todo;
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos;
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false
  }
}
function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(0);
  const inputRef = useRef();
  const [todos, dispatch] = useReducer(reducer,[]);
  
  
  useEffect(() => {
    renderCount.current = ++renderCount.current;
  })

  const focus = () => {
    inputRef.current.focus();
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name} });
    setName('')
  }

  return (
    <div className="App">
      {/* <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}></input>
      <div>My name is {name}</div>
      <div>Count: {renderCount.current}</div>
      <TextField text="Hello World"></TextField>
      <button onClick={focus}>Click Me</button> */}

      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
      </form>
      {
        todos.map((todo) => {
          return <Todo todo={todo}></Todo>
        })
      }
    </div>
  );
}

export default App;
