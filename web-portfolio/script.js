// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the "Send Message" button by its ID or class
  const sendButton = document.querySelector("#send-message");

  // Check if the button exists to avoid errors
  if (sendButton) {
    sendButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent actual form submission
      alert("Thank you for your message!");
    });
  } else {
    console.warn("Send Message button not found.");
  }
});