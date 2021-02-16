const getEndpoint =
  'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy';
const postEndpoint = 'https://jsonplaceholder.typicode.com/posts';
const putEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';
const deleteEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';

get(getEndpoint).then((users) => console.log(users));

// fetch(getEndpoint)
//   .then((res) => res.json())
//   .then((data) => console.table(data));
