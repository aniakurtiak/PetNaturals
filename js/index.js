const timerElement = document.querySelector('.timer');

let timeInSeconds = 2 * 60 * 60;

function updateTimer() {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  timeInSeconds--;
  if (timeInSeconds >= 0) {
    setTimeout(updateTimer, 1000);
  } else {
    timerElement.textContent = 'Час минув!';
  }
}

updateTimer();


// -------------------------------------------------------

const phoneMack = document.getElementById('phone');

IMask(
    phoneMack,
    {mask: '+{38}(\\000) 000-00-00'}
);

// ----------------------------------------------------------

const orderForm = document.querySelector('.form')
const orderDate = document.querySelector('.order-date');

orderForm.addEventListener('submit', handlerSubmit)

function handlerSubmit() {
    event.preventDefault();
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
 const formattedDate = `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;
 orderDate.textContent= `Order date: ${formattedDate}`
}

