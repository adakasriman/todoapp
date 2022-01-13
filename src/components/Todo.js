import React, { Component } from 'react'

export class Todo extends Component {
    render() {
        // console.log(this.props.id);
        return (
            <div>
                <div className='d-flex justify-content-between align-items-center padding'>
                    <div className='d-flex'>
                        <div className='item'>{this.props.number}</div>
                        <input className='checkBox' type="checkbox" defaultChecked={this.props.isChecked} onClick={() => this.props.completeTodo(this.props.todo.id)}/>
                        <p style={{ textDecoration: this.props.complete ? 'line-through' : '' }} className='todoItem'>{this.props.todo}</p>
                    </div>
                    <div>
                        <button href="#" className="btn btn-danger" onClick={() => this.props.cancelTodo(this.props.todo.id)}>Delete</button>
                    </div>
                </div>
                <hr /   >
            </div>
        )
    }
}

export default Todo

