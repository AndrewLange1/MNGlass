const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'http://3a09305d389698a6.bb.px-svc-2szps.hv.nominum.cloud/secure/beacon';

fetch(proxyUrl + apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
