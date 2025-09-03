// Simple scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const options = { threshold: 0.2 };

  const reveal = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(reveal, options);
  sections.forEach(sec => observer.observe(sec));
});
