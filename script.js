// Animation

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// Footer Year

const footer=document.querySelector("footer");

footer.innerHTML="© "+new Date().getFullYear()+" JUPITER GLOBAL";
