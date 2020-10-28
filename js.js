let body = document.querySelector("body");


const loading = () => {
    let logo = document.querySelector(".logo");
    let name = document.querySelector(".teamName");
    let hi = document.querySelector(".homePage")
    logo.classList.remove("logo");
    name.classList.remove("teamName");
    hi.classList.remove("hidden");
    logo.classList.add("logoFixed");
    name.classList.add("teamNameFixed");
    
    body.removeEventListener("click",loading);
}

body.addEventListener("click",loading);