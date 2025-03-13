document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.dataset.theme = savedTheme;
  updateThemeToggle(savedTheme);

  themeToggle.addEventListener("click", () => {
    const newTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = newTheme;
    updateThemeToggle(newTheme);

    loadParticles();
  });

  function updateThemeToggle(theme) {
    themeToggle.innerHTML = theme === "dark" ? "☀️" : "🌙";
  }

  const typed = new Typed(".typed-text", {
    strings: ["a Web Developer", "a Designer", "a Freelancer", "a Blogger"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 1500,
    startDelay: 500,
  });

  function loadParticles() {
    const particleColor =
      document.body.dataset.theme === "dark" ? "#ffffff" : "#000000";

    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: { value: particleColor },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: particleColor,
          opacity: 0.4,
          width: 1,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: { opacity: 1 },
          },
        },
      },
      retina_detect: true,
    });
  }

  loadParticles();
});
