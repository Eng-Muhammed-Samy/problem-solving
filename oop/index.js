class A {
    constructor(x) {
        this.x = x
        console.log("A class")
    }
}

class B extends A {
    constructor(x, y) {
        super(x)
        this.y = y
        console.log("B class")
    }
}

class C extends B {
    constructor(x, y, z) {
        super(x, y)
        this.z = z
        console.log("C class")
    }
}

const c = new C(5, 3, 4)