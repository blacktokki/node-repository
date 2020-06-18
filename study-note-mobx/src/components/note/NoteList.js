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
      {<button onClick={note.importNote}>불러오기</button>}
      {<button onClick={note.exportNote}>저장하기</button>}
    </div>
    );
  }
))