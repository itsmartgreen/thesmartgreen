// Initialize AOS (Animate On Scroll)
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });
}

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// Active Link Highlighting
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animate Numbers on Scroll
const animateNumbers = () => {
  const statNumbers = document.querySelectorAll(".stat-number");
  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          statNumbers.forEach((element) => {
            const target = parseInt(element.getAttribute("data-target"));
            animateToNumber(element, target);
          });
        }
      });
    },
    { threshold: 0.5 },
  );

  if (statNumbers.length > 0) {
    observer.observe(statNumbers[0].closest(".stat-item"));
  }
};

const animateToNumber = (element, target) => {
  let current = 0;
  const increment = target / 50;
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + "+";
      clearInterval(interval);
    } else {
      element.textContent = Math.floor(current) + "+";
    }
  }, 30);
};

// Initialize number animation
if (document.querySelector(".stat-number")) {
  animateNumbers();
}

// Newsletter Form
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    if (email) {
      alert("Thank you for subscribing!");
      newsletterForm.reset();
    }
  });
}

// Scroll to Top Button (optional enhancement)
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.id = "scrollToTop";
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2e7d32, #66bb6a);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
  transition: all 0.3s ease;
  z-index: 99;
  font-size: 20px;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollToTopBtn.addEventListener("mouseenter", () => {
  scrollToTopBtn.style.transform = "translateY(-5px)";
  scrollToTopBtn.style.boxShadow = "0 8px 20px rgba(46, 125, 50, 0.4)";
});

scrollToTopBtn.addEventListener("mouseleave", () => {
  scrollToTopBtn.style.transform = "translateY(0)";
  scrollToTopBtn.style.boxShadow = "0 4px 12px rgba(46, 125, 50, 0.3)";
});

// Add hover effect to buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px)";
  });
  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

console.log("SmartGreen - Modern UI Loaded");
