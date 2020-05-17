import CounterStore from './counter'
import BaseStore from './base'
import NoteStore from './note'
export default class Store {
  constructor(){
    this.counter = new CounterStore(this);
    this.base = new BaseStore(this);
    this.note = new NoteStore(this);
  }
}
