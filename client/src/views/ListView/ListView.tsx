import React from 'react'
import './ListView.css'
import { useStoreContext } from "../../components/ContextProvider/ContextProvider";
import logo from '../../logo.svg'


export const ListView = () => {
    const posts = useStoreContext();

    return (
        <div className="list">
            {
                posts.map((post, i) => (
                    <div key={`post-${i}`} >
                        <div className="todo">
                            <img src={logo} className='todo-logo' alt="logo" />
                            <h3>
                                {post.title}
                            </h3>
                        </div>
                        <span className="description">
                            {post.description}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}