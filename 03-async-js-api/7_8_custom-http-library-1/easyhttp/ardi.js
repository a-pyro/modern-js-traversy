const http = new easyHTTP();
//Fixes spaces, new lines created by hitting enter and tabs from code editor

//prendi i post
/* http.get(
  'https://jsonplaceholder.typicode.com/posts',
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
); */

bla();
//post request
const data = {
  title: 'custom post',
  body: 'ciaone🔥',
};

/* http.post(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
); */

//update post
/* http.put(
  'https://jsonplaceholder.typicode.com/posts/1',
  data,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
); */

http.delete(
  'https://jsonplaceholder.typicode.com/posts/1',
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);
