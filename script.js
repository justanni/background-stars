// Function to generate random positions for the stars
function generateStars(numStars) {
    let starPositions = '';
    for (let i = 0; i < numStars; i++) {
      const randomX = Math.floor(Math.random() * 2000);  // Random X position
      const randomY = Math.floor(Math.random() * 2000);  // Random Y position
      starPositions += `${randomX}px ${randomY}px #FFF, `;
    }
    return starPositions.slice(0, -2); // Remove trailing comma and space
  }
  
  // Apply random stars to each layer
  document.addEventListener("DOMContentLoaded", function () {
    // Apply random star positions to each star layer
    document.getElementById('stars').style.boxShadow = generateStars(700);
    document.getElementById('stars2').style.boxShadow = generateStars(200);
    document.getElementById('stars3').style.boxShadow = generateStars(100);
  });
  
