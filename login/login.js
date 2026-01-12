const usernameInput = document.getElementsByClassName("usernameform")[0];
const passwordInput = document.getElementsByClassName("passwordform")[0];

const loginform = document.getElementById("loginform")

loginform.addEventListener("submit",()=> {
    

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if(username === "admin" && password === "admin"){
        console.log("admin je tady");
    }
    else{
        console.log("admin tady neni ljydfjhsdfjksdhfhsdkfhskfkjshfjks")
    }
})
    

