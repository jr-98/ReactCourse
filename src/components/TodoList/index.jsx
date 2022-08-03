import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem'

const TodoList = ({ list, removeItem }) => {
    const onClickRemove = useCallback((item) => {
        removeItem(item)
    }, [])

    return (
        <div>
            {list && list.map(i => <TodoItem key={i.item.id} {...i} onClickRemove={onClickRemove}></TodoItem>)}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        list: state && state.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        removeItem: value => {
            return dispatch({ type: 'REMOVE_ITEM', payload: { params: value } })
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
