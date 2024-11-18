const menuBar=document.querySelector(".fa-bars")
const close=document.querySelector(".fa-close")
const navbar=document.querySelector("#navbar")

menuBar.addEventListener("click",()=>{
    navbar.classList.add("active")
})


close.addEventListener("click",()=>{
    navbar.classList.remove("active")
})