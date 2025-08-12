let currentSlide = 0;

function moverSlide(direction) {
  const carrossel = document.querySelector(".carrossel");
  const images = document.querySelectorAll(".carrossel img");
  const totalSlides = images.length;
  const slideWidth = images[0].clientWidth + 20;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  carrossel.scrollTo({
    left: currentSlide * slideWidth,
    behavior: "smooth"
  });
}
