/*
 * Проміси
 */

/*
 * Є функція, яка генерує випадкові числа від 1 до 4.
 * Написати функцію, яка повертає проміс.
 * Зробіть так, щоб згенероване число було із затримкою функції setTimeout в секундах.
 * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */

// const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;
// const number = getRandomNumber();
// const delay = number * 1000;

// const onSuccess = delay => {
//   console.log(`✅ Resolved after ${delay} sec`);
// };
// const onError = delay => {
//   console.log(`❌ Rejected after ${delay} sec`);
// };

// function createPromise(number, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number <= 2) {
//         resolve(number);
//       } else {
//         reject(number);
//       }
//     }, delay);
//   });
// }
// createPromise(number, delay)
//   .then(onSuccess)
//   .catch(onError)
//   .finally(() => {
//     console.log('finally');
//   });

/*
 * Methods:
 * Promise.race(array) - повертає перший успішно виконаний або відхилений проміс, зі значенням чи причиною відхилення цього промісу.
 *
 * Promise.all(array) - повертає проміс, який виконається тоді, коли будуть успішно виконані всі проміси, або відхилено будь-який з них.
 *
 */

/*
 * Зробіть 3 проміси - по одному для кожного фреймворку з масиву.
 * У кожному розташована функція setTimeout із випадковою затримкою від 0 до 2 секунд.
 * Зробити так, щоб проміси і резолвилися, і реджектилися випадково.
 * Нехай кожен проміс своїм результатом повертає цю затримку та ім'я фреймворку, а при помилці ще й текст помилки 'Promise error'.
 */
