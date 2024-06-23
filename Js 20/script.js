const saveUser = (logger) => (user) => {
    logger(`Saving user with id: ${user.id}`);
}
const saveAdmin = (logger) => (user) => {
    logger(`Saving admin with id: ${user.id}`);
};
const saveBook = (logger) => (user) => {
    logger(`Saving book with id: ${user.id}`);
};
const logger = (message) => {
    console.info(`LOG:${message}`)
};
const main = () => {
    const userSaver = saveUser(logger);
    const adminSaver = saveAdmin(logger);
    const bookSaver = saveBook(logger);

    userSaver({id: "1"});
    adminSaver({id: "2"});
    bookSaver({id: "3"});
};
main();

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('outerVariable:', outerVariable);
        console.log('innerVariable:', innerVariable);
    }
}
const newFunction = outerFunction('outside');
newFunction('inside');


// Выведет: outerVariable: outside, innerVariable: inside
// В этом примере outerFunction - это функция, которая принимает один аргумент outerVariable и возвращает другую функцию innerFunction.
// innerFunction также принимает один аргумент innerVariable и выводит оба аргумента в консоль.
// Когда мы вызываем outerFunction('outside'), она возвращает innerFunction,
// но при этом сохраняет доступ к переменной outerVariable, которая была передана в outerFunction.
// Это и есть замыкание.
// Затем мы сохраняем результат вызова outerFunction('outside') в переменной newFunction и вызываем newFunction('inside').
// В этот момент innerFunction выводит в консоль оба аргумента: outerVariable,
// который был передан в outerFunction, и innerVariable, который был передан в newFunction.
// Таким образом, мы видим, что innerFunction имеет доступ к переменной outerVariable даже после того,
// как outerFunction завершила свою работу. Это и есть суть замыкания в JavaScript.
//
//


//
//
// function delay(milliseconds) {
// };
// async function main() {
//     console.log(1);
//     await delay(1000);
//     console.log(2)
// }
//
//
//

// setTimeout(() => {
//     console.log("1")
// }, 1000)
// setTimeout(() => {
//     console.log("2")
// }, 4000)
// setTimeout(() => {
//     console.log("3")
// }, 1000)
// setTimeout(() => {
//     console.log("4")
// }, 3000)
//
// console.log(5)
//

// setTimeout(() => {
//     console.log('Макротаск 1');
//     process.nextTick(() => {
//         console.log('Микротаск 1');
//     });
// }, 0);
//
// setTimeout(() => {
//     console.log('Макротаск 2');
// }, 0);
//
//
//
//








