import React from 'react'
import {ACTIONS} from './App.tsx'
export default function Todo({todo, dispatch}) {
    
    return (
        <div style={{color: todo.complete? 'grey' : 'blue'}}>
            {todo.name} 

            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
        </div>
    )
}
