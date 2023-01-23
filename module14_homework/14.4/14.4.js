/*
Задание 14.4

Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. 
В input можно ввести любое число.

При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже 
текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по 
URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
Пример. Если пользователь ввёл 150 и 200, то запрос будет вида 
https://picsum.photos/150/200.
После получения данных вывести ниже картинку на экран.
*/
const btnNode = document.querySelector('.j-result');
const content = document.querySelector('.content');

btnNode.addEventListener('click', () => {
  const input1 = document.querySelector('input[name=input1]').value;
  const input2 = document.querySelector('input[name=input2]').value;

  if (input1 >= 100 && input1 <= 300 && input2 >= 100 && input2 <= 300) {
    fetch(`https://picsum.photos/${input1}/${input2}`, response)
      .then((response) => {
        console.log('response', response);
      })
      .then((data) => {
        let cards = '';
        data.forEach(item => {
          let cardBlock = `<div class="card">
                                <img src="${item.download_url}" class="card-image" />
                             </div>`;
          cards = cards + cardBlock;                   
        });
        content.innerHTML = cards;
      })
      .catch(() => { console.log('error') })
  } else {
    console.log("одно из чисел вне диапазона от 100 до 300");
  }
});
