// Мікро процеси мають БІЛЬШИЙ пріорітет
// 1. Promise
// 2. Observer

// Макро процеси мають МЕНЬШИЙ пріорітет
// 1. setTimeout
// 2. setInterval
// 3. setImmediate
// 4. requestAnimationFrame

// console.log('1');

// setTimeout(() => {
//     console.log('2')
// }, 0)
// Promise.resolve("3").then(value => console.log(value))

// console.log('4');

// // Відповідь 1,4,3,2
