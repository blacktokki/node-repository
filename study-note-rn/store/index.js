import CounterStore from './counter'
import NoteStore from './note'
import CardStore from './card'
import StudyStore from './study'
import ScrollStore from './scroll';
export default class Store {
  constructor(){
    this.counter = new CounterStore(this);
    this.note = new NoteStore(this);
    this.card = new CardStore(this);
    this.study = new StudyStore(this);
    this.scroll = new ScrollStore();
  }
}
