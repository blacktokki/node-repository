import {decorate, observable, action} from 'mobx';
export default class NoteStore {
  constructor(root){
    this.root = root
    this.title = '제목'
    this.changed = -1
    this.cards = [
    ]
    this.is_scroll = false
  }

  handleTitle = (title)=>{
    this.title = title
  }

  handleChanged = (idx) =>{
    this.changed = idx
  }

  addCard = (idx) =>{
    if (idx===this.cards.length)
      this.is_scroll = true
    this.cards.splice(idx,0,[{}])
    this.handleCard(idx,"name","")
    this.handleCard(idx,"value","")
  }

  handleCard = (idx,key,value)=> {
    this.cards[idx][key] = value
    this.handleChanged(idx)
  }

  removeCard = (idx) => {
    this.cards.remove(this.cards[idx]);
  }
}

decorate(NoteStore, {
    cards: observable,
    title:observable,
    changed:observable,
    handleTitle:action,
    handleChanged:action,
    addCard: action,
    handleCard:action,
    removeCard: action
})
