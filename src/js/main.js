console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)


// ajax GET request to localhost: 1337
// put whatever it says in the h1

let $theH1 = document.querySelector('.content h1');


axios
  .get('http://localhost:1337')
  .then(function (response) {
    console.log(response.data);
    $theH1.innerHTML = response.data;
  })
  .catch(function (error) {
    console.log(error);
  });