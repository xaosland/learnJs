if (4 === 9) {
    console.log('4 is equal to 9');
} else {
    console.log('4 is not equal to 9');
}

const num = 66;
// if (num < 49) {
//     console.log('Too low');
// } else if (num > 100) {
//     console.log('Too high');
// } else {
//     console.log('Just right');
// }
//
//
// (num === 50)? console.log('50') : console.log('Not ')

switch (num) {
    case 49:
        console.log('Too low');
        break;
    case 100:
        console.log('Too high');
        break;
    case 50:
        console.log('Just right');
        break;
    default:
        console.log('Not ')
        break;
}