document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
  //Create an XHR object
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET', 'data.txt', true);

  //console.log('READYSTATE', xhr.readyState);

  //On progress - spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  };

  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `
      <h1>${this.responseText}</h1>
      `;
    }
  };

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.onerror = function() {
    console.log('Request error....');
  };

  xhr.send();

  //HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not found"
}
