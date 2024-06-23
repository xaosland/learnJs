// const btns = document.querySelectorAll('button'),
//     wrapper = document.querySelector('.wrapper');
//
//
// // console.log(btns[0].classList.item(1));
// // console.log(btns[0].classList.add("red"));
// // console.log(btns[0].classList.remove("blue"));
// // console.log(btns[1].classList.toggle("blue"));
// //
//
// // btns[1].addEventListener("click", function(){
// //  btns[1].classList.toggle("blue");
// // })
//
//
// wrapper.addEventListener("click", function (e) {
//     if (e.target && e.target.tagName === "BUTTON") {
//         console.log("sdasd")
//     }
// })
//
// // btns.forEach(function (item) {
// //     btn.addEventListener("click", function () {})
// // })
//
// // const btn = document.createElement("button");
// // btn.classList.add("red");
// // wrapper.appendChild(btn);
// //
//
//
//

// let id = setTimeout(function log() {
//     console.log("hello")
//     id = setTimeout(log, 500)
// }, 1000)

function myAnimation() {
    const elem = document.querySelector(".box");
    let pos = 0;
    const id = setInterval(frame, 5);
    function frame() {
        if (pos === 900) {
            clearInterval(id);
            myAnimation();
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}
myAnimation();
// const btn = document.querySelector("button");
// btn.addEventListener("click", myAnimation);