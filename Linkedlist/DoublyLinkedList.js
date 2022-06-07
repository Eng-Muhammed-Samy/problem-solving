class Node {
    constructor(value, Node) {
        this.value = value;
        this.Next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }


    append(value) {
        let newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode;
        this.length++;
        return this
    }

    insert(index, value) {
        let i = 0;
        let newNode = new Node(value)

        if (index >= this.length) {
            return this.append(value)
        }
        const holdNode = this.traversdNode(index - 1)
        const postNode = holdNode.next
        newNode.next = postNode;
        newNode.prev = holdNode;
        holdNode.next = newNode;

        // holdNode = newNode.prev
        // current.next = newNode;
        // newNode.next = holdNode;
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
}

const DLinked = new DoublyLinkedList(10);
DLinked.append(5)
DLinked.prepend(1)
DLinked.insert(0, 4)
console.log(DLinked);