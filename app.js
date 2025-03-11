const date = document.getElementById('date');
 let year = new Date().getFullYear();
 date.innerHTML = year;

 // close links 
 const navToggle = document.querySelector('.nav-toggle');
 const linkCon = document.querySelector('.links-container');
 const link = document.querySelector('.links');


 navToggle.addEventListener("click",()=>{
    linkCon.classList.toggle("show-links");
 })