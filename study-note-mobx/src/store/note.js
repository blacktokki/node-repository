import {decorate, observable, action} from 'mobx';
export default class NoteStore {
  constructor(root){
    this.root = root
    this.title = '제목'
    this.changed = {}
    this.cards = [
    ]
  }

  handleTitle = (title)=>{
    this.title = title
  }

  handleChanged = () =>{
    this.changed = {}
  }

  addCard = (idx) =>{
    this.cards.splice(idx,0,[{}])
    this.handleCard(idx,"name","")
    this.handleCard(idx,"value","")
  }

  handleCard = (idx,key,value)=> {
    this.cards[idx][key] = value
    this.handleChanged()
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
