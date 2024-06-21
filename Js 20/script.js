
const saveUser = (logger) => (user) => {
    logger(`Saving user with id: ${user.id}`);
}
const saveAdmin = (logger) => (admin) => {
    logger(`Saving admin with id: ${admin.id}`);
};
const saveBook = (logger) => (book) => {
    logger(`Saving book with id: ${book.id}`);
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






setTimeout(() => {
    console.log('Макротаск 1');
    process.nextTick(() => {
        console.log('Микротаск 1');
    });
}, 0);

setTimeout(() => {
    console.log('Макротаск 2');
}, 0);












