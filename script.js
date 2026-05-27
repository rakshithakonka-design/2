// script.js

function showMessage(){

    alert(
        "Thank you for viewing my Resume!"
    );
}

// Fade Animation

window.onload = function(){

    document.querySelector(".container").style.opacity = "1";
};

// Scroll Animation

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});