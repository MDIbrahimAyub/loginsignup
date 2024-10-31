function submit() {
    let userName = document.querySelector("#name").value;
    let userEmail = document.querySelector("#email").value;
    let userPassword = document.querySelector("#password").value;

    let userData = { name: userName, email: userEmail, password: userPassword };
    console.log(userData);

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let emailExists = users.some(user => user.email === userEmail);

    if (emailExists) {
        alert("Email is already taken. Please use a different email.");
        return;
    }

    if (users) {
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        localStorage.setItem("users", JSON.stringify([userData]));
    }
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";

    alert("Account created successfully!");
    window.location.href = './login.html';
}

function checkUser() {
    let userEmail = document.getElementById("inputemail").value;
    let userPass = document.getElementById("inputpassword").value;

    let allUsers = JSON.parse(localStorage.getItem("users")) || [];

    let notMached = true;

    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == userEmail) {
            notMached = false;
            if (userPass == allUsers[i].password) {
                alert("Successfully Login")
                window.location.href = "./dashbord.html"
            }

            else {
                alert("Invalid Password")
            }
            break;
        }
    }

    if (notMached) {
        alert("Email does not match");
    }

}