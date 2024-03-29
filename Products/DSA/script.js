const solvedButtons = document.querySelectorAll('.solved-btn');

solvedButtons.forEach(button => {
  const solvedCell = button.parentElement; // Get the parent cell (td)
  const isSolved = solvedCell.dataset.solved === 'true'; // Check initial solved state from data-solved attribute

  button.textContent = isSolved ? 'Solved' : 'Unsolved'; // Set initial button text based on data-solved

  button.addEventListener('click', function() {
    const isCurrentlySolved = this.classList.contains('solved');
    solvedCell.dataset.solved = isCurrentlySolved ? 'false' : 'true'; // Update data-solved attribute

    this.classList.toggle('solved'); // Toggle class for styling
    this.textContent = isCurrentlySolved ? 'Unsolved' : 'Solved'; // Update button text based on click
  });
});
