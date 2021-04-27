"use strict";

const LinkedList = require("../lib/linkedlist.js");

describe("Linked List", () => {
  it("Can successfully instantiate an empty linked list", () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it("Can successfully add a node at the head", () => {
    const ll = new LinkedList();
    ll.insert('20');
    expect(ll.head.value).toEqual('20');
    expect(ll.head.next).toBeNull();

  });

  it("Can successfully add multiple nodes to the end of a linked list", () => {
    const ll = new LinkedList();
    ll.insert("1");
    ll.insert('2');
    expect(ll.head.value).toEqual('2');
    expect(ll.head.next).toEqual({next: null, value: "1"});
  });

  it("Can successfully insert a node before a node located in the middle of a linked list", () => {
    const ll = new LinkedList();
    ll.append('1');
    ll.append('2');
    ll.append('3');
    ll.append('4');
    ll.append('5');
    ll.insertBefore('3', '17');
    let expected =
      "{1} -> {2} -> {17} -> {3} -> {4} -> {5} -> NULL";
    expect(ll.toString()).toEqual(expected);
  });

  xit("Can successfully insert a node before the first node of a linked list", () => {

  });

  // it("Can successfully insert after a node in the middle of the linked list", () => {

  // });
  // it("Can successfully insert a node after the last node of the linked list", () => {

  // });

});
