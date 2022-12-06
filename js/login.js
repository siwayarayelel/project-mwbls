let username = document.querySelector("#username");
let password = document.querySelector("#password");
let alertWrong = document.querySelector(".alertWrong");

let loginBtn = document.querySelector(".loginBtn");

loginBtn.addEventListener("click", (e) => {

    if(password.value == "" || username.value == ""){
        e.preventDefault();
        alertWrong.innerHTML = "Please input username and password";
        alertWrong.style.color = "red";
        alertWrong.style.fontSize = "0.9rem";
    } else if (password.value !== "admin123" || username.value !== "admin"){
        e.preventDefault();
        alertWrong.innerHTML = "Invalid username or password";
        alertWrong.style.color = "red";
    }
})