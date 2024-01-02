document.addEventListener('DOMContentLoaded', () => {
  
    // Event listener
    const openGameLink = document.getElementById('open-game');
    openGameLink.addEventListener('click', openMemoryGame);
  
    function openMemoryGame() {
      // Open the game in a pop-up window
      const gameWindow = window.open('memory_game.html', 'Memory Game', 'width=600,height=600');
      
      // If popup doesn't work
      if (gameWindow) {
        gameWindow.focus();
      } else {
        alert('Pop-up blocked. Please enable pop-ups for this website.');
      }
    }
  });
  