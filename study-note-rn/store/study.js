import {decorate, observable, action, computed } from 'mobx';
import { Vibration } from 'react-native';
export default class StudyStore {
  constructor(root){
    this.root = root
    this.currentNoteId = -1
    this.questions = []
    this.questionIndex = -1
    this.answerIndices = []
  }

  get cards(){
    return this.root.note.notes[this.currentNoteId].cards
  }

  shuffle = () => {
    this.questions = this.questions.map((question, idx)=>question)    
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
    this.answerIndices = []
    let offset = Math.floor(Math.random() * this.questions.length)
    for (let i=0; i < this.questions.length; i++){
      const idx = (offset + i) % this.questions.length
      if (this.answerIndices.length == 0 && this.questions[idx].isRemain || this.answerIndices.length < Math.min(Math.max(2, this.questions.length),4))
        this.answerIndices.push(this.questions[idx].idx)
    }
    this.questionIndex = this.answerIndices[0]
    for (let i = this.answerIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      temp = this.answerIndices[i];
      this.answerIndices[i] = this.answerIndices[j];
      this.answerIndices[j] = temp;
    }
  }

  onAnswer = (answerIndex)=>{
    if (answerIndex == this.questionIndex)
      this.shuffle()
    else
      Vibration.vibrate(250)
  }

  handleCurrentNoteId = (currentNoteId)=>{
    this.currentNoteId = currentNoteId
    this.questions = this.cards.map((value, idx)=> ({idx:idx, isRemain:true}))
  }
}

decorate(StudyStore, {

    currentNoteId: observable,
    questions: observable,
    questionIndex: observable,
    answerIndices: observable,
    cards: computed,
    handleCurrentNoteId: action,
    shuffle: action,
})