import {decorate, observable, action } from 'mobx';
export default class NoteStore {
  constructor(root){
    this.root = root
    this.noteId = -1
    this.notes = [
    ]
  }
  
  addNote = (note) => {
    this.noteId += 1
    note.id = this.noteId
    const _note = {
      'id': note.id,
      'title': note.title,
      'cards': JSON.stringify(note.cards),
      'len' : note.cards.length
    }
    this.notes.push(_note);
  }

  handleNote = (idx,note)=> {
    const _note = {
      'id': idx,
      'title': note.title,
      'cards': JSON.stringify(note.cards),
      'len' : note.cards.length
    }
    this.notes[idx] = _note
  }

  removeNote = (id) => {
    const note = this.notes.find(note => note.id === id);
    this.notes.remove(note);
  }
}

decorate(NoteStore, {
    notes: observable,
    increase: action,
    handleNote: action,
    decrease: action
})