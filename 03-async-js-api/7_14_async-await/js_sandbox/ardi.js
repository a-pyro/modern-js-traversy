const ardi = async () => 'hello';

ardi().then((res) => console.log(res));

const endpoint = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

getUsers(endpoint)
  .then((users) => console.log(users))
  .catch((err) => console.log(err));
