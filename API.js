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
function showData(user) {
    const ul = document.getElementById("users");
    
}