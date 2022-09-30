// API : https://jsonplaceholder.typicode.com/

// 1) GET
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => {
//     if(res.ok) {console.log("GET request successful")}
//     else {console.log("GET request unsuccessful")}
//     return res
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

// 2) POST
// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Omer Duran",
//     username: "omerduran",
//     email: "info@omerduran.com",
//   }),
// })
//     .then(res => {
//     if(res.ok) {console.log("POST request successful")}
//     else {console.log("POST request unsuccessful")}
//     return res
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch(error => console.log(error));

// 3) PUT
// fetch("https://jsonplaceholder.typicode.com/users/3", {
//   method: "PUT",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Omer Duran",
//     username: "omerduran",
//     email: "info@omerduran.com",
//   }),
// })
//     .then(res => {
//     if(res.ok) {console.log("PUT request successful")}
//     else {console.log("PUT request unsuccessful")}
//     return res
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch(error => console.log(error));

// 4) DELETE
// fetch("https://jsonplaceholder.typicode.com/users/3", {
//   method: "DELETE",
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("DELETE request successful");
//     } else {
//       console.log("DELETE request unsuccessful");
//     }
//     return res;
//   })
//   .then((res) => console.log(res));
