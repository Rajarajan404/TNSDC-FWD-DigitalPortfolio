// Scroll to contact section when "Hire Me" button is clicked
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Simple form validation (extra)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting me! I will get back to you soon.");
  this.reset();
});