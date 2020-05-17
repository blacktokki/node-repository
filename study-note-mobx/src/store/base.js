import {decorate, observable, action } from 'mobx';
export default class BaseStore {
  constructor(root){
    this.root = root
    this.noteId = -1
    this.notes = [
    ]
  }
  
  increase = (note) => {
    this.noteId += 1
    this.note.id = this.noteId
    this.notes.push(note);
  }

  decrease = (id) => {
    const note = this.notes.find(note => note.id === id);
    this.notes.remove(note);
  }
}

decorate(BaseStore, {
    notes: observable,
    increase: action,
    decrease: action
})