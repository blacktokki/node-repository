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
    let size = Math.min(Math.max(2, cardIds.length),4)
    for (let i=0; i < cardIds.length + size; i++){
      const card = this.cards[(offset + i) % cardIds.length]
      if (card === undefined) break;
      if (this.answerIds.length == 0 && card.isRemain || this.answerIds.length > 0 && this.answerIds.length < size)
        this.answerIds.push(card.id)
    }
    this.questionId = this.answerIds.length > 0 ? this.answerIds[0]: null
    for (let i = this.answerIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      temp = this.answerIds[i];
      this.answerIds[i] = this.answerIds[j];
      this.answerIds[j] = temp;
    }
  }

  onAnswer = (answerId)=>{
    if (answerId == this.questionId){
        if (this.question.isCorrectLast == true)
        this.question.isRemain = false
        this.question.isCorrectOnce = true
        this.question.isCorrectLast = true
    }
    else{
      this.question.isCorrectLast = false
      Vibration.vibrate(250)
    }
    this.shuffle()
  }

  reset = ()=>{
    this.cards.map((card)=>{
      card.isRemain = true
      card.isCorrectOnce = false
      card.isCorrectLast = false 
    })
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
    reset: action
})