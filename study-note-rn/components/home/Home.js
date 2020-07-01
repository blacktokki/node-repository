import React from 'react';
import { observer,inject } from 'mobx-react';
import SectionHeader from '../commons/SectionHeader';
import { View, Button , Text } from 'react-native';

export default inject("counter")(
    observer(({counter})=>(
        <View className='section'>
          <SectionHeader title="Home"/>
          <View className="card">
            <Text>{counter.number}</Text>
            <Button onPress={counter.increase} title="+1"/>
            <Button onPress={counter.decrease} title="-1"/>
          </View>
        </View>
    ))
);  