class ArrayList {
    #array = []
    constructor(value) {
        this.#array.push(value)
    }
    add(value) {
        this.#array.push(value)
        return this.#array.length
    }
    insert(index, value) {
        if (index < 0) {
            return new Error("index must be positive")
        }
        if (index >= this.#array.length) {
            return this.add(value)
        }
        const newArr = [...this.#array.slice(0, index), value, ...this.#array.slice(index, this.#array.length)]
        this.#array = [...newArr]
        return this.#array.length
    }
    unshift(value) {
        const arr = []
        arr.push(value);
        arr.push(...this.#array)
        this.#array = [...arr]
        return this.#array.length;
    }
    pop() {
        if (this.#array.length === 0) {
            return new Error("Array is Empty")
        }
        const element = this.#array.pop()
        return element[0];
    }
    remove(index) {
        if (this.#array.length === 0) {
            return new Error("Array is Empty")
        }
        if (index >= this.#array.length) {
            return new Error("index out of range")
        }
        const element = this.#array.slice(index, 1);
        return element[0];
    }
    shift() {
        if (this.#array.length === 0) {
            return new Error("Array is Empty")
        }
        const element = this.#array.slice(0, 1);
        return element[0]
    }

    sort() {
        return (this.#array.length > 1) ? this.#array.sort((a, b) => a - b) : (this.#array.length === 1) ? this.#array : new Error('array is Empty');
    }
    reverse() {
        return this.#array.reverse()
    }
    search(element) {
        return this.#array.indexOf(element)
    }

    print() {
        console.log(this.#array)
    }
}
