// --- Carrossel automático ---
const carousel = document.getElementById("carousel");
const totalSlides = carousel.children.length;
const indicators = document.getElementById("indicators");
let currentSlide = 0;

// Criar os indicadores
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("div");
  dot.classList.add("indicator");
  if (i === 0) dot.classList.add("active");
  indicators.appendChild(dot);
}

const updateIndicators = (index) => {
  const dots = indicators.querySelectorAll(".indicator");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
};

const changeSlide = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateIndicators(currentSlide);
};

setInterval(changeSlide, 10000); // troca a cada 10 segundos
