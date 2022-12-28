const horses = ['Secretariat', 'Eclipse', 'West Australian', 'Flying Fox', 'Seabiscuit'];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  const promises = horses.map(horse => run(horse));
  raceCounter += 1;
  progressField('Заїзд почався,ставки не доступні!');
  updateWinnerField('');
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horseP) {
  Promise.race(horseP).then(({ horse, time }) => {
    updateWinnerField(`🎉 Перемога ${horse}, фінішував за ${time}
    часу`);
    updateResultsTable({ horse, time, raceCounter });
  });
}

function waitForAll(horseP) {
  Promise.all(horseP).then(() => {
    progressField('Заїзд завершено,готуйте ставки!');
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function progressField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = ` <tr>
        <td>${raceCounter}</td>
        <td>${horse}</td>
        <td>${time}</td>
        </tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
