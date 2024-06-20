const btn = document.querySelector("button");


const deleteXT  = (e) => {
    e.target.remove();
}

btn.addEventListener("click", deleteXT)






const increment = () => {
    let counter = 0;
    return () => {
    counter += 1;
    }}

const cl = increment;
console.log(cl());
console.log(cl());
console.log(cl());