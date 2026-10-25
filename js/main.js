/* ================================================================= */
/* [1]. CAROUSEL TEXT FADE & ANIMATION SCRIPT */
/* ================================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#carouselExampleContent");

  if (carouselElement) {
    carouselElement.addEventListener("slide.bs.carousel", function (event) {
      const activeSlide = event.relatedTarget;
      const contentElements = activeSlide.querySelectorAll("h1, p, .d-flex");

      contentElements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "none";

        setTimeout(() => {
          el.style.transition = `all 0.6s ease ${index * 0.15}s`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 50);
      });
    });
  }
});

/* ================================================================= */
/* [2]. FEATURES LIVE HOVER & PULSE EFFECTS SCRIPT */
/* ================================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const featureItems = document.querySelectorAll(".feature-item");

  featureItems.forEach((item) => {
    const iconBox = item.querySelector(".live-icon");

    if (iconBox) {
      item.addEventListener("mouseenter", function () {
        iconBox.style.transform = "scale(1.1) rotate(5deg)";
        iconBox.style.transition =
          "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      });

      item.addEventListener("mouseleave", function () {
        iconBox.style.transform = "scale(1) rotate(0deg)";
      });

      item.addEventListener("mousedown", function () {
        iconBox.style.transform = "scale(0.92)";
      });

      item.addEventListener("mouseup", function () {
        iconBox.style.transform = "scale(1.1) rotate(5deg)";
      });
    }
  });
});

/* ================================================================= */
/* 🔑 [AUTHENTICATION SECTION]: TOGGLE PASSWORD VISIBILITY */
/* ================================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("passwordInput");
  const eyeIcon = document.getElementById("eyeIcon");

  if (togglePassword && passwordInput && eyeIcon) {
    togglePassword.addEventListener("click", function () {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      if (type === "text") {
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
      } else {
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
      }
    });
  }
});

/* ================================================================= */
/* 👨‍⚕️ [DOCTORS TAB]: FILTER DOCTORS CARDS & BUTTON TOGGLE */
/* ================================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(
    "#doctorFilterBtns .filter-btn",
  );
  const doctorItems = document.querySelectorAll(".doctor-item");

  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterButtons.forEach((btn) => {
          btn.classList.remove("btn-primary", "active");
          btn.classList.add("btn-outline-primary");
        });

        this.classList.remove("btn-outline-primary");
        this.classList.add("btn-primary", "active");

        const filterValue = this.getAttribute("data-filter");

        doctorItems.forEach((item) => {
          const category = item.getAttribute("data-category");
          if (filterValue === "all" || category === filterValue) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }
});

/* ================================================================= */
/* 🔗 BOOK APPOINTMENT FORM & LOCALSTORAGE USER HANDLING */
/* ================================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("#login-pane form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  }

  const bookingForm = document.getElementById("bookingForm");
  const patientNameInput = document.getElementById("patientName");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const enteredName =
        patientNameInput && patientNameInput.value.trim() !== ""
          ? patientNameInput.value.trim()
          : "Ahmed";

      localStorage.setItem("carePlusUserName", enteredName);

      alert("تم تسجيل الحجز بنجاح! جاري الانتقال إلى لوحة التحكم...");
      window.location.href = "dashboard.html";
    });
  }

  const dashboardUserName = document.getElementById("dashboardUserName");
  const greetingUserName = document.getElementById("greetingUserName");
  const savedName = localStorage.getItem("carePlusUserName");

  if (savedName) {
    if (dashboardUserName) {
      dashboardUserName.textContent = savedName;
    }
    if (greetingUserName) {
      greetingUserName.textContent = savedName;
    }
  }
});

/* ================================================================= */
/* 🏥 [SERVICES TAB]: FILTER & SEARCH SERVICES */
/* ================================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(
    "#filterButtonsContainer .filter-btn",
  );
  const serviceCards = document.querySelectorAll(".service-card-item");
  const searchInput = document.getElementById("serviceSearchInput");

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        filterBtns.forEach((b) => {
          b.classList.remove("btn-primary", "text-white");
          b.classList.add("btn-white", "bg-white", "text-dark");
        });

        this.classList.remove("btn-white", "bg-white", "text-dark");
        this.classList.add("btn-primary", "text-white");

        const selectedCategory = this.getAttribute("data-category");

        serviceCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          if (selectedCategory === "all" || cardCategory === selectedCategory) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase().trim();

      serviceCards.forEach((card) => {
        const titleData = card.getAttribute("data-title") || "";
        const cardText = card.textContent.toLowerCase();

        if (
          titleData.toLowerCase().includes(query) ||
          cardText.includes(query)
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});
