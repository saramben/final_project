document.getElementById("startButton").addEventListener("click", startLemonRain);

function startLemonRain() {
  const lemonContainer = document.getElementById("lemonContainer");
  const lemonCount = 30; 
  const staggerDuration = 2500; 
  const animationDuration = 2500; 

  for (let i = 0; i < lemonCount; i++) {
    // Create a lemon emoji element
    const lemon = document.createElement("span");
    lemon.textContent = "🍋"; 
    lemon.classList.add("lemon");

    // random initial position 
    const randomLeft = Math.random() * (window.innerWidth - 50); 
    lemon.style.left = randomLeft + "px";

    // Add lemon to the container
    lemonContainer.appendChild(lemon);

    // Stagger delay
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