let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})

// Добавление новости в массив
const addButton = document.querySelector('.add-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

addButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Добавление новости в массив
const sendButton = document.querySelector('.send');
const titleInput = document.querySelector('input[type="text"]');
const textArea = document.querySelector('.textarea');
const newsWrapper = document.querySelector('.news-wrapper');

sendButton.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const text = textArea.value.trim();

  if (title.length < 8 ) {
    alert('Название не меньше 8 символов!');
    return;
  }else if (text.length > 300 ) {
    alert('Текст не более 300 символов!');
    return;
  }
  const newsItem = document.createElement('div');
  newsItem.classList.add('news-item');

  const newsTitle = document.createElement('h3');
  newsTitle.classList.add('h3');
  newsTitle.textContent = title;

  const newsText = document.createElement('p');
  newsText.classList.add('news-item__p');
  newsText.textContent = text;

  newsItem.appendChild(newsTitle);
  newsItem.appendChild(newsText);
  newsWrapper.appendChild(newsItem);
});


document.addEventListener('keydown',function(event){
    if('w' == event.key.toLowerCase()){
      document.body.style.background = 'white'
      document.body.style.color = 'black';
    } 
})

document.addEventListener('keydown',function(event){
    if('b' == event.key.toLowerCase()){
        document.body.style.background = 'black'
        document.body.style.color = 'white';
    } 
})