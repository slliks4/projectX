function contact(){
  alert("Thanks for contacting Project X we'll get back to u soon")
}
function subcribe(){
  alert("thanking for subcribing to ptoject X")
}

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 480) {
    const header = document.querySelector("header");
    header.style.left = "-1000px";

    document.querySelector("div.menu").addEventListener("click", () => {
      if (header.style.left === "-1000px") {
        header.style.left = "0";
        header.querySelector(".fa-times").style.display = "block";
        header.querySelector(".fa-bars").style.display = "none";
      } else {
        header.style.left = "-1000px";
        header.querySelector(".fa-times").style.display = "none";
        header.querySelector(".fa-bars").style.display = "block";
      }
    });
  }
});