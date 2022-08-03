import React from 'react'
export default function TodoItem({ item, onClickRemove }) {
    return (
        <div>
            {item.val}<button onClick={() => onClickRemove(item)}>x</button>
        </div>
    )
}
