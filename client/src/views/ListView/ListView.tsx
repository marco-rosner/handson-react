import React from 'react'
import './ListView.css'
import { useStoreContext } from "../../components";
import logo from '../../logo.svg'


export const ListView = () => {
    const { todos } = useStoreContext();

    return (
        <div className="list">
            {
                todos.map((todo, i) => (
                    <div key={`post-${i}`} >
                        <div className="todo">
                            <img src={logo} className='todo-logo' alt="logo" />
                            <h3>
                                {todo.title}
                            </h3>
                        </div>
                        <span className="description">
                            {todo.description}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}