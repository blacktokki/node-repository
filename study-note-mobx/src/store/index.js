import {decorate, observable, action } from 'mobx';
export default class Store {
  number = 0;
  
  increase = () => {
    this.number++;
  }

  decrease = () => {
    this.number--;
  }
}

decorate(Store, {
    number: observable,
    increase: action,
    decrease: action
})