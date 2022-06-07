class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }


    append(value) {
        let newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
        return this;
    }

    prepend(value) {
        const NewNode = new Node(value)
        NewNode.next = this.head
        this.head = NewNode;
        this.length++;
        return this
    }

    printList() {
        const list = []
        // let current = this.head;
        while (this.head !== null) {
            list.push(this.head.value)
            this.head = this.head.next
        }
        console.log(list)
    }

    insert(index, value) {
        let i = 0;
        let newNode = new Node(value)
        let current = this.head

        if (index >= this.length) {
            return this.append(value)
        }
        const holdNode = this.traversdNode(index - 1)
        current.next = newNode;
        newNode.next = holdNode;
        this.length++;
        return this;
    }

    traversdNode(index) {
        let i = 0;
        let current = this.head
        while (i !== index) {
            current = current.next
            i++
        }
        return current;
    }
    remove(index) {
        if (index >= this.length) {
            return null
        }
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return this.printList()
        }
        const leader = this.traversdNode(index - 1)
        const deleted = leader.next;
        leader.next = deleted.next
        this.length--;
        return this.printList();
    }

    size() {
        return this.length
    }
}

const myLinkedList = new LinkedList(10)

myLinkedList.prepend(2)
myLinkedList.prepend(7)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.insert(2, 99)
myLinkedList.insert(200, 120)

myLinkedList.remove(4)

console.log(myLinkedList.printList())
console.log(myLinkedList.size());