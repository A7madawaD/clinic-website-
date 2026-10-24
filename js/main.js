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
      // Mouse Enter (Live Hover Animation)
      item.addEventListener("mouseenter", function () {
        iconBox.style.transform = "scale(1.1) rotate(5deg)";
        iconBox.style.transition =
          "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      });

      // Mouse Leave (Reset to Normal)
      item.addEventListener("mouseleave", function () {
        iconBox.style.transform = "scale(1) rotate(0deg)";
      });

      // Mouse Down (Click Ripple/Press Effect)
      item.addEventListener("mousedown", function () {
        iconBox.style.transform = "scale(0.92)";
      });

      // Mouse Up (Release Effect)
      item.addEventListener("mouseup", function () {
        iconBox.style.transform = "scale(1.1) rotate(5deg)";
      });
    }
  });
});
/* ================================================================= */
/* 🔑 [AUTHENTICATION SECTION]: TOGGLE PASSWORD VISIBILITY           */
/* وظيفة إظهار وإخفاء كلمة المرور عند النقر على أيقونة العين          */
/* ================================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("passwordInput");
  const eyeIcon = document.getElementById("eyeIcon");

  if (togglePassword && passwordInput && eyeIcon) {
    togglePassword.addEventListener("click", function () {
      // التحقق من نوع الحقل الحالي وتغييره
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      // تبديل شكل الأيقونة بين العين المفتوحة والمغلقة
      if (type === "text") {
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash"); // أيقونة العين المشطوبة
      } else {
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye"); // أيقونة العين العادية
      }
    });
  }
});

// log in
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("#login-pane form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // يمنع إعادة تحميل الصفحة أو طلوعها للأعلى
    });
  }
});
/* ================================================================= */
/* 👨‍⚕️ [DOCTORS TAB]: FILTER DOCTORS CARDS & BUTTON TOGGLE           */
/* ================================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(
    "#doctorFilterBtns .filter-btn",
  );
  const doctorItems = document.querySelectorAll(".doctor-item");

  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // 1. إعادة تعيين شكل كل الأزرار إلى الزر المفرغ (outline)
        filterButtons.forEach((btn) => {
          btn.classList.remove("btn-primary", "active");
          btn.classList.add("btn-outline-primary");
        });

        // 2. تفعيل الزر المضغوط (تعبئة باللون الأزرق والنص أبيض)
        this.classList.remove("btn-outline-primary");
        this.classList.add("btn-primary", "active");

        // 3. إظهار/إخفاء الأطباء حسب التخصص
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
