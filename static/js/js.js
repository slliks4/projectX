document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById("main-header");
  const headerHeight = header.clientHeight;

  function toggleHeaderBackground() {
      if (window.scrollY > headerHeight) {
          header.classList.add("header-scrolled");
      } else {
          header.classList.remove("header-scrolled");
      }
  }

  // Initial call to set the header background based on initial scroll position
  toggleHeaderBackground();

  // Add the event listener to toggle the header background when scrolling
  window.addEventListener("scroll", toggleHeaderBackground);
});

const nav = document.querySelector('.nav');
const header = document.getElementById("main-header");

nav.style.left = '-1000px';

function Show_menu() { 
  if (nav.style.left == '-1000px'){
      nav.style.left = 0;
  }else{
      nav.style.left = '-1000px';
  }
}
document.querySelector('.menu').addEventListener('click',()=>{
  Show_menu();
})

function contact(){
  alert("Thanks for contacting Project X we'll get back to u soon")
}
function subcribe(){
  alert("thanking for subcribing to ptoject X")
}