// Add Character functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-character-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const fileInput = document.getElementById('character-image');
    const fileName = document.getElementById('file-name');
    const previewImg = document.getElementById('preview-img');
    const addAbilityBtn = document.getElementById('add-ability-btn');
    const abilitiesContainer = document.getElementById('abilities-container');
    
    // Handle file selection for image preview
    fileInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const file = this.files[0];
            fileName.textContent = file.name;
            
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
                previewImg.src = e.target.result;
                previewImg.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Add ability field
    addAbilityBtn.addEventListener('click', function() {
        addAbilityField();
    });
    
    // Remove ability field
    abilitiesContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-ability')) {
            const abilityGroup = e.target.parentElement;
            if (abilitiesContainer.children.length > 1) {
                abilityGroup.remove();
            } else {
                // Clear the input instead of removing the last ability field
                abilityGroup.querySelector('.ability-input').value = '';
            }
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        const name = document.getElementById('character-name').value.trim();
        const power = parseInt(document.getElementById('character-power').value);
        const description = document.getElementById('character-description').value.trim();
        
        if (!name) {
            showError('Character name is required');
            return;
        }
        
        if (isNaN(power) || power < 1 || power > 100) {
            showError('Power level must be a number between 1 and 100');
            return;
        }
        
        if (!description) {
            showError('Character description is required');
            return;
        }
        
        // Get abilities
        const abilityInputs = document.querySelectorAll('.ability-input');
        const abilities = [];
        abilityInputs.forEach(input => {
            const ability = input.value.trim();
            if (ability) {
                abilities.push(ability);
            }
        });
        
        // Create new character object
        const newCharacter = {
            id: generateUniqueId(),
            name: name,
            title: document.getElementById('character-title').value.trim(),
            power: power,
            description: description,
            abilities: abilities,
            image: previewImg.style.display === 'block' ? previewImg.src : null
        };
        
        // Add character to the database
        addCharacterToDatabase(newCharacter);
        
        // Show success message
        showSuccess('Character added successfully!');
        
        // Reset form
        form.reset();
        previewImg.style.display = 'none';
        fileName.textContent = '';
        
        // Reset abilities to just one empty field
        abilitiesContainer.innerHTML = '';
        addAbilityField();
    });
    
    // Helper function to add ability field
    function addAbilityField() {
        const abilityGroup = document.createElement('div');
        abilityGroup.className = 'ability-input-group';
        abilityGroup.innerHTML = `
            <input type="text" class="form-control ability-input" placeholder="Enter an ability">
            <button type="button" class="remove-ability">×</button>
        `;
        abilitiesContainer.appendChild(abilityGroup);
    }
    
    // Helper function to generate unique ID
    function generateUniqueId() {
        // Find the highest existing ID and increment by 1
        let maxId = 0;
        characters.forEach(character => {
            if (character.id > maxId) {
                maxId = character.id;
            }
        });
        return maxId + 1;
    }
    
    // Helper function to add character to database
    function addCharacterToDatabase(character) {
        // Add to characters array
        characters.push(character);
        
        // Save to localStorage
        localStorage.setItem('solo_leveling_characters', JSON.stringify(characters));
        
        // Update characters.js in memory
        updateCharactersInMemory();
    }
    
    // Helper function to update characters in memory
    function updateCharactersInMemory() {
        // This function ensures that the characters array is updated in memory
        // and will be available to other pages without refreshing
        window.dispatchEvent(new CustomEvent('charactersUpdated', {
            detail: { characters: characters }
        }));
    }
    
    // Helper function to show success message
    function showSuccess(message) {
        successMessage.textContent = message;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
    
    // Helper function to show error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
    
    // Initialize with one ability field
    addAbilityField();
    
    // Load characters from localStorage if available
    function loadCharactersFromStorage() {
        const storedCharacters = localStorage.getItem('solo_leveling_characters');
        if (storedCharacters) {
            const parsedCharacters = JSON.parse(storedCharacters);
            // Update the global characters array
            characters.length = 0; // Clear the array
            parsedCharacters.forEach(char => characters.push(char)); // Add all characters
        } else {
            // If no stored characters, save the current ones
            localStorage.setItem('solo_leveling_characters', JSON.stringify(characters));
        }
    }
    
    // Load characters when page loads
    loadCharactersFromStorage();
});
