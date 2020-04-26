import {decorate, observable, action } from 'mobx';
import CardStore from './card'
export default class NoteStore {
  constructor(){
    this.notes = [{
        title:"배",
        cards:new CardStore(this)
      }
    ]
  }
  
  increase = () => {
    this.notes.push(
      {
        title:"배"+this.notes.length,
        cards:new CardStore(this)
      }
    );
  }

  decrease = (title) => {
    const note = this.notes.find(note => note.title === title);
    this.notes.remove(note);
  }
}

decorate(NoteStore, {
    notes: observable,
    increase: action,
    decrease: action
})