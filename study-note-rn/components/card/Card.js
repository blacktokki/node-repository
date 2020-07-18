import React,{ useEffect } from 'react';
import { observer,inject } from 'mobx-react';
import { View, Button } from 'react-native';
import CardListTitle from './CardListTitle';
import CardList from './CardList';
import { Section, Div } from  '../commons';

export default inject("router")(
  observer(({router, match})=>{
    const index = match.params.id
    const card = router.root.card

    const save = () => {
      if (index==="new"){
        card.root.note.addNote(card)
        card.handleSaved(true)
        router.push('/note/'+card.id);
      }
      else{
        card.root.note.handleNote(card.id, card)
        card.handleSaved(true)
      }
    }

    useEffect(() => {
      if (index==="new"){
        if (card.id !== undefined){
          card.id = undefined
          card.handleTitle('제목')
          card.handleCards([])
          card.handleChanged(-1)
          card.handleSaved(false)
        }
      }
      else if(index < router.root.note.notes.length){
        if (card.id !== index){
          card.id = index
          card.handleTitle(card.root.note.notes[index].title)
          card.handleCards(JSON.parse(JSON.stringify(card.root.note.notes[index].cards)))
          card.handleChanged(-1)
          card.handleSaved(true)
        }
      }
      else{
        router.push('/');
      } 
    })

    return(
      <Section title={"Card/"+index+(card.saved===true?'[저장됨]':'')}>
        <Div className='row'>
          <Div className='col-12'></Div>
        </Div>
        <CardListTitle/>
        <CardList/>
        <Button onPress={save} title="저장"/>
      </Section>
    )
  })
)