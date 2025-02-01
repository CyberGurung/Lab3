// script.js

const colorButtons = document.querySelectorAll('.color-btn');
const resetButton = document.querySelector('.reset-btn');
const body = document.body;

// Add event listener to color change buttons
colorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const color = button.getAttribute('data-color');
        body.style.backgroundColor = color;
    });
});

// Add event listener to reset button
resetButton.addEventListener('click', function() {
    body.style.backgroundColor = ''; // Reset to default
});
