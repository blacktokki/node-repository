import {decorate, observable, action} from 'mobx';
export default class NoteStore {
  constructor(root){
    this.root = root
    this.id = -1
    this.title = '제목'
    this.cardId= 0
    this.cardEditId = 0
    this.updated = 1
    this.cards = [
      {
        id:0,
        name:"키",
        value:"벨류",
      },
    ]
  }
  
  createCard = () => {
    this.cardId += 1
    this.updated += 1
    this.cards.push(
      {
        id: this.cardId,
        name:"키"+this.cardId,
        value:"벨류"+this.cardId,
      }
    );
  }

  deleteCard = (id) => {
    const card = this.cards.find(card => card.id === id);
    this.cards.remove(card);
  }
}

decorate(NoteStore, {
    updated: observable,
    title: observable,
    cards: observable,
    createCard: action,
    deleteCard: action
})
