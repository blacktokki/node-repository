import {decorate, observable, action } from 'mobx';
export default class StudyStore {
  cards = []
  questionIndices = []
  answerIndex = 0

  constructor(root){
    this.root = root
  }
  shuffle = () => {
    this.cards = this.cards.map((num, idx)=>num)
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    this.answerIndex = Math.floor(Math.random() * this.questionIndices.length)
  }

  handleCards = (cards)=>{
    this.cards = cards
    this.questionIndices = this.cards.map((num, idx)=>idx)
  }
}

decorate(StudyStore, {
    cards: observable,
    questionIndices: observable,
    answerIndex: observable,
    handleCards: action,
    shuffle: action,
})