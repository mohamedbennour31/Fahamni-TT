// Menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav ul");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  // Scroll to top
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // FAQ interactive
  const faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;

      // Optionnel : refermer les autres réponses ouvertes
      document.querySelectorAll(".faq-answer").forEach(a => {
        if (a !== answer) a.style.display = "none";
      });

      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
  });
});

const now = new Date();
const timeString = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
document.getElementById("localTime").textContent = "Heure actuelle : " + timeString;


document.addEventListener("DOMContentLoaded", () => {
  // Afficher le message de bienvenue une seule fois par session
  if (!sessionStorage.getItem("welcomeShown")) {
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) message = "☀️ Bonjour !";
    else if (hour < 18) message = "🌤️ Bon après-midi !";
    else message = "🌙 Bonsoir !";

    alert(message + " Bienvenue sur Fahamni TT.");
    sessionStorage.setItem("welcomeShown", "true");
  }
});
// Toggle Dark Mode
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optionnel : Sauvegarder le mode dans localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Appliquer le thème stocké au chargement
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
