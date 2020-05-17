import React from 'react';
import { observer,inject } from 'mobx-react';

export default inject('note')(
  observer(({note})=>{
    console.log(note.title)
    function handleTitle(event){
      note.handleTitle(event.target.value)
    }
    return (
      <div className="card title">
        <input type='text' value={note.title}  onChange={handleTitle}/>
        {note.title}
      </div>
    )
  }
));