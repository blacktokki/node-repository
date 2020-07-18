import React from 'react';
import { Link } from 'router'
import { View, Text } from 'react-native';
import { Div } from '../commons';

export default (props)=>{
    return (
        <Div className="card">
            <Link className="nav-link" exact = "true" to={"/note/"+props.id}>
                <Text>{props.id} {props.title} {props.cards.length}개</Text>
            </Link>
        </Div>
    )
}