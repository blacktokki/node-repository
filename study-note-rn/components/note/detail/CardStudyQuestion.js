import React,{ useState ,useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
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
        (<Text>{name}</Text>)
        }
        <Text>{value}</Text>
      </Div>
    </View>
  );
}