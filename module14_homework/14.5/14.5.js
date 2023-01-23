/*
Задание 5.

Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно 
ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить 
ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить 
ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст 
«Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по 
URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого 
input, а GET-параметр limit — это введённое число второго input.
Пример. Если пользователь ввёл 5 и 7, то запрос будет вида 
https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.

Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего
 успешно выполненного запроса (использовать localStorage).
*/

function useRequest(url,cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET",url, true);

    xhr.onload = function() {
        if(xhr.status !=200) {
    console.log('Статус ответа:' `${xhr.status}`)
        } else {
    let result = JSON.parse(xhr.response);
    
    console.log("Результат:", JSON.parse(xhr.response));
    if(cb) {
        cb(result);
     }
    } 
};
    xhr.onerror = function(){
    console.log("Ошибка! Статус ответа:", xhr.status);
    };

    xhr.send();
};

// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.result-content');
//input
const value1 = document.querySelector('.limit_1');
const value2 = document.querySelector('.limit_2');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.btn-submit');

function displayResult(apiData) {
    let cards = "";
        apiData.forEach((item, index, array) => {
        const cardBlock = `
            <div class="card">
                <img src="${item.download_url}" class="card-image"/>
                <p>${item.author}</p>
            </div>
            `;
        cards = cards + cardBlock;
        localStorage.setItem("localDiv", cards)
    }); 
    console.log(cards)
    resultRequest.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    useRequest(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`, displayResult);
});