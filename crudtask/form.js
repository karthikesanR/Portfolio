// POST FUNCRION

function createUser() {
  fetch("http://localhost:3000/insert", {
    method: "POST",
    body: JSON.stringify({
      username: document.getElementById("username1").value,
      email: document.getElementById("email1").value,
      message: document.getElementById("message1").value,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
// GET FUNCTION

// PUT FUNCTION

function updateuser() {

  fetch("http://localhost:3000/update",{
    method: "PUT",
    body: JSON.stringify({
        id:"2",
      username: document.getElementById("username1").value,
      email: document.getElementById("email1").value,
      message: document.getElementById("message1").value,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}



