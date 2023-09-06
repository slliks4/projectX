const slideshow = document.querySelector('.gallery div.slide_container');
const slides = document.querySelectorAll(".slides");

const slideWidth = slides[0].offsetWidth + parseFloat(getComputedStyle(slides[0]).marginLeft);
const slidesToScroll = 3;
const scrollDistance = slidesToScroll * slideWidth;
document.querySelector('.slideshow button.left').addEventListener('click', async(e)=>{
    e.preventDefault();
    slideshow.scrollLeft -= scrollDistance;
});
document.querySelector('.slideshow button.right').addEventListener('click', async(e)=>{
    e.preventDefault();
    slideshow.scrollLeft += scrollDistance;
});