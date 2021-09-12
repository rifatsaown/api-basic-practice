function callData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
}
function userData() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => showData(data))
}
function showData(users) {
    const ul = document.getElementById("users");
    for (const user of users){
        const li = document.createElement("li");
        li.innerText = `Name: ${user.name}
                        Email: ${user.email}
                        Address: ${user.address.street} , ${user.address.suite}, ${user.address.city}`;
        ul.appendChild(li);
    }
}