const num = 5
console.log("http://localhost:3000/" + num)


const fontSize = 16 + 'px'

let answ = +prompt('Введите число от 1 до 10', "");


let switcher = null;

if (switcher) {
    console.log('Вы ввели число');
}

switcher = 5

if (switcher) {
    console.log('Вы ввели число');
}

let x = 5
alert(++x) // 6
alert(x++) // 5


// [] + false - null + true // NaN

console.log([] + false - null + true)

let y = 1;
let x = y = 2;
// значения присваиваются справа налево
console.log(x)

console.log([] + 1 + 2) //12

alert("1"[0])
// строку можно интерпретировать как массив символов

console.log(2 && 1 && null && 0 && undefined) // null
// null - всегда false

console.log(!!(1 && 2) === (1 && 2)) //false

alert(null || 2 && 3 || 4)
// или запинается на правде ||

const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a == b) // false


alert( +"Infinity" ) // Infinity