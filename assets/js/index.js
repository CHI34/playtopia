var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var currentSlide = 0;
   
function showSlide(n) {
slides.forEach(function (slide) {
    slide.classList.remove('active');
});
dots.forEach(function (dot) {
    dot.classList.remove('active');
});
    
currentSlide = (n + slides.length) % slides.length;
slides[currentSlide].classList.add('active');
dots[currentSlide].classList.add('active');
 }
   
function nextSlide() {
 showSlide(currentSlide + 1);
}
   
dots.forEach(function (dot, index) {
dot.addEventListener('click', function () {
    showSlide(index);
});
});
   
setInterval(nextSlide, 3000);