import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/todoActions';

export default class Todos extends Component {

    handleDeleteTodo = (id: number) => {
        (this.props as any).deleteTodo(id);
    }

    renderTodoCollection() {
        const { todos } = this.props as any;
        return (
            todos.length
                ? (todos.map((todo: any) => {
                    return (
                        <div key={todo.id} className="collection-item">
                            <span onClick={() => this.handleDeleteTodo(todo.id)} >{todo.content}</span>
                        </div>
                    )
                }))
                : (
                    <p className="center">You have no todo's left.</p>
                )
        );
    }

    render() {
        return (
            <div className="todos collection">
                {this.renderTodoCollection()}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch: any) => ({
    deleteTodo: (id: number) => dispatch(deleteTodo(id))
});

export const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos)