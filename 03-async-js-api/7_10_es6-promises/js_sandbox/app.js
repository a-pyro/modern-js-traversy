const posts = [{ title: 'asdhakfha' }, { title: 'sahfaflis' }];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('💩');
      }
      resolve();
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let out = '';
    posts.forEach((post) => (out += `<li>${post.title}</li>`));
    document.body.insertAdjacentHTML('afterbegin', out);
  }, 0);
}

createPost({ title: 'new post' })
  .then(getPosts)
  .catch((err) => console.log(err));
