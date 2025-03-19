// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Initialize all components
    themeToggle();
    mobileMenu()
    headerScroll()
    updateCopyrightYear()
    particlesJavaScript()
    AOS.init({ duration: 2000 });

});

// theme handling
function themeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    themeToggle.addEventListener("click", function () {
        const newTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    });
}

function setTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    updateThemeToggle(theme);
    particlesJavaScript()
}

function updateThemeToggle(theme) {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.innerHTML = theme === "dark" ? "☀️" : "🌙";
    }
}

// Mobile menu handling
function mobileMenu() {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navLinksItems = document.querySelectorAll(".nav-links a");

    mobileMenuToggle.addEventListener("click", function (e) {
        navLinks.classList.toggle("active");
        mobileMenuToggle.innerHTML = navLinks.classList.contains("active") ? '<i class="las la-times"></i>' : '<i class="las la-bars"></i>';
        e.stopPropagation();
    });

    navLinksItems.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            mobileMenuToggle.innerHTML = '<i class="las la-bars"></i>';
        });
    });

    document.addEventListener("click", function (e) {
        if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navLinks.classList.remove("active");
            mobileMenuToggle.innerHTML = '<i class="las la-bars"></i>';
        }
    });
}

// header scroll effect
function headerScroll() {
    const header = document.querySelector("header");
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener("scroll", function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add("active");

            if (currentScroll > lastScroll) {
                header.style.transform = "translateY(-100%)";
            } else {
                header.style.transform = "translateY(0)";
            }
        } else {
            header.classList.remove("active");
            header.style.transform = "translateY(0)";
        }
        lastScroll = currentScroll;
    });
}

// Update copyright year
function updateCopyrightYear() {
    const yearSpan = document.querySelector("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Data().getFullYear().toString();
    }
}

// Typed.js
const typedJavaScript = new Typed(".typed-text", {
    strings: ["a Web Developer", "a Designer", "a Freelancer", "a Blogger"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 1500,
    startDelay: 500,
});

// Particles.js
function particlesJavaScript() {
    if (!window.particlesJS || !document.getElementById("particles-js")) return;

    const particleColor = document.body.dataset.theme === "dark" ? "#ffffff" : "#000000";

    window.particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: particleColor },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: {
                enable: true, distance: 150, color: particleColor, opacity: 0.4, width: 1
            },
            move: { enable: true, speed: 6 }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
}

