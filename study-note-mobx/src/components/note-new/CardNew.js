import React from 'react';

export default (props)=>{
  function handleName(event){
    props.onHandle(props.idx,"name",event.target.value)
  }
  function handleValue(event){
    props.onHandle(props.idx,"value",event.target.value)
  }

  return (
    <div>
      <button onClick={(event) => {props.onCreate(props.idx);}}>+++</button>
      <div className="card card-new">
        <h4> {props.idx+1}</h4>
        <input type='text' value= {props.name}  onChange={handleName}/> {props.name} 
        <input type='text' value={props.value} onChange={handleValue}/>{props.value}
        <button onClick={(event) => {props.onRemove(props.idx);}}>---</button>
      </div>
      
    </div>
  );
}