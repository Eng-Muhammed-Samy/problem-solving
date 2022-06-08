class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    print() {
        const list = []
        while (this.head !== null) {
            list.push(this.head.value);
            this.head = this.head.next;
        }
        return list
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    repend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        if (index < 0) {
            return "index must be positive number"
        }

        if (index === 0) {
            return this.repend(value)
        }

        if (index === this.length - 1 || index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value);
        const leaderNode = this.traverse(index - 1)
        const lastNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = lastNode;
        this.length++;
        return this;
    }

    // delete from the end of the linked list
    pop() {
        const deleted = this.traverse(this.length - 2);
        deleted.next = null;
        this.length--;
        return this;
    }

    //delete from start
    shift() {
        const deleted = this.head;
        this.head = this.head.next;
        deleted.next = null;
        this.length--;
        return this;
    }

    delete(index) {
        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop()
        }
        const leader = this.traverse(index - 1);
        const deleted = leader.next;
        const hold = deleted.next;
        deleted.next = null;
        leader.next = hold;
        this.length--;
    }

    traverse(index) {
        let i = 0;
        let currentNode = this.head;
        while (i !== index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    }

    revers() {

    }

    sort() {

    }

    search(index) {
        const value = this.traverse(index);
        return value.value;

    }
}

const link = new LinkedList(5)

link.repend(3)
link.repend(2)
link.append(25)
link.append(30)
link.insert(2, 10)
link.insert(2, 11)
// link.pop()
// link.pop()
// link.shift()
// link.shift()
// link.delete(1)
// link.delete(0)
console.log(link.search(5))
console.log(link.print());