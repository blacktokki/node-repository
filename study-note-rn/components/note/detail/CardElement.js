import React,{ useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Div } from '../../commons';

export default (props)=>{
  const [name,setName] = useState(props.name)
  const [value,setValue] = useState(props.value)
  
  useEffect(() => {
    setName(props.name);
    setValue(props.value);
  },[props.name,props.value])

  function handleName(event){
    const val = event.target ? event.target.value : event
    props.onHandle(props.idx,"name",val)
    setName(val)
  }
  function handleValue(event){
    const val = event.target ? event.target.value : event
    props.onHandle(props.idx,"value",val)
    setValue(val)
  }
  return (
    <View>
      <Button onPress={(event) => {props.onCreate(props.idx);}}title="+++"/>
      <Div className="card">
        <Text> {props.idx+1} ({props.id}, {props.isRemain?1:0}, {props.isCorrectOnce?1:0}, {props.isCorrectLast?1:0})</Text>
        <TextInput type='text' value= {name}  onChangeText={handleName}/>
        <TextInput type='text' value={value} onChangeText={handleValue}/>
        <Button onPress={(event) => {props.onRemove(props.idx);}} title="---"/>
      </Div>
    </View>
  );
}