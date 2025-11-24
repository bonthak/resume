const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");
const yearSpan = document.getElementById("year");

yearSpan.textContent = new Date().getFullYear();

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
    contactStatus.textContent = "Please complete all fields.";
    contactStatus.style.color = "#ffb347";
    return;
  }

  contactStatus.textContent = "Thanks! This demo form does not send yet.";
  contactStatus.style.color = "#6dde9b";
  contactForm.reset();
});

