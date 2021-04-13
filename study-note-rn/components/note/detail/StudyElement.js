import React,{ useState ,useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Div } from '../../commons';

export default (props)=>{
  const [value,setValue] = useState(props.value)
  
  useEffect(() => {
    setValue(props.value);
  },[props.indent,props.name,props.value])
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Div className="card">
        <Text> {props.idx+1}</Text>
        <Text>{value}</Text>
      </Div>
    </TouchableOpacity>
  );
}