document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");
  if (form) {
    form.addEventListener("submit", () => {
      alert("¡Gracias por registrarte!");
    });
  }
});
