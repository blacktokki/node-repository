import {decorate, observable, action} from 'mobx';
import {Card} from 'entity';
export default class CardStore {
  constructor(root){
    this.root = root
    this.title = '제목'
    this.cardId = -1
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
  handleCardId = (idx)=>{
    this.cardId = idx
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
    this.handleCardId(this.cardId + 1)
    this.handleCard(idx,"id", this.cardId)
    this.cards[idx] = new Card(this.cards[idx])
  }

  replaceCard= (oldIndex,newIndex)=>{
    const card = this.cards[oldIndex]
    this.removeCard(oldIndex)
    this.addCard(newIndex)
    this.handleCard(newIndex,"id", card.id)
    this.cards[newIndex] = new Card(card)
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
