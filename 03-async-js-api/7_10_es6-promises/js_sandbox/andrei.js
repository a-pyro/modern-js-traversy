const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Funziona 🔥');
  } else {
    reject(`S'è rotto 💩`);
  }
});

// promise.then((result) => console.log(result));

promise
  .then((result) => result + '!!!')
  .then((result2) => console.log(result2));
