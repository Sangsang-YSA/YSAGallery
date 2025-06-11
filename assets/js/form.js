document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const notification = document.getElementById("overlay-notification");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // next time na yung direct sa email
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);

    // Reset the form
    form.reset();
  });
});
