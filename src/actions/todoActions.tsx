export const deleteTodo = (id: number) => {
    return {
        type: 'DELETE_TODO',
        id: id
    };
}

export const addTodo = (todo: any) => {
    return {
        type: 'ADD_TODO',
        todo: todo
    };
}