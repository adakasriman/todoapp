import React, { Component } from 'react';
import Todo from './Todo';

class TodoFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, number: 1, todo: "firstTodo", complete: false, isChecked: true },
                { id: 2, number: 2, todo: "secondTodo", complete: false, isChecked: true }
            ],
            newTodo: ""
        }
    }
    userHandular = (event) => {
        this.setState({
            newTodo: event.target.value
        })
    }
    newTodo = (e) => {
        e.preventDefault();
        let getTodos = [...this.state.todos];
        let id;
        // let number;
        if (getTodos[getTodos.length - 1]) {
            id = getTodos[getTodos.length - 1]['id'] + 1;
        } else {
            id = 1;
        }
        let newTodo = {
            id,
            number: id,
            todo: this.state.newTodo,
            complete: false,
            isChecked: true
        }
        getTodos.push(newTodo);
        this.setState({ todos: getTodos });
        this.setState({
            newTodo: ""
        })
    }
    completeTodo = (id) => {
        const getTodos = [...this.state.todos];
        getTodos.filter(todo => {
            if (todo.id === id && todo.isChecked) {
                todo.complete = true;
                todo.isChecked = false;
            } else {
                todo.complete = false;
                todo.isChecked = true;
            }
        });
        this.setState({ getTodos });
    }
    cancelTodo = (id) => {
        const index  = this.state.todos.id;
        const itemDeleting = this.state.todos.filter(item => item.id !== id);
        const newTodoList = itemDeleting.map((item , index) => index);
       console.log(newTodoList.sort());
        this.state.todos.number = index;
        this.setState({
            todos: itemDeleting
        })
    }
    render() {
        return (
            <div className='col-12'>
                {
                    this.state.todos.map((todo, i) => {
                        return <Todo key={todo.id} number={i} defaultChecked={todo.isChecked} complete={todo.complete} todo={todo.todo} completeTodo={() => this.completeTodo(todo.id)} cancelTodo={() => this.cancelTodo(todo.id)} />
                    })
                }
                <form className='d-flex justify-content-between align-items-center' onSubmit={this.newTodo}>
                    <input className='inputBox' type="text" placeholder='new Todo' value={this.state.newTodo} onChange={this.userHandular} />
                    <button className='btn btn-success add-btn'>+ Add New</button>
                </form>
            </div>
        )
    }
}

export default TodoFrame;