const userData = () => {
    const userInput = document.getElementById('userInput');
    const userNumber = parseInt(userInput.value);
    fetch(`https://randomuser.me/api/?results=${userNumber}`)
        .then(response => response.json())
        .then(data => showData(data))
}

const showData = data => {
    const users = data.results;
    const userContainer = document.getElementById('userContainer');
    for (const user of users) {
        const div = document.createElement('div');
        div.innerHTML = `<p> Name : ${user.name.title} ${user.name.first} ${user.name.last} </p> <p> Email: ${user.email} </p> <p> Phone : ${user.phone} </p> <p> Gender : ${user.gender} </p> <p> Age : ${user.dob.age}</p> <p>Date of Birth : ${user.dob.date}</p><br> <br>`;
        userContainer.appendChild(div);
    }
}