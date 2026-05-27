// script.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial Load Animation
    const grid = document.querySelector(".bento-grid");
    if (grid) {
        grid.style.opacity = "0";
        grid.style.transform = "translateY(20px)";
        grid.style.transition = "all 0.8s ease-out";
        
        setTimeout(() => {
            grid.style.opacity = "1";
            grid.style.transform = "translateY(0)";
        }, 100);
    }

    // 2. Staggered Card Animation (on Scroll or Load)
    const cards = document.querySelectorAll(".bento-card");
    
    // Set initial state
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    });

    // Create an Intersection Observer to animate cards when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Apply a slight delay based on the element's index to create a stagger effect
                const index = Array.from(cards).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100); // 100ms delay per card
                
                // Unobserve after animating once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the card is visible
        rootMargin: "0px 0px -50px 0px"
    });

    // Observe all cards
    cards.forEach(card => {
        observer.observe(card);
    });
});