// Selecting page elements
const getBtn = document.getElementById("get-btn");

// get request

const getData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const jsonResponse = await response.json();
        console.log(jsonResponse);
    } catch (error) {
        error = `Request failed!`
        console.log(error)
    }
};
// Buttons eventListeners
getBtn.addEventListener("click", getData);