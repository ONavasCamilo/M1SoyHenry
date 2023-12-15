/*
    Si nuestro árbol está vacío {
        insertamos la raíz
    }

*/

function BinarySearchTree(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.add = function(value){
    if(value < this.value){
        if(!this.left){
            const newTree = new BinarySearchTree(value)
            // console.log(newTree);
            this.left = newTree
        }else {
            this.left.add(value)
        }
    }else if(value >= this.value) {
        if(!this.right){
            const newTree = new BinarySearchTree(value)
            this.right = newTree
        }else {
            this.right.add(value)
        }
    }
}

BinarySearchTree.prototype.search = function(value){
    if(value === this.value) return this.value;
    if(value < this.value && this.left !== null){
        return this.left.search(value)
    }
    if(value > this.value && this.right !== null){
        return this.right.search(value)
    }else{
        return 'No se encontró el valor'
    }
}

const arbol = new BinarySearchTree(8)

// console.log(arbol);
// arbol.add(4)
// arbol.add(2)
// arbol.add(6)
// arbol.add(7)
// arbol.add(12)
// arbol.add(10)
// arbol.add(14)
// console.log(arbol);

// console.log(arbol.search(50));