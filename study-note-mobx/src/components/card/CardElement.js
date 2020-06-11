import React,{ useState ,useEffect } from 'react';
import {SortableElement} from 'react-sortable-hoc';

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
    <div>
      <button onClick={(event) => {handleIndent(1-indent);}}>ㄴㄴㄴ</button>
      <button onClick={(event) => {props.onCreate(props.idx);}}>+++</button>
      {
        indent>0 ?
        (<div>ㄴ</div>) :
        null
      }
      <div className="card card-new">
        <h4> {props.idx+1}</h4>
        {
          indent>0 ?
          null :
          (<input type='text' value= {name}  onChange={handleName}/>)
        }
        <input type='text' value={value} onChange={handleValue}/>
        <button onClick={(event) => {props.onRemove(props.idx);}}>---</button>
      </div>
    </div>
  );
})