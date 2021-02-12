"use strict";

let LLData = require("./LLData");

class LList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  add(value) {
    let node = new LLData(value);
    if (this.length ===0){
        this.head = node;
    }else{
        let current = this.head;
        while (current.next){
            current = current.next;
        }
        current.next = new LLData(value);
    }
    this.length++;
  }
  [Symbol.iterator] = () => {
    return {
      current: this.next,
      structure: this.data,
      next() {
        if (this.structure[this.current] == undefined) {
          return { done: true };
        } else {
          return { done: false, value: this.structure[this.current++] };
        }
      },
    };
  };
  getFirst(){

  }
  getLast(){

  }
  addFromArray(array){

  }
  remove(value){

  }
  removeAll(){

  }
  contains(){

  }
  clear(){

  }
  count(){

  }
  toString(){

  }
  getIterator(){

  }
  filter(callback){

  }
}

module.exports = {LList};

