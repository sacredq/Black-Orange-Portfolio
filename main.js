// CONST
const barBtn = document.getElementById("icon-bar");
const navbar = document.getElementById("navBar");

let n = 1;
barBtn.addEventListener("click", () => {
    navbar.style.display = "flex";
    n++;
    if(n>2){
        navbar.style.display = "none";
        n = 1;
    }

    barBtn.classList.toggle("fa-bars");
    barBtn.classList.toggle("fa-xmark");
})

// AOS ANIMATION
AOS.init({
    offset: 300, duration: 1400, 
});