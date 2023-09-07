function contact(){
  alert("Thanks for contacting Project X we'll get back to u soon")
}
function subcribe(){
  alert("thanking for subcribing to ptoject X")
}
const header = document.querySelector("header");
const body = document.querySelector('div.body');
document.querySelector("div.menu").addEventListener("click", () => {
  header.classList.toggle('header_toggle');
  body.classList.toggle('.section_toggle');
});