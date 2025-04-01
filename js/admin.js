// Admin panel functionality for image management
document.addEventListener('DOMContentLoaded', function() {
    const imageManager = document.getElementById('image-manager');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    // Load saved images from localStorage
    loadSavedImages();
    
    // Generate character cards for all characters
    function generateCharacterCards() {
        imageManager.innerHTML = '';
        
        characters.forEach(character => {
            const card = document.createElement('div');
            card.className = 'character-card';
            
            // Get image source - either from localStorage or default
            const savedImage = localStorage.getItem(`character_image_${character.id}`);
            const imageSrc = savedImage || character.image || 'images/placeholders/placeholder.jpg';
            
            card.innerHTML = `
                <h3>${character.name}</h3>
                <img src="${imageSrc}" alt="${character.name}" class="character-image" id="img-${character.id}">
                <div class="upload-form">
                    <label for="file-${character.id}" class="file-label">Choose Image</label>
                    <input type="file" id="file-${character.id}" class="file-input" accept="image/*">
                    <div class="file-name" id="filename-${character.id}"></div>
                    <button class="upload-btn" data-id="${character.id}">Upload</button>
                </div>
            `;
            
            imageManager.appendChild(card);
            
            // Add event listeners for file selection
            const fileInput = document.getElementById(`file-${character.id}`);
            const filenameDisplay = document.getElementById(`filename-${character.id}`);
            
            fileInput.addEventListener('change', function() {
                if (this.files && this.files[0]) {
                    filenameDisplay.textContent = this.files[0].name;
                }
            });
        });
        
        // Add event listeners for upload buttons
        document.querySelectorAll('.upload-btn').forEach(button => {
            button.addEventListener('click', function() {
                const characterId = this.getAttribute('data-id');
                const fileInput = document.getElementById(`file-${characterId}`);
                
                if (fileInput.files && fileInput.files[0]) {
                    uploadImage(characterId, fileInput.files[0]);
                } else {
                    showError('Please select an image file first');
                }
            });
        });
    }
    
    // Upload and save image
    function uploadImage(characterId, file) {
        // Validate file is an image
        if (!file.type.match('image.*')) {
            showError('Please select a valid image file');
            return;
        }
        
        // Size validation (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            showError('Image file is too large (max 5MB)');
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Save image to localStorage
            localStorage.setItem(`character_image_${characterId}`, e.target.result);
            
            // Update image in the UI
            const img = document.getElementById(`img-${characterId}`);
            img.src = e.target.result;
            
            // Update character object
            const character = characters.find(c => c.id == characterId);
            if (character) {
                character.image = e.target.result;
                
                // Save updated characters array to localStorage for cross-page synchronization
                localStorage.setItem('solo_leveling_characters', JSON.stringify(characters));
            }
            
            // Show success message
            showSuccess('Image uploaded successfully!');
            
            // Clear filename display
            document.getElementById(`filename-${characterId}`).textContent = '';
        };
        
        reader.onerror = function() {
            showError('Error reading the image file');
        };
        
        reader.readAsDataURL(file);
    }
    
    // Load saved images from localStorage
    function loadSavedImages() {
        characters.forEach(character => {
            const savedImage = localStorage.getItem(`character_image_${character.id}`);
            if (savedImage) {
                character.image = savedImage;
            }
        });
    }
    
    // Show success message
    function showSuccess(message) {
        successMessage.textContent = message;
        successMessage.style.display = 'block';
        
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }
    
    // Show error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
    
    // Initialize the admin panel
    generateCharacterCards();
});
