document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profile-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const submitBtn = profileForm.querySelector('.submit-btn');

    // Initialize profiles array from localStorage or create empty array
    let profiles = JSON.parse(localStorage.getItem('solo_leveling_profiles')) || [];

    // Check if we're editing an existing profile
    const urlParams = new URLSearchParams(window.location.search);
    const editProfileId = urlParams.get('edit');

    if (editProfileId) {
        const profile = profiles.find(p => p.id === parseInt(editProfileId));
        if (profile) {
            // Populate form with existing profile data
            document.getElementById('player-name').value = profile.name;
            document.getElementById('player-level').value = profile.level;
            document.getElementById('player-class').value = profile.class;
            document.getElementById('player-rank').value = profile.rank;
            document.getElementById('player-description').value = profile.description || '';
            
            // Update form title and button text
            document.querySelector('h1').textContent = 'Edit Player Profile';
            submitBtn.textContent = 'Update Profile';
        }
    }

    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const playerName = document.getElementById('player-name').value;
        const playerLevel = parseInt(document.getElementById('player-level').value);
        const playerClass = document.getElementById('player-class').value;
        const playerRank = document.getElementById('player-rank').value;
        const playerDescription = document.getElementById('player-description').value;

        try {
            if (editProfileId) {
                // Update existing profile
                const profileIndex = profiles.findIndex(p => p.id === parseInt(editProfileId));
                if (profileIndex !== -1) {
                    profiles[profileIndex] = {
                        ...profiles[profileIndex],
                        name: playerName,
                        level: playerLevel,
                        class: playerClass,
                        rank: playerRank,
                        description: playerDescription
                    };
                }
            } else {
                // Create new profile
                const newProfile = {
                    id: Date.now(),
                    name: playerName,
                    level: playerLevel,
                    class: playerClass,
                    rank: playerRank,
                    description: playerDescription,
                    createdAt: new Date().toISOString()
                };
                profiles.push(newProfile);
            }

            // Save to localStorage
            localStorage.setItem('solo_leveling_profiles', JSON.stringify(profiles));
            
            // Show success message
            successMessage.textContent = editProfileId ? 'Profile updated successfully!' : 'Profile added successfully!';
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            
            // Reset form
            profileForm.reset();
            
            // Redirect back to profiles section after 2 seconds
            setTimeout(() => {
                window.location.href = 'index.html#profiles';
            }, 2000);
        } catch (error) {
            // Show error message
            errorMessage.textContent = 'Error saving profile. Please try again.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            console.error('Error saving profile:', error);
        }
    });
}); 