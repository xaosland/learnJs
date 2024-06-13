function showFirstMessage(text) {
    console.log(text);
    let num = 50;
}

function calc(a, b) {
    return (a + b);
}

function retVar() {
    let num = 52;
    return num;
}

const anotherNum = retVar();

showFirstMessage("Hello world!");

console.log(anotherNum);

// function Expression
const logger = function() {
    console.log("Hello");
}
const arrowFunction = () => {
    console.log("Hello");
}