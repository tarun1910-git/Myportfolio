function toggleTheme(){
    document.body.classList.toggle("light");

    const btn = document.querySelector(".toggle");

    if(document.body.classList.contains("light")){
        btn.innerHTML = "☀️";
    }else{
        btn.innerHTML = "🌙";
    }
}

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{threshold:0.15});

document.querySelectorAll(".reveal").forEach(el=>{
    observer.observe(el);
});