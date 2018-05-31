


function addTodo (state = {items: []}, action) {
  const { type, item } = action

  if (type === 'addTodoItem') {
    return {
      ...state,
      items: state.items.push(item)
    }
  }

  return state
}

export default addTodo