console.log('JavaScript успешно подключен!');
const button = document.querySelector('#progress-btn');
const statusText = document.querySelector('#status-text');
const clickCounter = document.querySelector('#click-counter');

let isCompleted = false;
let clickCount = 0;

button.addEventListener('click', function() {
    clickCount++;
    clickCounter.textContent = `Нажатий: ${clickCount}`;
    
    if (isCompleted === false) {
    statusText.textContent = 'Статус: выполнено!';
    statusText.style.color = 'green';
    statusText.style.fontWeight = 'bold';
    isCompleted = true;
    } else {
    statusText.textContent = 'Статус: в процессе';
    statusText.style.color = '';
    statusText.style.fontWeight = 'normal';
    isCompleted = false;
    }
})