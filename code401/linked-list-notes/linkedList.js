'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value){
    const node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  traverese(){
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next
    }
  }

  travereseWithCallback(callback){
    let current = this.head;
    while(current){
      callback(current.value);
      current = current.next
    }
  }


}

let list = new LinkedList();
console.log(list);

list.add(1);

list.traverese();
list. traverseWithCallback(logger);


function logger(value){
  console.log(`Node Value: ${value}`);
}
