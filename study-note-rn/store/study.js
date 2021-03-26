import {decorate, observable, action } from 'mobx';
export default class CounterStore {
  studyCards = [
  ]

  constructor(root){
    this.root = root
  }
  shuffle = () => {
    array = this.studyCards
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.handleStudyCards(JSON.parse(JSON.stringify(card.root.note.notes[index].cards)))
  }

  handleStudyCards = (cards)=>{
    this.cards = cards
  } 
}

decorate(CounterStore, {
    number: observable,
    handleStudyCards: action,
    shuffle: action,
})