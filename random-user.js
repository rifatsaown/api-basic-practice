const userData = () => {
    fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => data)
}