document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest(); //creo nuovo oggetto

  xhr.open('GET', 'data.txt', true); //true perchè lo voglio async

  xhr.onprogress = function () {
    //per mettere spinner mentre carica i dati
    console.log('READYSTATE', xhr.readyState);
  };

  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);

    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById(
        'output'
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  xhr.onerror = (e) => {
    //gestire errori
    console.log(e);
  };

  xhr.send();
}

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
