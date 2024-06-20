
const filter = (array, callback) =>{
    let result = []
    for(let i=0; i< array.length; i++){
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}
const isEven = (num) =>{
    return num > 5;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filter(numbers, isEven);
console.log(evenNumbers)


