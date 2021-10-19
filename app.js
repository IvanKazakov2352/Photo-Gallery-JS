const slider = (active) => {
  const slides = document.querySelectorAll(".slide");

  slides[active].classList.add("active");

  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      clearActiveClass();
      slide.classList.add("active");
    });
  });

  const clearActiveClass = () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  };
};
slider(2);
