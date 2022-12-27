const namesOfDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

Date.now();

const day = document.querySelector('.date-day');
const dayOfMonth = document.querySelector('.date');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');
const digitalClock = document.querySelector('.digital-clock');
const arrowHours = document.querySelector('.clock-hours__arrow');
const arrowMinutes = document.querySelector('.clock-minutes__arrow');
const arrowSeconds = document.querySelector('.clock-seconds__arrow');

// setInterval(() => {
//   const currentTime = new Date();
//   const timeDay = namesOfDay[currentTime.getDay()];
//   const timeDate = currentTime.getDate();
//   const timeMonth = namesOfMonth[currentTime.getMonth()];
//   const timeYear = currentTime.getFullYear();
//   const timeHours = currentTime.getHours();
//   const timeMinutes = currentTime.getMinutes();
//   const timeSeconds = currentTime.getSeconds();
//   const totalTime = `Поточний час:
//   ${timeHours.toString().padStart(2, '0')}:
//   ${timeMinutes.toString().padStart(2, '0')}:
//     ${timeSeconds.toString().padStart(2, '0')} `;

//   day.textContent = timeDay;
//   dayOfMonth.textContent = timeDate;
//   month.textContent = timeMonth;
//   year.textContent = timeYear;
//   digitalClock.textContent = totalTime;

//   const forSeconds = timeSeconds * (360 / 60);
//   const forMinutes = timeMinutes * (360 / 60);
//   // const forHours = timeHours * (360 / 12) + timeMinutes * (30 / 60);
//   const forHours = 30 * (timeHours + (1 / 60) * timeMinutes);

//   arrowSeconds.style.transform = `rotate(${forSeconds}deg)`;
//   arrowMinutes.style.transform = `rotate(${forMinutes}deg)`;
//   arrowHours.style.transform = `rotate(${forHours}deg)`;
//   console.log(arrowSeconds);
// }, 1000);

setInterval(() => {
  const currentTime = new Date();
  const data = makeDate(currentTime);
  createDigitalClock(data);
  createClock(data);
}, 1000);

function createDigitalClock(data) {
  const totalTime = `Поточний час:
  ${data.timeHours.toString().padStart(2, '0')}:
  ${data.timeMinutes.toString().padStart(2, '0')}:
  ${data.timeSeconds.toString().padStart(2, '0')} `;

  day.textContent = data.timeDay;
  dayOfMonth.textContent = data.timeDate;
  month.textContent = data.timeMonth;
  year.textContent = data.timeYear;
  digitalClock.textContent = totalTime;
}

function createClock(data) {
  const forSeconds = data.timeSeconds * (360 / 60);
  const forMinutes = data.timeMinutes * (360 / 60);
  // const forHours = data.timeHours * (360 / 12) + data.timeMinutes * (30 / 60);
  const forHours = 30 * (data.timeHours + (1 / 60) * data.timeMinutes);
  arrowSeconds.style.transform = `rotate(${forSeconds}deg)`;
  arrowMinutes.style.transform = `rotate(${forMinutes}deg)`;
  arrowHours.style.transform = `rotate(${forHours}deg)`;
}

function makeDate(time) {
  const timeDay = namesOfDay[time.getDay()];
  const timeDate = time.getDate();
  const timeMonth = namesOfMonth[time.getMonth()];
  const timeYear = time.getFullYear();
  const timeHours = time.getHours();
  const timeMinutes = time.getMinutes();
  const timeSeconds = time.getSeconds();
  return {
    timeDay,
    timeDate,
    timeMonth,
    timeYear,
    timeHours,
    timeMinutes,
    timeSeconds,
  };
}
