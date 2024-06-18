
const myDiv = document.getElementsByTagName('button')[2];

console.log(myDiv)

const newTast = document.querySelectorAll("article")

console.log(newTast)

newTast.forEach(item => {
    console.log(item)
})

const news = function () {
    const newDiv = document.createElement('div');
    // Здесь вы можете добавить атрибуты, стили или содержимое для нового div-элемента
    // Например:
    newDiv.textContent = 'This is my new div!'
    document.body.appendChild(newDiv);
}
