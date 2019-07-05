import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoActions';

export default class AddTodo extends Component {

    state = {
        content: ''
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const todo = {
            id: 0,
            content: this.state.content
        };
        (this.props as any).addTodo(todo);
        this.setState({ content: '' })
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            content: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" value={this.state.content} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (todo: any) => dispatch(addTodo(todo))
});

export const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo)
