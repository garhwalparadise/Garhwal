// Garhwal Paradise Website Script

// Smooth scrolling for website links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Simple welcome message in console
console.log("Welcome to Garhwal Paradise 🌿");


// Update year automatically in footer
const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if(footerText){

    footerText.innerHTML =
    "© " + year + " Garhwal Paradise. All Rights Reserved.";

}
