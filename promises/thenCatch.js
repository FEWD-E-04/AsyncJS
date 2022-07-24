/*
* Problem
It is your birthday and you want to celebrate it with all your friends at the park.
But for that to happen, the weather needs to be good. No raining.
If the weather is not good, your birthday party will happen in your tiny apartment.
Unfortunately, you can't invite all your friends if your birthday party needs to be in your house.

How can your create a Promise for that situation?
Start defining the weather. Is it raining?
Then write a promise (create a promise).
Then check the promise (consume the promise).
*/

//Define the weather.
let isRaining = true;
//Create a promise.
const birthdayParty = new Promise((resolve, reject) => {
    if (!isRaining) {
      const venue = {
        local: "Centennial Park",
        friends: 30,
      };
      return resolve(venue);
    } else {
      return reject("Sorry, in house birthday party.");
    }
  });

//Consume the promise using then() and catch().
const checkWeather = () => {
    birthdayParty
      .then((fulfilled) => {
        console.log(fulfilled);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
checkWeather();