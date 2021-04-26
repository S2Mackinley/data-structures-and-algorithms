
'use strict';

const LL = require('../lib/linkedlist.js');

describe('Linked List', () => {
  it('should successfully instantiate an empty linked list', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should properly insert into the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.insert(first);
    expect(list.head.value).toEqual(1);

    list.insert(second);
    list.insert(3);
    list.insert(4);

    console.log(list);
  });

  it('should show head points to first node in list', () => {
    let list = new LL(); // starts new linked list
    let first = 1; // sets variable value to 1
    let second = 2; // sets variable value to 2
    list.insert(first); // creates first node, sets value to variable 'first'
    list.insert(second); // creates second node, sets value to variable 'first'

    expect(list.head.value).toEqual(1); // tests value of head node
  });

  it('should show properly inserting multiple nodes into the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;
    list.insert(first);
    list.insert(second);
    list.insert(third);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
  });

  it('will return true when finding a value that exists in the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    list.insert(first);
    list.insert(second);
    expect(list.includes(2)).toBe(true);
  });

  it('will return false when searching for non existing node value', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    list.insert(first);
    list.insert(second);
    expect(list.includes(3)).toBe(false);
  });

  it('can properly return a collection of all the values in linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;
    list.insert(first);
    list.insert(second);
    list.insert(third);
    expect(list.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });

});