// script.js

// DARK / LIGHT MODE
function toggleTheme(){
    document.body.classList.toggle("light");

    const btn = document.querySelector(".toggle");

    if(document.body.classList.contains("light")){
        btn.innerHTML = "☀️";
        localStorage.setItem("theme","light");
    }else{
        btn.innerHTML = "🌙";
        localStorage.setItem("theme","dark");
    }
}

// LOAD SAVED THEME
window.addEventListener("load", ()=>{

    const savedTheme = localStorage.getItem("theme");
    const btn = document.querySelector(".toggle");

    if(savedTheme === "light"){
        document.body.classList.add("light");
        btn.innerHTML = "☀️";
    }else{
        btn.innerHTML = "🌙";
    }

    revealOnScroll();
});

// SCROLL REVEAL
function revealOnScroll(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);