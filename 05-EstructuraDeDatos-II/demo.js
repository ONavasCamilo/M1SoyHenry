// * Listas enlazadas
class Node {
    constructor(info){
        this.value = info;
        this.next = null
    }
}

class List {
    constructor(){
        this.head = null
        this._length = 0
    }

    // * Agregar nodos a la lista
    add(data){
        let node = new Node(data)
        let current = this.head;

        // ? Si la lista está vacía...
        if(current === null){
            this.head = node;
            this._length++;
            return node;
        }

        // ? si la lista ya tiene un nodo o más nodos...
        while(current.next){
            current = current.next
        }
        current.next = node
        this._length++;
        return node
    }

    getAll(){
        let current = this.head;

        // ? Si  la lista está vacía
        if(!current) return console.log('La lista está vacía');

        // ? Si la lista tiene nodos...

        let arr = []

        while(current){
            console.log(current.value);
            arr.push(current.value)
            current = current.next
        }

        console.log(arr);
        return arr
    }
}

const lista = new List()
// theo, kiro y draco - Lucy

console.log(lista);
lista.add('theo')
console.log(lista);
lista.add('kiro')
lista.add('draco')
console.log(lista);
lista.add({nombre:'Lucy', tipo:'perrito'})
console.log(lista);

console.log(lista.getAll());


// * Hash table

// ? colisiones
// ? solución = dividir el espacio asignado...con [] o {}
const objeto = {
    color:'rojo',
    num:1
}

const objeto2 = {
    color:'azul',
    num:2
}

function hash(){
    return objeto2.color.length // 4
}

console.log(hash())

const longitud = 20;
const contenedor = [];

const persona1 = {
    dni:123456,
    nombre: 'Angel',
    items: 'lentes'
}

const persona2 = {
    dni:456789,
    nombre: 'Camilo',
    items: 'mochila'
}

function hashLocker(dni, nombre){
    return (nombre.length + dni) % longitud
}

let indice = hashLocker(persona1.dni, persona1.nombre)
contenedor[indice] = persona1.items

console.log(indice);

let indice2 = hashLocker(persona2.dni, persona2.nombre)
contenedor[indice2] = persona2.items
console.log(indice2);

console.log(contenedor);



const encontrar = hashLocker(persona2.dni,persona2.nombre)

console.log(contenedor[encontrar]);

 