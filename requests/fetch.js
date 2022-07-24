// Selecting page elements
const getBtn = document.getElementById("get-btn");

// 1. Create a fetch GET method: create a function called getData

// hints: optional, can do on your own if you want
// use fetch to call the following address: https://reqres.in/api/users?page=2
// a) first .then() : when the request has finished being fetched, it should then check the response
// if the response is okay, return the response's json, else throw a new Error with message ' request failed'
// before the next .then, also check for a network error :in case of network error, display its error message
// b) second .then() : finally, chain another .then that takes the output and returns it. Don't forget to console log the reponse to see it on the browser console.

// Buttons eventListeners

const getData = () => {
  fetch("https://reqres.in/api/users?page=2")
    .then(
      (response) => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse);
    })
    .catch(() => console.log(`Request failed!`));
};

getBtn.addEventListener("click", getData);