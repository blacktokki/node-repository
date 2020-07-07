import React from 'react';
import { Link } from 'router'
import { View, Text } from 'react-native';

export default (props)=>{
    return (
        <View className="card">
            <Link className="nav-link" exact to={"/note/"+props.id}>
                <Text>{props.id} {props.title} {props.cards.length}개</Text>
            </Link>
        </View>
    )
}