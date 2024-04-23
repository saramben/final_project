document.getElementById("startButton").addEventListener("click", startLemonRain);

function startLemonRain() {
  const lemonContainer = document.getElementById("lemonContainer");
  const lemonCount = 30; // Number of lemons
  const staggerDuration = 2500; // Stagger duration in milliseconds
  const animationDuration = 2500; // Animation duration in milliseconds

  for (let i = 0; i < lemonCount; i++) {
    // Create a lemon emoji element
    const lemon = document.createElement("span");
    lemon.textContent = "🍋"; // Lemon emoji
    lemon.classList.add("lemon");

    // Set a random initial position for the lemon
    const randomLeft = Math.random() * (window.innerWidth - 50); // Adjust 50 as needed
    lemon.style.left = randomLeft + "px";

    // Append the lemon to the container
    lemonContainer.appendChild(lemon);

    // Calculate the stagger delay for each lemon
    const staggerDelay = (staggerDuration / lemonCount) * i;

    // Start the animation with staggered delay
    lemon.style.animation = `fall ${animationDuration / 1000}s linear forwards`;
    lemon.style.animationDelay = staggerDelay + "ms";

    // Remove the lemon when it reaches the bottom of the page
    lemon.addEventListener("animationend", function() {
      lemon.remove();
    });
  }
}