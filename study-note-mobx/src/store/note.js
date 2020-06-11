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
    this.notes.push(note);
  }

  handleNote = (idx,note)=> {
    this.notes[idx] = note
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