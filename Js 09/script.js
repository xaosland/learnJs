const obj = {
    name: "Mark",
    age: 25,
    isMarried: false,
    city: {
        name: "Moscow",
        country: "Russia",
    },
    makeTest: function () {
        console.log("test")
    }
}


// for (let key in obj) {
//     if (typeof(obj[key]) === "object") {
//         for (let key2 in obj[key]) {
//             console.log(`Свойство2 ${key2} имеет значение ${obj[key][key2]}`);
//         }
//     }
//     console.log(`Свойство ${key} имеет значение ${obj[key]}`);
// }

// console.log(obj["city"]["country"])
//
// const arr = Object.keys(obj)
// console.log(arr.length)

obj.makeTest()


const {city:dota} = obj

console.log(dota)