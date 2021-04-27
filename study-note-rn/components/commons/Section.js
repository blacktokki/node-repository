import React from 'react';
import { View, Text,TextInput } from 'react-native';
import { observer,inject } from 'mobx-react';
import SectionHeader from './SectionHeader';
import Div from './Div';

export default inject("_ref")(
  observer(({_ref, title, children})=>{
  return (
    <Div className='section'>
        <SectionHeader title={title} screenLength={_ref.screen.length}/>
        {children}
    </Div>
  );
  })
)