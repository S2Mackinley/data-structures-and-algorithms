"use strict";

const Node = require("./node.js");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    let current = this.head;
    let newNode = new Node(value);
      this.head = newNode;
      return this;
    } else {
    while(current.next) {
      current = current.next;
    }
    current.next = newNode;
    return this;
  }

  insertBefore(value, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);
  if (!this.includes(value)) {
    return false;
  }else {
    while(current.next.value !== value) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;

    return this;

  }
  }

  insertAfter(value, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);
    let nextNode = null;

    while(current.value !== value) {
      current = current.next;
      nextNode = current.next;
    }

    current.next = newNode;
    newNode.next = nextNode;

    return this;
  }

  includes(value) {
    let thisNode =this.head;//this node means this.head
    while(thisNode) {
      if (thisNode.value === value) {//if the value is in there then return true
        return true;
      }
      thisNode = thisNode.next;//
    }
    return false;//return false if you cant find it
  }

  insert(value) {
  let node = new Node(value);

  node.next = this.head;

  this.head = node;

  return this;
  }

  toString() {
    let data = '';//string to save data from our node
    let current = this.header;//created current to start at the header
    while(current != null ){// well keep going until current is equal to null if current is null then there are no nodes left in the list
      data = data + current.data + ""; //saves the data at current node in a string
      current = current.next;//now we go to the next node
    }
    return data;// now we return the data
  }
}
module.exports = LinkedList;


