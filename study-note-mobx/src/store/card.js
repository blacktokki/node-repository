import {decorate, observable, action} from 'mobx';
export default class CardStore {
  constructor(root){
    this.root = root
    this.title = '제목'
    this.changed = -1
    this.saved = false
    this.cards = [
    ]
    this.is_scroll = false
  }

  handleTitle = (title)=>{
    this.title = title
    this.saved = false
  }

  handleChanged = (idx) =>{
    this.changed = idx
    this.saved = false
  }
  handleSaved = (saved) =>{
    this.saved =saved
  }

  addCard = (idx) =>{
    if (idx===this.cards.length)
      this.is_scroll = true
    this.cards.splice(idx,0,{})
    this.handleCard(idx,"indent",0)
    this.handleCard(idx,"name","")
    this.handleCard(idx,"value","")
  }

  replaceCard= (oldIndex,newIndex)=>{
    const card = {
      'indent':this.cards[oldIndex].indent,
      'name':this.cards[oldIndex].name,
      'value':this.cards[oldIndex].value
    }
    this.removeCard(oldIndex)
    this.addCard(newIndex)
    this.handleCard(newIndex,"indent",card.indent)
    this.handleCard(newIndex,"name",card.name)
    this.handleCard(newIndex,"value",card.value)
  }

  handleCard = (idx,key,value)=> {
    this.cards[idx][key] = value
    this.handleChanged(idx)
  }
  handleCards = (cards)=>{
    this.cards = cards
  } 

  removeCard = (idx) => {
    this.cards.remove(this.cards[idx]);
    this.handleChanged(idx)
  }
}

decorate(CardStore, {
    cards: observable,
    title:observable,
    changed:observable,
    saved:observable,
    handleTitle:action,
    handleChanged:action,
    handleSaved:action,
    addCard: action,
    replaceCard:action,
    handleCard:action,
    handleCards:action,
    removeCard: action
})
