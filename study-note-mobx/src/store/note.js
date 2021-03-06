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
      'cards': JSON.parse(JSON.stringify(note.cards)),
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
    var json = JSON.stringify({
      'noteId':this.noteId,
      'notes':this.notes
    })
    var a = document.createElement("a");
    var file = new Blob([json], {type:'application/json'});
    a.href = URL.createObjectURL(file);
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
    ).replace(/(\. |:)/g,'')
    a.download = 'note'+datetime+'.json';
    a.click();
  }
  importNote = () => {
    var input=document.createElement('input');
    input.type='file';
    var reader = new FileReader();
    reader.onload = ()=>{
      var json = reader.result
      var note = JSON.parse(json)
      this.noteId = note.noteId
      this.notes = note.notes
    }
    input.onchange= (e) => reader.readAsText(e.target.files[0])
    input.click();
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