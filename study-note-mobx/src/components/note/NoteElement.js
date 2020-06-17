import React from 'react';
import {NavLink} from 'react-router-dom'

export default (props)=>{
    return (
        <div className="card">
            <NavLink className="nav-link" exact to={"/note/"+props.id}>
                {props.id}
                {props.title} {props.cards.len}개
            </NavLink>
        </div>
    )
}