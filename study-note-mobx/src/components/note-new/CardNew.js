import React,{ useState ,useEffect } from 'react';
import {SortableElement} from 'react-sortable-hoc';

export default SortableElement((props)=>{
  const [name,setName] = useState(props.name)
  const [value,setValue] = useState(props.value)
  
  useEffect(() => {
    setName(props.name);
    setValue(props.value);
  },[props.name,props.value])


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
      <button onClick={(event) => {props.onCreate(props.idx);}}>+++</button>
      <div className="card card-new">
        <h4> {props.idx+1}</h4>
        <input type='text' value= {name}  onChange={handleName}/>{/*props.name*/} 
        <input type='text' value={value} onChange={handleValue}/>{/*props.value*/}
        <button onClick={(event) => {props.onRemove(props.idx);}}>---</button>
      </div>
    </div>
  );
})