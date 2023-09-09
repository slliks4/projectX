function contact(){
  alert("Thanks for contacting Project X we'll get back to u soon")
}
function subcribe(){
  alert("thanking for subcribing to ptoject X")
}
const nav = document.querySelector("header ul.nav");
const body = document.querySelector('body');
document.querySelector("div.menu").addEventListener("click", () => {
  nav.classList.toggle('header_toggle');
  body.classList.toggle('overflow');
});