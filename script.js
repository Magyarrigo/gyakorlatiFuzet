window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  // Możesz dodać dodatkowe funkcje lub zmieniać styl loadera po załadowaniu strony.
  setTimeout(() => {
    loader.style.display = "none";
  }, 5000); // Wyłącza loader po 3 sekundach
});
