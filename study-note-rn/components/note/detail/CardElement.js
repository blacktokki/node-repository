import React,{ useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Div } from '../../commons';

export default (props)=>{
  const [indent,setIndent] = useState(props.indent)
  const [name,setName] = useState(props.name)
  const [value,setValue] = useState(props.value)
  function handleIndent(num){
    props.onHandle(props.idx,"indent",num)
    setIndent(num)
  }

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
      <Button onPress={(event) => {handleIndent(1-indent);}} title="ㄴㄴㄴ"/>
      <Button onPress={(event) => {props.onCreate(props.idx);}}title="+++"/>
      {
        indent>0 ?
        (<Text>ㄴ</Text>) :
        null
      }
      <Div className="card">
        <Text> {props.idx+1}</Text>
        {
          indent>0 ?
          null :
        (<TextInput type='text' value= {name}  onChangeText={handleName}/>)
        }
        <TextInput type='text' value={value} onChangeText={handleValue}/>
        <Button onPress={(event) => {props.onRemove(props.idx);}} title="---"/>
      </Div>
    </View>
  );
}