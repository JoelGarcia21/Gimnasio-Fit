document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formNewsletter");
  const emailInput = document.getElementById("newsletterEmail"); // corregido
  const spinner = document.getElementById("spinner");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email && validateEmail(email)) {
      spinner.classList.remove("d-none");

      setTimeout(() => {
        alert("Gracias por suscribirte, " + email + "!");
        form.reset();
        spinner.classList.add("d-none");
      }, 1000);
    } else {
      emailInput.classList.add("is-invalid");
    }
  });

  emailInput.addEventListener("input", function () {
    emailInput.classList.remove("is-invalid");
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
