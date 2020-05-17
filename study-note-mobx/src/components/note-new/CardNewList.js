import React, {useRef, useEffect } from 'react';
import { observer,inject } from 'mobx-react';
import CardNew  from './CardNew';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
const useMountEffect = (fun) => useEffect(fun, [])

export default inject("note")(
  observer(({note})=>{
    const myRef = useRef(null)
    useMountEffect(() => scrollToRef(myRef)) // Scroll on mount
    
    const results = note.cards.map(
      (card,idx) => {
        //console.log(card);
        return(
        <CardNew 
          {...card}
          key={idx}
          idx={idx}
          onCreate={note.addCard}
          onRemove={note.removeCard}
          onHandle={note.handleCard}
        />
        );
      }
    );

    return (
    <div data-changed={note.changed}>
      {results}
      <button ref={myRef} onClick={(event) => {/*scrollToRef(myRef);*/note.addCard(note.cards.length)}}>+++</button>
    </div>

    );
  }
))