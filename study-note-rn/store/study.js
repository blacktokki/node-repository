import {decorate, observable, action, computed } from 'mobx';
import { Vibration } from 'react-native';
export default class StudyStore {
  constructor(root){
    this.root = root
    this.currentNoteId = -1
    this.questionIndex = -1
    this.answerIndices = []
  }

  get cards(){
    return this.root.note.notes[this.currentNoteId].cards
  }

  get questions(){
    return this.root.note.notes[this.currentNoteId].questions
  }

  shuffle = () => {
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
    // {idx:idx, isCorrectOnce:false, isCorrectLast:false, isRemain:true}
    if (answerIndex == this.questionIndex){
        if (this.questionIndex.isCorrectLast == true)
          this.questionIndex.isRemain = true
        this.questionIndex.isCorrectOnce = true
        this.questionIndex.isCorrectLast = true
    }
    else{
      this.questionIndex.isCorrectLast = false
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
    questionIndex: observable,
    answerIndices: observable,
    cards: computed,
    questions: computed,
    handleCurrentNoteId: action,
    shuffle: action,
})