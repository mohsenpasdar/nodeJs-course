// setTimeout(() => {
//     console.log('2 seconds are up!');
// }, 2000);

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lotitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000);
// }

// geocode('tehran', (data) => {
//     console.log(data);
// })

const add = (a, b, callback) => {
    setTimeout(() => {
        const summation = a + b
        callback(summation)
    }, 2000)
}

add(1, 2, (sum) => {
    console.log(sum);
})
