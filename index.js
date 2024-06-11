

document.getElementById('expandButton').addEventListener('click', function() {
    const hiddenImages = document.querySelectorAll('.image.hidden');
    hiddenImages.forEach(image => {
        image.classList.remove('hidden');
    });
    this.style.display = 'none'; // Hide the "Check All Projects" button
    document.getElementById('collapseButton').style.display = 'inline-block'; // Show the "Show Less" button
});

document.getElementById('collapseButton').addEventListener('click', function() {
    const hiddenImages = document.querySelectorAll('.image:not(.hidden)');
    hiddenImages.forEach(image => {
        image.classList.add('hidden');
    });
    this.style.display = 'none'; // Hide the "Show Less" button
    document.getElementById('expandButton').style.display = 'inline-block'; // Show the "Check All Projects" button
});




function selectProduct(button) {
    // Remove 'selected' class from all select buttons
    const selectButtons = document.querySelectorAll('.select-button');
    selectButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Add 'selected' class to the clicked button
    button.classList.add('selected');
    
    // Enable the Add to Cart button
    document.getElementById('addToCartButton').disabled = false;
}

// Optional: Disable Add to Cart button when the page loads
window.onload = function() {
    document.getElementById('addToCartButton').disabled = true;
};
