import React, { Component } from 'react';
import { TodosContainer } from './components/todos/todos';
import { AddTodoContainer } from './components/todos/addTodo';

export default class App extends Component {

    addTodo = (todo: { id: number, content: string }) => {
        // todo.id = this.state.todos.length + 1;
        // const todos = [...this.state.todos, todo];
        // this.setState({ todos });
    }

    deleteTodo = (id: number) => {
        // const todos = this.state.todos.filter(t => t.id !== id);
        // this.setState({ todos });
    }

    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <TodosContainer />
                <AddTodoContainer />
            </div>
        );
    }
}
