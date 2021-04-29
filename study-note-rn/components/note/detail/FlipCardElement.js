import React,{ useState ,useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Div } from '../../commons';

export default (props)=>{
  const [indent,setIndent] = useState(props.indent)
  const [name,setName] = useState(props.name)
  const [value,setValue] = useState(props.value)
  
  useEffect(() => {
    setIndent(props.indent);
    setName(props.name);
    setValue(props.value);
  },[props.indent,props.name,props.value])
  
  return (
    <TouchableOpacity onPress={props.onPress} style={{width:props.width}}>
      <Div className="card">
        <Text> {props.idx+1}</Text>
        <Text>{name}</Text>
        <Text>{value}</Text>
      </Div>
    </TouchableOpacity>
  );
}