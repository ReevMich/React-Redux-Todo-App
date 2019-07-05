const initState = {
    todos: [
        { id: 1, content: 'buy some milk' },
        { id: 2, content: 'play mario kart' }
    ]
}

const RootReducer = (state = initState, action: any) => {
    if (action.type === 'DELETE_TODO') {
        const todos = state.todos.filter(t => t.id !== action.id);
        return {
            ...state,
            todos: todos
        }
    } else if (action.type === 'ADD_TODO') {
        const todos = [...state.todos, action.todo];
        return {
            ...state,
            todos: todos
        }
    }
    return state;
}

export default RootReducer;