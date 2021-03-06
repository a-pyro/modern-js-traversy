function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// fai richiesta HTTP GET
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  // const self = this;
  this.http.onload = function () {
    if (this.http.status === 200) {
      // console.log(this.http.responseText);
      callback(null, this.http.responseText);
    } else {
      callback('Error: ' + this.http.status);
    }
  };

  this.http.send();
};
// fai richiesta HTTP POST

easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/josn');
  const self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// fai richiesta HTTP PUT
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/josn');
  const self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};
// fai richiesta HTTP DELETE
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  const self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      // console.log(self.http.responseText);
      callback(null, 'post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
