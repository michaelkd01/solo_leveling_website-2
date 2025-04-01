document.addEventListener('DOMContentLoaded', function() {
    // Navigation handling
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            
            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${targetSection}-section`) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Profile management
    const profileGrid = document.getElementById('profile-grid');
    const addProfileBtn = document.getElementById('add-profile-btn');
    let profiles = JSON.parse(localStorage.getItem('solo_leveling_profiles')) || [];

    // Function to display profiles
    function displayProfiles() {
        profileGrid.innerHTML = '';
        profiles.forEach(profile => {
            const profileCard = createProfileCard(profile);
            profileGrid.appendChild(profileCard);
        });
    }

    // Function to create profile card
    function createProfileCard(profile) {
        const card = document.createElement('div');
        card.className = 'profile-card';
        card.innerHTML = `
            <h3>${profile.name}</h3>
            <div class="profile-info">
                <p><strong>Level:</strong> ${profile.level}</p>
                <p><strong>Class:</strong> ${profile.class}</p>
                <p><strong>Rank:</strong> ${profile.rank}</p>
                <p><strong>Description:</strong> ${profile.description || 'No description provided'}</p>
            </div>
            <div class="profile-actions">
                <button class="profile-btn edit-btn" data-id="${profile.id}">Edit</button>
                <button class="profile-btn delete-btn" data-id="${profile.id}">Delete</button>
            </div>
        `;

        // Add event listeners for edit and delete buttons
        const editBtn = card.querySelector('.edit-btn');
        const deleteBtn = card.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => editProfile(profile.id));
        deleteBtn.addEventListener('click', () => deleteProfile(profile.id));

        return card;
    }

    // Function to edit profile
    function editProfile(profileId) {
        const profile = profiles.find(p => p.id === profileId);
        if (!profile) return;

        // Redirect to add-profile.html with profile data
        window.location.href = `add-profile.html?edit=${profileId}`;
    }

    // Function to delete profile
    function deleteProfile(profileId) {
        if (confirm('Are you sure you want to delete this profile?')) {
            profiles = profiles.filter(p => p.id !== profileId);
            localStorage.setItem('solo_leveling_profiles', JSON.stringify(profiles));
            displayProfiles();
        }
    }

    // Add profile button handler
    addProfileBtn.addEventListener('click', () => {
        window.location.href = 'add-profile.html';
    });

    // Initial display of profiles
    displayProfiles();
}); 