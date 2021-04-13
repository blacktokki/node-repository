import {decorate, observable, action } from 'mobx';
import * as Repository from 'repository';
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
      'cards': JSON.parse(JSON.stringify(note.cards)),
      'studyIndices': note.cards.map((card, idx)=> idx)
    }
    this.notes.push(_note);
  }

  handleNote = (idx,note)=> {
    const _note = {
      'id': idx,
      'title': note.title,
      'cards': JSON.parse(JSON.stringify(note.cards)),
    }
    this.notes[idx] = _note
  }

  removeNote = (id) => {
    const note = this.notes.find(note => note.id === id);
    this.notes.remove(note);
  }

  exportNote = () => {
    var datetime = new Date().toLocaleString([],
      {
        'hour12':false,
        'year':'2-digit',
        'month':'2-digit',
        'day':'2-digit',
        'hour':'2-digit',
        'minute':'2-digit',
        'second':'2-digit'
      }
    ).replace(/(\. |:| )/g,'')
    var filename = 'note'+datetime+'.json'
    var data = {
      'noteId':this.noteId,
      'notes':this.notes
    }
    Repository.save(filename, data);
  }
  importNote = () => {
    Repository.load((note)=>{
      this.noteId = note.noteId
      this.notes = note.notes
    });
  }
}

decorate(NoteStore, {
    notes: observable,
    increase: action,
    handleNote: action,
    decrease: action,
    exportNote: action,
    importNote: action
})