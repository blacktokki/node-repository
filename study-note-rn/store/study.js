import {decorate, observable, action, computed } from 'mobx';
import { Vibration } from 'react-native';
export default class StudyStore {
  constructor(root){
    this.root = root
    this.currentNoteId = -1
    this.questionId = -1
    this.answerIds = []
    this.shuffleToggle = false
  }

  get cards(){
    const note = this.root.note.notes[this.currentNoteId]
    return note? note.cards: []
  }

  get question(){
    return this.cards.find((card)=> card.id==this.questionId)
  }

  get answers(){
    return this.answerIds.map((id)=> this.cards.find((card)=> card.id==id))
  }
  get remains(){
    return this.shuffleToggle !==undefined?this.cards.filter((card)=>card.isRemain && !card.isCorrectOnce):[]
  }
  get correctOnces(){
    return this.shuffleToggle !==undefined?this.cards.filter((card)=>card.isRemain && card.isCorrectOnce):[]
  }
  get notRemains(){
    return this.shuffleToggle !==undefined?this.cards.filter((card)=>!card.isRemain):[]
  }

  shuffle = () => {
    this.shuffleToggle = !this.shuffleToggle
    const cardIds = this.cards.map((card)=>card.id)
    for (let i = cardIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      temp = cardIds[i];
      cardIds[i] = cardIds[j];
      cardIds[j] = temp;
    }
    this.answerIds = []
    let offset = Math.floor(Math.random() * cardIds.length)
    for (let i=0; i < cardIds.length; i++){
      const id = (offset + i) % cardIds.length
      const card = this.cards.find((card)=> card.id==id)
      if (this.answseIds == 0 && card.isRemain || this.answerIds.length < Math.min(Math.max(2, cardIds.length),4))
        this.answerIds.push(card.id)
    }
    this.questionId = this.answerIds[0]
    for (let i = this.answerIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      temp = this.answerIds[i];
      this.answerIds[i] = this.answerIds[j];
      this.answerIds[j] = temp;
    }
  }

  onAnswer = (answerId)=>{
    const questionIdx = this.cards.findIndex((card)=>card.id==this.questionId)
    const card = this.cards[questionIdx]
    if (answerId == this.questionId){
        if (card.isCorrectLast == true)
          card.isRemain = false
        card.isCorrectOnce = true
        card.isCorrectLast = true
    }
    else{
      card.isCorrectLast = false
      Vibration.vibrate(250)
    }
    this.shuffle()
  }

  handleCurrentNoteId = (currentNoteId)=>{
    this.currentNoteId = currentNoteId
  }
}

decorate(StudyStore, {
    currentNoteId: observable,
    questionId: observable,
    answerIds: observable,
    shuffleToggle: observable,
    cards: computed,
    question: computed,
    answers: computed,
    remains: computed,
    correctOnces:computed,
    notRemains:computed,
    handleCurrentNoteId: action,
    shuffle: action,
})