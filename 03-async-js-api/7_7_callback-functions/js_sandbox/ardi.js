console.log('💩');

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ========== MANIERA SINCRONA 🏊‍♀️ ================
///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// simulazione di latenza del server
// ci metto di + a creare che a prendere
function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => (output += `<li>${post.title}: ${post.body}</li>`));
    document.body.innerHTML = output;
  }, 1000);
}

// createPost({ title: 'post three ', body: 'la merda 💩' });

// getPosts();

//così prendo solo i primi due post perchè il server ci ha messo di più a creare il posto rispwtto al tempo impegato per prenderli

///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ========== MANIERA ASINCRONA: CALLBACK ⏳❌ ================
///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function createPostAsync(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback(); //la callback per prendere i post viene chiamata solo dopo che la callback per pusharli è stata chiamata
  }, 2000);
}

function getPostsAsync() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => (output += `<li>${post.title}: ${post.body}</li>`));
    document.body.innerHTML = output;
  }, 1000);
}
console.log('before');
createPostAsync({ title: 'post three ', body: 'la merda 💩' }, getPostsAsync);
console.log('finito 🖕🏻');
