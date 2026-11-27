console.log('JavaScript успешно подключен!');
const button = document.querySelector('#progress-btn');
const statusText = document.querySelector('#status-text');

button.addEventListener('click', function() {
    statusText.textContent = 'Статус: выполнено!';
    statusText.style.color = 'green';
    statusText.style.fontWeight = 'bold';
})