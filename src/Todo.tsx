import React from 'react'

export default function Todo({todo}) {
    return (
        <div>
            {todo.name} <button>Delete</button>
        </div>
    )
}
