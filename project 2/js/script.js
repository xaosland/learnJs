document.addEventListener("DOMContentLoaded", () => {


    const bg = document.querySelector(".promo__bg"),
        list = document.querySelector(".promo__interactive-list"),
        genre = document.querySelector(".promo__genre"),
        addForm = document.querySelector("form.add"),
        addInput = document.querySelector(".adding__input"),
        checkbox = document.querySelector("[type='checkbox']"),
        promo = document.querySelector(".promo__adv"),
        images = promo.querySelectorAll("img");


    bg.style.backgroundImage = "url('img/bg.jpg')";
    genre.textContent = "Драма";

    function delImg(images) {
        images.forEach((item) => {
            item.remove();
        })
    }

    delImg(images)

    let movieDB = {
        movies: [
            "Логан 2",
            "Лига справедливости 2 ",
            "Ла-ла лэнд 2",
            "Одержимость 2",
            "Скотт Пилигрим против..."
        ]
    };

    function showMovies(films, parent) {
        parent.innerHTML = "";
        movieDB.movies.forEach((item, index) => {
            parent.innerHTML += `<li class="promo__interactive-item">${index + 1} ${item}<img src="./icons/trash.png" alt="trash" width="20px"/></li>`
        })
    }

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const target = addInput.value;
        movieDB.movies.push(target);

        showMovies(movieDB.movies, list);


        const check = checkbox.checked;
        if (check) {
            document.body.style.backgroundColor = "red";
        }
    })
    showMovies(movieDB.movies, list);
})

