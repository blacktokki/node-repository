import React from 'react';
import { observer,inject } from 'mobx-react';
import NoteElement from './NoteElement';

export default inject("note")(
  observer(({note})=>{
    const results = note.notes.map(
      (item,idx) => (
        <NoteElement
          {...item}
          key={idx}
          idx={idx}
        />
      )
    )

    return (
    <div>
      {results}
      {<button onClick={(event) => {}}>+++</button>}
    </div>
    );
  }
))