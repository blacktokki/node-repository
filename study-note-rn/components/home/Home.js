import React from 'react';
import { observer,inject } from 'mobx-react';
import { Section, Div } from '../commons';
import { View, Button , Text } from 'react-native';

export default inject("counter")(
    observer(({counter})=>(
        <Section title="Home">
          <Div className="card">
            <Text>{counter.number}</Text>
            <Button onPress={counter.increase} title="+1"/>
            <Button onPress={counter.decrease} title="-1"/>
          </Div>
          <Div className="card" style={{flex:1}}>
            <Div className="progress-bar" style={{height:"25%", width:"25%"}}></Div>
          </Div>
        </Section>
    ))
);  