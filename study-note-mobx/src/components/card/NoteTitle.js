import React from 'react';
import { observer,inject } from 'mobx-react';

export default inject('card')(
  observer(({card})=>{
    console.log(card.title)
    function handleTitle(event){
      card.handleTitle(event.target.value)
    }
    return (
      <div className="card title">
        <input type='text' value={card.title}  onChange={handleTitle}/>
        {card.title}
      </div>
    )
  }
));