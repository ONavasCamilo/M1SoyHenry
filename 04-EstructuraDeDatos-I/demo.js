class Stack{
    constructor(){
        this.__stack__ = []
    }

    save(info) {
        this.__stack__.push(info)
    }

    delete() { 
        this.__stack__.pop()
    }

    showStack() {
        return console.log(this.__stack__)
    }
}

const newStack = new Stack()

newStack.save(10)
newStack.save(12)
newStack.delete()


newStack.showStack()