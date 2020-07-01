import React from 'react';
import {NavLink} from 'react-router-dom'
import { View, Text } from 'react-native';

export default (props)=>{
    return (
        <View className="card">
            <NavLink className="nav-link" exact to={"/note/"+props.id}>
                {props.id}
                {props.title} {props.cards.length}개
            </NavLink>
        </View>
    )
}