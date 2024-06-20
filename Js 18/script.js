const box = document.querySelector(".box"),
    btn = document.getElementsByTagName("button"),
    overlay = document.querySelector(".overlay");


box.style.backgroundColor = "red";

btn[0].style.borderRadius = "20px";


const div = document.createElement("div");

const arr = ["color", "black", "blue", "red"]
const text = document.createTextNode(arr.join(" "));

div.classList.add("black");

box.innerHTML=(text.textContent);

btn[0].prepend(text)


div.innerText = (text.textContent);

div.insertAdjacentHTML("beforebegin", "<h1>Hello</h1>");