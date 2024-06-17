let str = "test";
let strObj = new String(str);

console.log([1,2,3])

const soldier = {
    health: 400,
    armor: 100,
    wings: true,
}

// const john = {
//     health: 100
// }
//
//
// john.__proto__ = soldier;
//
// console.log(john)


const john = Object.create(soldier);


console.log(john)