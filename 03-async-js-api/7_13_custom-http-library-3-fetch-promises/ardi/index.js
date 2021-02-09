const http = new EasyHTTP();

// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const endpoint = 'https://jsonplaceholder.typicode.com/users';

const newUser = {
  name: 'ardi',
  isCool: '🔥',
};
/* http
  .post(endpoint, newUser)
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */

const newToPut = {
  name: ' ciao  💩',
};

const putEndPoint = 'https://jsonplaceholder.typicode.com/users/2';
http
  .put(putEndPoint, newToPut)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

http
  .delete(putEndPoint)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// %APPROCCIO FUNZIONALE
// approccio 1
/* function getUsers(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) =>
      err ? (document.body.innerHTML = 'Sorry a error occured') : ''
    );
}
getUsers(endpoint); */
// apprroccio 2
//qui quando chiamo la funzione posso far fare quello che voglio coi dati
/* function getUsers(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
} */

// getUsers(endpoint).then((data) => console.log(data));
