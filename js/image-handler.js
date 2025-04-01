// Update character.js to handle missing images
document.addEventListener('DOMContentLoaded', function() {
    // Add placeholder image handling
    characters.forEach(character => {
        // Check if the image exists, if not use placeholder
        const img = new Image();
        img.onerror = function() {
            character.image = 'images/placeholders/placeholder.jpg';
        };
        img.src = character.image;
    });
});
