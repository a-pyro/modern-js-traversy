document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('test.txt')
    .then((res) => res.text())
    .then(
      (data) =>
        (document.getElementById(
          'output'
        ).innerHTML = `<p class="animate__animated animate__bounceInLeft">${data}</p>`)
    )

    .catch((err) => console.log(err));
}

function getJson() {
  fetch('posts.json')
    .then((res) => res.json())
    .then((data) => {
      document.querySelector('#output').innerHTML = '';

      data.forEach((post, idx) => {
        let html = `<li class="animate__animated animate__bounceInLeft animate__delay-${
          idx + 1
        }s">${post.title}
                      <p>${post.body}</p>
                    </li>
        `;
        document.querySelector('#output').insertAdjacentHTML('beforeend', html);
      });
    })
    .catch((err) => console.log(err));
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      document.querySelector('#output').innerHTML = '';
      console.log(data);
      data.forEach((user, idx) => {
        let html = `<figure class="animate__animated animate__bounceInLeft animate__delay-${
          idx + 1
        }s">
                        <img src="${
                          user.avatar_url
                        }" alt="Trulli" style="width:100%">
                        <figcaption>${user.login}</figcaption>
                    </figure>
        `;
        document.querySelector('#output').insertAdjacentHTML('beforeend', html);
      });
    })
    .catch((err) => console.log(err));
}
