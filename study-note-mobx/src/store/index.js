import CounterStore from './counter'
import NoteStore from './note'
export default class Store {
  constructor(){
    this.counter = new CounterStore(this);
    this.notes = new NoteStore(this);
  }
}