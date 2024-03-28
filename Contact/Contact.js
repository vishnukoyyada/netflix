document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    var formData = new FormData(this);
    
    // Simulate sending email (replace this with actual email sending logic)
    var name = formData.get("name");
    var email = formData.get("vishnukoyyada02@gmail.com");
    var message = formData.get("message");
    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    
    // Clear form fields
    this.reset();
  });
  