
  append(value) {
    const n = new Node(value);//creates a new node to be inserted
    if(this.size === 0){//first we check if the list is empty if it is set that n to the head and tail
      this.header = n;
      this.tail = n;
    }
    else{// 
      const temp = this.tail;//now we save the current last node to a temp variable
      this.tail = n;//reference to the new last node
      temp.next = this.tail;// the next property of the old last node reference the new last node
    }
    this.size++;//once that is all done increase the size of the list
  }

  add(value) {
    let node = new Node(value);//creates a new node
    let current;//stores current node
    if(this.head == null)//if the list is empty add the element and make it head
    this.head = node;
    else{
      current = this.head;//if not make the new node the head
    }
    while (current,next) {// if theres something already there then go through the list till the end and add it.
      current = current.next;
    }
    current.next = node;//add the node
    }
    this.size++;//increase the size of the node

  remove(value) {
    if(!this.head) {///first we check if the head is there
      return null;//if its not there return null
    }
    if (this.head.value === value) {// now we check the value stored in head to the value we want to delete.
      this.head = this.head.next;// if so we reassign the value fo the next node to the value of the head
      return this.length
    }
    let current = this.head// create a temp var "current" and assign it to the value in our "head"
    
    while((current.next!== null) // if the value is not null we will go over the loop and check 
    &&(current.next.value !== value)) {// if not equal to the value we want 
      current = current.next;//keep going until we find it. both conditions must be met
    }

    if (current.next !== null) {// lets just check in case the value we are looking for isnt on the list
      current.next = current.next.next;//this throws an error incase its not there.
      return this.size--;//remove from list
    }
  }
  insert(position, value){
    let current = this.head;

    while((current.next !== null) && (current.next.value != postion)) {//first we need to find the postion
      current = current.next;//with each iteration we reasssign the value of current to the value of current.next we exit the while loop when one of the conditions returns false. meaning we did not find the postion.
    }

    if((!current.next) || (current.next.value !== position)) {//now we check if theres a value in current next or if the current next value does not equal the position.
      return null;//this is an edge case catch
    }else {
      let node = new Node(value);// now we created a new node
      node.next = current.next;// the old switcharoo
      current.next = node;// now the new node is the current node

      return this.size++;//increases the length of the list by 1
    }

  }
