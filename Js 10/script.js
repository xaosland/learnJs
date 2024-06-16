const arr2 = [2, 13, 26, 8, 10];

// arr2.pop();
// arr2.push(6);
// arr2.shift();
// arr2.unshift(10);
//
// console.log(arr2);
//
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i])
// }
//
// for (let value of arr2) {
//     console.log(value)
// }

// arr2.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// })

// const str = prompt("", "");
// const products = str.split(":  ");
// products.sort();
// console.log(products.join('; '));

arr2.sort(compareNum);
console.log(arr2);

function compareNum(a, b) {
    return a - b;
}