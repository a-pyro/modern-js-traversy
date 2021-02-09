const getEndpoint = 'https://jsonplaceholder.typicode.com/users';
const postEndpoint = 'https://jsonplaceholder.typicode.com/posts';
const putEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';
const deleteEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';

get(getEndpoint).then((users) => console.table(users));

fetch(getEndpoint)
  .then((res) => res.json())
  .then((data) => console.table(data));
