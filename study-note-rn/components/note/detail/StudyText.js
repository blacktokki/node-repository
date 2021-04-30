import React,{ useState ,useEffect } from 'react';
import { Text, KeyboardAvoidingView, TextInput } from 'react-native';
import { Div } from '../../commons';

export default (props)=>{
  const [value,setValue] = useState(props.value)
  function handleValue(event){
    const val = event.target ? event.target.value : event
    setValue(val)
  }
  useEffect(() => {
    setValue(props.value);
  },[props.value])
  return (
    <KeyboardAvoidingView onPress={props.onPress} style={{left:'2%', width:'96%'}}>
      <Div className="card">
        <Text>{value}</Text>
        <TextInput 
            style={{backgroundColor:'white', borderColor:'orange', borderBottomWidth:3}} 
            type='text' 
            value={value} 
            onChangeText={handleValue} 
            onEndEditing={() =>{props.onAnswer(value);setValue()}} 
            onSubmitEditing={() =>{props.onAnswer(value);setValue()}}
        />
      </Div>
    </KeyboardAvoidingView>
  );
}