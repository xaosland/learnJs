let a = 5
b = a

b = b + 5

console.log(b)


const obj = {
    a: 5,
    b: 1
}

// const copy = obj
//
// copy.a = 10
//
// console.log(obj)
// console.log(copy)


function copy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}
console.log(numbers)

const newNumbers = copy(numbers)
newNumbers.a = 120;
newNumbers.c.x = 100;
console.log(newNumbers)

//Obejct.assign

const add = {
    d: 17,
    e: 20
}

console.log(Object.assign(numbers, add))

console.log(numbers)

const clon = Object.assign({}, numbers)
clon.a = "dasd"
console.log(clon)

const oldArray = ['a', 'b', 'c']
const newArray = oldArray.slice()
newArray[1] = 'dwwdawd'

console.log(oldArray)
console.log(newArray)

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']

console.log(internet)

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7]
log(...num)

const array = ['a', 'b']

const newA = [...array, ...video, {...num}]

console.log(newA)

const q = {
    one: 1,
    two: 2
}

const newQ = {
    ...q,
    three: 3
}

console.log(newQ)