let x;
const link = document.getElementById('link');
let a = link;

link.addEventListener('click', () => {
   x = prompt('Введите текст, на который изменится ссылка:');
   link.innerHTML = x;
})

