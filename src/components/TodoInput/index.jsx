import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

const TodoInput = ({ addItem }) => {
    const [value, setValue] = useState({ id: 0, val: '' })

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault()
            addItem(value)
            setValue({ id: value.id + 1, val: '' })
        },
        [setValue, value, addItem]
    )

    return (
        <form onSubmit={onSubmit}>
            <input value={value.val} onChange={e => setValue({ id: value.id, val: e.target.value })} />
            <button>Agregar item</button>
        </form>
    )
}
const mapDispatchToProps = (dispatch) => {
    return ({
        addItem: (value) => {
            return dispatch({ type: 'ADD_ITEM', payload: { item: value } })
        }
    })
}

export default connect(null, mapDispatchToProps)(TodoInput)