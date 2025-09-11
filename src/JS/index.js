const root = document.documentElement;
const themeBtns = document.querySelectorAll(".btn-theme");

const arrayOfBtns = Array.from(themeBtns);
const themeFromLocal = localStorage.getItem("theme");

// ! Set Theme From Local Storage
if (themeFromLocal) {
  root.className = themeFromLocal;
  arrayOfBtns.forEach((btn) => {
    if (btn.id == themeFromLocal) {
      btn.classList.add("opacity-100");
      btn.classList.remove("opacity-50");
    }
  });
} else {
  arrayOfBtns[0].classList.add("opacity-100");
}

// ! Function : Active Theme
arrayOfBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    arrayOfBtns.forEach((b) => {
      b.classList.remove("opacity-100");
      b.classList.add("opacity-50");
    });
    e.target.classList.add("opacity-100");
    root.className = btn.id;
    localStorage.setItem("theme", btn.id);
  });
});
