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

    console.log(movieDB)

    function showMovies(films, parent) {
        parent.innerHTML = "";
        movieDB.movies.forEach((item, index) => {
            parent.innerHTML += `<li class="promo__interactive-item">${index + 1} ${item}<div id="delete" class="delete"></div></li>`
        })

        const deleteBtns = document.querySelectorAll(".delete");
        deleteBtns.forEach((item, index) => {
            item.addEventListener("click", () => {
                item.parentElement.remove();
                movieDB.movies.splice(index, 1);
                showMovies(movieDB.movies, list);
            });
        });
    }

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const check = checkbox.checked;
        const newFilm = addInput.value;
        if (newFilm) {
            movieDB.movies.push(newFilm);
            showMovies(movieDB.movies, list);
        }

    })


    showMovies(movieDB.movies, list);
})

