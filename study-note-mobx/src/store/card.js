import {decorate, observable, action } from 'mobx';
export default class CardStore {
  constructor(){
    this.cards = [
      {
        name:"키",
        value:"벨류"
      },
    ]
  }
  
  increase = () => {
    this.cards.push(
      {
        name:"키"+this.cards.length,
        value:"벨류"+this.cards.length
      }
    );
  }

  decrease = (name) => {
    const card = this.cards.find(card => card.name === name);
    this.cards.remove(card);
  }
}

decorate(CardStore, {
    cards: observable,
    increase: action,
    decrease: action
})