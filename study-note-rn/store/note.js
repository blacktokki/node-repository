import {decorate, observable, action } from 'mobx';
import {Note} from 'entity';
import * as Repository from 'repository';
export default class NoteStore {
  constructor(root){
    this.root = root
    this.noteId = -1
    this.notes = [
    ]
  }
  //'questions': note.cards.map((card, idx)=> ({idx:card.idx, isCorrectOnce:false, isCorrectLast:false, isRemain:true}))
  addNote = (note) => {
    this.noteId += 1
    note.id = this.noteId
    this.notes.push(new Note(note))
  }

  handleNote = (idx, note)=> {
    this.notes[idx] = new Note(note)
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
      'notes': this.notes.map((note)=> note.data)
    }
    Repository.save(filename, data);
  }
  importNote = () => {
    Repository.load((note)=>{
      this.noteId = note.noteId
      this.notes = note.notes.map((note)=> new Note(note))
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