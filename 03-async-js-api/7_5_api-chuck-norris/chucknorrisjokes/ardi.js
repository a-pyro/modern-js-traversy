const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  console.log('fire');

  const numberOfJokes = document.getElementById('number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

  // cosa faccio quando mi arrivano quei dati? => quell'aspetto lo gestico in xhr.onload
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = '';

      if (response.type === 'success') {
        const { value: jokes } = response;
        console.table(jokes);
        jokes.forEach((joke) => (output += `<li>${joke.joke}</li>`));
      } else {
        output += ` <h1>Something went wrong</h1>`;
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
});
