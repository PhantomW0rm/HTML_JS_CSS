// HTTP REQUESTS

// Fetch API

// CREATE - POST
// READ - GET
// UPDATE - PUT/PATCH
// DELETE - DELETE

const button = document.getElementById(`button`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);

// axios

// for my read for Exercise1 I used https://reqres.in/api/users The answer is 12 users

read = URL => {
  axios.get(URL = "https://reqres.in/api/users")
    .then((response) => {
      output.innerHTML = JSON.stringify(response.data);
    }).catch((err) => {
      console.log(err);
    })
}

// for my read for Exercise2 I used https://reqres.in/api/users/2 The answer is

read1 = URL => {
    axios.get(URL = "https://reqres.in/api/users/2")
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }
  

// For my CREATE Exercise 3 i used

create = URL => {
  axios.post(URL = "https://reqres.in/api/users", {
    first_name: `Morpheus`,
    job : `Leader`
  })
    .then((response) => {
      output.innerHTML = JSON.stringify(response.data);
    }).catch((err) => {
      console.log(err);
    })
}

create1 = URL => {
    axios.post(URL, {
      first_name: `Andrew`,
      email : `andrewirvine3381@gmail.com`
    })
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }

  create2 = URL => {
    axios.post(URL, {
      first_name: `Andrew`,
      email : `andrewirvine3381@gmail.com`
    })
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }

button.onclick = () => create(input.value);