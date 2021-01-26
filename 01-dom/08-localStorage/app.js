/* // set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));


tasks.forEach(function (task) {
  console.log(task);
}); */

// & setto item
localStorage.setItem('nome', 'Ardi il Magnifico');
localStorage.setItem('surname', 'SuperHero');

sessionStorage.setItem('nome', 'La Zozza Evanescente'); //non dura se chiudo tab
// i metodi sono ugualu

// & rimuovo

// localStorage.removeItem('nome');
// localStorage.removeItem('surname');

const surname = localStorage.getItem('surname');

localStorage.clear(); //& pulisco tutto => meglio rimuovere item con removeItem()

// console.log(surname);

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = document.querySelector('#task').value;

  let tasks; //inizializzo array che serve per storage
  const tasksInStorage = localStorage.getItem('tasks');
  // controllo se c'è qualcosa dentro
  if (tasksInStorage) {
    console.log('cè');
    // lo tiro fuori
    tasks = JSON.parse(tasksInStorage); //parso la stringa json
  } else {
    console.log('noncè');
    // larray vuoto
    tasks = [];
  }

  // ora tasks è:
  //o array vuoto appena creato
  //o array tirato fuori da local storage

  tasks.push(task); //metto dentro il task

  localStorage.setItem('tasks', JSON.stringify(tasks)); // metto dentro una stringa

  // resetto

  document.querySelector('#task').value = '';
  document.querySelector('#task').focus();
});
