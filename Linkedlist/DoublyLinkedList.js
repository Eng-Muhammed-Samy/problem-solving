class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    // print all value of the nodes
    print() {
        const list = [];
        let currentNode = this.head
        while (currentNode !== null) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return list;
    }
    // add to the last of linked list
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    // add to the begining of linked list
    repend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    //insert at any index 
    insert(index, value) {
        if (index < 0) {
            return "index must by positive number"
        }
        if (index === 0) {
            return this.repend(value)
        }

        if (index === this.length - 1 || index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value)
        const leader = this.traverse(index);
        const holdNode = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = holdNode;
        holdNode.prev = newNode;
        this.length++;
        // console.log(this)
        return this;
    }
    // delete element from any index
    delete(index) {
        if (index === 0) {
            return this.shift()
        }
        if (index === this.length - 1) {
            return this.pop();
        }

        if (index < 0 || index >= this.length) {
            return "index out of range"
        }
        const beforeDeleted = this.traverse(index - 1);
        const deleted = beforeDeleted.next;
        const afterDeleted = deleted.next;
        beforeDeleted.next = afterDeleted;
        afterDeleted.prev = beforeDeleted;
        deleted.prev = deleted.next = null;
        this.length--;
        return deleted.value;
    }
    // get node by index
    traverse(index) {
        let i = 0;
        let currentNode = this.head
        // console.log(currentNode);
        while (i !== index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    }
    // delete from the end of linked list
    pop() {
        const deleteNode = this.tail;
        const beforeDeleted = deleteNode.prev
        beforeDeleted.next = null;
        this.tail = beforeDeleted;
        deleteNode.prev = deleteNode.next = null;
        this.length--;
        return deleteNode.value;
    }
    // delete from the begaining of linked list
    shift() {
        const deleteNode = this.head;
        const afterDeleted = deleteNode.next
        this.head = afterDeleted;
        // deleteNode.next = deleteNode.prev = null
        this.length--;
        return deleteNode.value
    }

    reverse() {
        const arr = []
        let currentNode = this.tail
        while (currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.prev
        }
        return arr
    }

    sort() { }
    // get value by index
    search(index) {
        if (index > this.length - 1 || index < 0) {
            return new Error("index out of range")
        }
        const nodeValue = this.traverse(index)
        return nodeValue.value;
    }
}

const list = new DoublyLinkedList(5);
list.append(10)
list.append(15)
list.repend(1)
list.repend(2)
list.insert(2, 7)
console.log(list.pop()) // --> [ 2, 1, 5, 10]
console.log(list.shift());
// console.log(list.delete(1))
// console.log(list.delete(1))
// console.log(list.search(-1));
console.log(" print", list.print())
console.log(" revers", list.reverse());
// list.traverse(4)