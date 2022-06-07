class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastElement = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--
        return lastElement;
    }

    delete(index) {
        const deleted = this.data[index]
        this.shiftItems(index)
        return deleted
    }

    shiftItems(index) {
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }
}
const arr = new MyArray()
arr.push("ahmed");
arr.push(2)
console.log(arr.delete(1));
console.log(arr)