// Shared localStorage handler for character images
// This script ensures image updates are synchronized across all pages

document.addEventListener('DOMContentLoaded', function() {
    // Load saved character data from localStorage
    loadCharactersFromStorage();
    
    // Listen for storage events from other tabs/pages
    window.addEventListener('storage', function(e) {
        if (e.key === 'solo_leveling_characters') {
            // Reload characters when data changes in another tab/page
            loadCharactersFromStorage();
            
            // Refresh the current page display
            if (typeof refreshCharacterDisplay === 'function') {
                refreshCharacterDisplay();
            } else if (typeof loadCharacters === 'function') {
                loadCharacters();
            } else if (typeof initializeQuiz === 'function') {
                initializeQuiz();
            }
        }
    });
    
    // Function to load characters from localStorage
    function loadCharactersFromStorage() {
        const storedCharacters = localStorage.getItem('solo_leveling_characters');
        if (storedCharacters) {
            try {
                const parsedCharacters = JSON.parse(storedCharacters);
                // Update the global characters array
                window.characters = parsedCharacters;
            } catch (e) {
                console.error('Error parsing stored characters:', e);
            }
        }
    }
});

// Add refresh functions to each page type
function refreshCharacterDisplay() {
    // For rankings page
    const characterGrid = document.getElementById('character-grid');
    if (characterGrid) {
        // Clear existing content
        characterGrid.innerHTML = '';
        
        // Re-render characters
        const viewMode = document.querySelector('.toggle-btn.active').id === 'detailed-view-btn' 
            ? 'detailed' 
            : 'simple';
        
        displayCharacters(viewMode);
    }
    
    // For drag area
    const dragArea = document.getElementById('drag-area');
    if (dragArea) {
        // Clear existing content
        dragArea.innerHTML = '';
        
        // Re-render draggable items
        setupDraggableItems();
    }
}
