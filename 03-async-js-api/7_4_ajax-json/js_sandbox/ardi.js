// Json => javascript object notation
// le key devono essere tra ""

document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(typeof this.responseText);
      console.log(this.responseText); // stringa per ora
      const customer = JSON.parse(this.responseText); //per convertirlo e poterlo usare come oggetto js

      const output = `<ul>
          <li>${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.company}</li>
          <li>${customer.phone}</li>
        </ul>`;
      document.getElementById('customer').innerHTML = output;
    }
  };

  xhr.send();
}

function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  console.log(xhr);

  xhr.onprogress = () => {
    console.log('loading');
  };

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      console.log(customers);
      document.getElementById('customers').innerHTML = ''; //resetto prima di appendere

      customers.forEach((customer) => {
        const output = `<ul>
          <li>Customer# ${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.email}</li>
          <li>${customer.website}</li>
        </ul>`;
        document
          .getElementById('customers')
          .insertAdjacentHTML('beforeend', output);
      });
    }
  };

  xhr.send();
}
