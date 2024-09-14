let total = 0;

// Function to add the amount
function addAmount() {
    const addButton = document.querySelector("button");  // Get the Add button
    addButton.disabled = true;  // Disable the button temporarily

    const amountInput = document.getElementById("amountInput").value;

    if (amountInput && !isNaN(parseFloat(amountInput))) {
        total += parseFloat(amountInput);
        document.getElementById("totalAmount").innerText = total.toFixed(0);  // Display without decimal points
        document.getElementById("amountInput").value = '';  // Clear the input field
    } else {
        alert("Please enter a valid number!");
    }

    setTimeout(() => {
        addButton.disabled = false;  // Re-enable the button after processing
    }, 100);  // Small delay to prevent rapid clicks
}

// Function for Sign In
function signIn() {
    const emailInput = document.getElementById("emailInput");
    
    if (emailInput.checkValidity()) {
        // Hide the sign-in form and show the main content after sign-in
        sessionStorage.setItem('isSignedIn', 'true');  // Set a session flag for sign-in status
        document.getElementById("signInContainer").style.display = 'none';  // Hide sign-in form
        document.getElementById("mainContent").style.display = 'block';     // Show main content
        
        // Add class for the background GIF on Amount Adder page
        document.body.classList.add('amount-adder-background');
        
        // Hide background content that's only for the sign-in page
        document.querySelector(".background-content").style.display = 'none';
        
        // Show animated text only if we're on the Amount Adder page
        if (document.body.classList.contains('amount-adder-page')) {
            document.getElementById("animatedText").style.display = 'block';
        }
    } else {
        alert(emailInput.validationMessage);  // Show error message if email is invalid
    }
}

// Function to check "Enter" key press for amount adder
function checkEnter(event) {
    if (event.key === "Enter") {
        addAmount();  // Call addAmount() when Enter key is pressed
    }
}

// Function to check "Enter" key press for sign-in
function checkSignInEnter(event) {
    if (event.key === "Enter") {
        signIn();  // Call signIn() when Enter key is pressed
    }
}

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
    // Check if the body has the class for the Amount Adder page
    if (document.body.classList.contains('amount-adder-page')) {
        // Show the animated text only on the Amount Adder page
        document.getElementById("animatedText").style.display = 'block';
    }
});
function goToContactUs() {
    sessionStorage.removeItem('isSignedIn');  // Clear the sign-in flag
    window.location.href = "contact.html";    // Redirect to Contact Us page
}

