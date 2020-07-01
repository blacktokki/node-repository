import React from 'react';
import { observer,inject } from 'mobx-react';
import NoteElement from './NoteElement';
import { View, Button } from 'react-native';

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
    <View>
      {results}
      {<Button onPress={note.importNote} title="불러오기"/>}
      {<Button onPress={note.exportNote} title="저장하기"/>}
    </View>
    );
  }
))