
// Form submission and validation
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const details = document.getElementById("details").value.trim();
    const msgBox = document.getElementById("msgBox");

    if (!name || !email || !phone || !details) {
        msgBox.textContent = "Please fill in all the fields!";
        msgBox.style.color = "red";
        return;
    }

    msgBox.textContent = "Your request has been successfully sent!";
    msgBox.style.color = "green";

    // Reset form after submission
    this.reset();
});
