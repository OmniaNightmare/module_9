const consolelog = document.getElementById('consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода сообщения в консоль');
})

const alerT = document.getElementById('alert');

alerT.addEventListener('click', () => {
    alert('Показывает диалоговое окно с опциональным (необязательным) сообщением и кнопкой OK.');
})

const prompt = document.getElementById('prompt');

prompt.addEventListener('click', () => {
    alert('Открывает окнов, в котором запрашивает у пользователя ввести какие-либо данные');
})