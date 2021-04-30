import React,{ useState ,useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Platform} from 'react-native';
import CardFlip from 'react-native-card-flip';
import { Div } from '../../commons';


export default (props)=>{
  const [indent,setIndent] = useState(props.indent)
  const [name,setName] = useState(props.name)
  const [value,setValue] = useState(props.value)
  const cardRef = useRef()
  const margin = Platform.OS == 'web' && props.screenLength>2? 40 : 20
  useEffect(() => {
    setIndent(props.indent);
    setName(props.name);
    setValue(props.value);
  },[props.indent,props.name,props.value])
  
  return (
    <View style={{marginHorizontal:margin}}>
      {/*
      <View style={{width:props.width-margin * 2, minHeight:70}}>
        <TouchableOpacity onPress={()=>{}}>
          <Div className="card">
            <Text style={{textAlign:'center', fontWeight:"700", fontSize:32,}}> {name}</Text>
          </Div>
        </TouchableOpacity>
      </View>
      */}
      <CardFlip style={{width:props.width-margin * 2, minHeight:70}} ref={cardRef} flipDirection='x' duration={500}>
        <TouchableOpacity onPress={() => cardRef.current.flip()}>
          <Div className="card">
            <Text style={{textAlign:'center', fontWeight:"700", fontSize:32,}}> {name}</Text>
          </Div>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => cardRef.current.flip()}>
          <Div className="card">
          <Text style={{textAlign:'center', fontWeight:"700", fontSize:32,}}> {value}</Text>
          </Div>
        </TouchableOpacity>
      </CardFlip>
    </View>
  );
}