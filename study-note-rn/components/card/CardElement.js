import React,{ useState ,useEffect } from 'react';
import {SortableElement} from 'react-sortable-hoc';
import { View, Button, Text, TextInput } from 'react-native';
export default SortableElement((props)=>{
  const [indent,setIndent] = useState(props.indent)
  const [name,setName] = useState(props.name)
  const [value,setValue] = useState(props.value)
  
  useEffect(() => {
    setIndent(props.indent);
    setName(props.name);
    setValue(props.value);
  },[props.indent,props.name,props.value])

  function handleIndent(num){
    props.onHandle(props.idx,"indent",num)
    setIndent(num)
  }

  function handleName(event){
    props.onHandle(props.idx,"name",event.target.value)
    setName(event.target.value)
  }
  function handleValue(event){
    props.onHandle(props.idx,"value",event.target.value)
    setValue(event.target.value)
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
      <View className="card card-new">
        <Text> {props.idx+1}</Text>
        {
          indent>0 ?
          null :
          (<TextInput type='text' value= {name}  onChange={handleName}/>)
        }
        <TextInput type='text' value={value} onChange={handleValue}/>
        <Button onPress={(event) => {props.onRemove(props.idx);}} title="---"/>
      </View>
    </View>
  );
})