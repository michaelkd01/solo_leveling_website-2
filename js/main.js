// Main JavaScript for Solo Leveling Character Rankings

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const characterGrid = document.getElementById('character-grid');
    const simpleViewBtn = document.getElementById('simple-view-btn');
    const detailedViewBtn = document.getElementById('detailed-view-btn');
    const dragArea = document.getElementById('drag-area');
    const customRankingResult = document.getElementById('custom-ranking-result');
    const saveRankingBtn = document.getElementById('save-ranking');

    // Initialize the page
    initializeCharacterGrid();
    initializeDragArea();

    // Event listeners for view toggle
    simpleViewBtn.addEventListener('click', function() {
        simpleViewBtn.classList.add('active');
        detailedViewBtn.classList.remove('active');
        characterGrid.classList.remove('detailed-view');
        initializeCharacterGrid();
    });

    detailedViewBtn.addEventListener('click', function() {
        detailedViewBtn.classList.add('active');
        simpleViewBtn.classList.remove('active');
        characterGrid.classList.add('detailed-view');
        initializeCharacterGrid();
    });

    // Save ranking button event listener
    saveRankingBtn.addEventListener('click', saveCustomRanking);

    // Function to initialize the character grid
    function initializeCharacterGrid() {
        // Clear the grid
        characterGrid.innerHTML = '';
        
        // Check if we're in detailed view
        const isDetailedView = characterGrid.classList.contains('detailed-view');
        
        // Add character cards to the grid
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';
            characterCard.dataset.id = character.id;
            
            // Create the HTML for the character card
            let cardHTML = `
                <div class="character-rank">${character.rank}</div>
                <img src="${character.image}" alt="${character.name}" class="character-image">
                <div class="character-info">
                    <h3 class="character-name">${character.name}</h3>
                    <p class="character-title">${character.title}</p>
            `;
            
            // Add additional information for detailed view
            if (isDetailedView) {
                cardHTML += `
                    <p class="character-description">${character.description}</p>
                    <div class="character-abilities">
                        <h4>Abilities</h4>
                        <ul>
                            ${character.abilities.map(ability => `<li>${ability}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            cardHTML += `</div>`;
            characterCard.innerHTML = cardHTML;
            
            characterGrid.appendChild(characterCard);
        });
    }

    // Function to initialize the drag area
    function initializeDragArea() {
        // Clear the drag area
        dragArea.innerHTML = '';
        
        // Add draggable character items to the drag area
        characters.forEach(character => {
            const dragItem = document.createElement('div');
            dragItem.className = 'drag-item';
            dragItem.draggable = true;
            dragItem.dataset.id = character.id;
            
            dragItem.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <p>${character.name}</p>
            `;
            
            // Add drag event listeners
            dragItem.addEventListener('dragstart', handleDragStart);
            dragItem.addEventListener('dragover', handleDragOver);
            dragItem.addEventListener('drop', handleDrop);
            dragItem.addEventListener('dragend', handleDragEnd);
            
            dragArea.appendChild(dragItem);
        });
    }

    // Drag and drop functionality
    let draggedItem = null;

    function handleDragStart(e) {
        draggedItem = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
        this.style.opacity = '0.4';
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        return false;
    }

    function handleDrop(e) {
        e.stopPropagation();
        
        if (draggedItem !== this) {
            // Swap the positions of the dragged item and the drop target
            const allItems = Array.from(dragArea.querySelectorAll('.drag-item'));
            const draggedIndex = allItems.indexOf(draggedItem);
            const dropIndex = allItems.indexOf(this);
            
            if (draggedIndex < dropIndex) {
                dragArea.insertBefore(draggedItem, this.nextSibling);
            } else {
                dragArea.insertBefore(draggedItem, this);
            }
        }
        
        return false;
    }

    function handleDragEnd() {
        this.style.opacity = '1';
        draggedItem = null;
    }

    // Function to save custom ranking
    function saveCustomRanking() {
        const customRanking = Array.from(dragArea.querySelectorAll('.drag-item')).map((item, index) => {
            const characterId = parseInt(item.dataset.id);
            const character = characters.find(c => c.id === characterId);
            return {
                rank: index + 1,
                name: character.name,
                title: character.title,
                image: character.image
            };
        });
        
        // Display the custom ranking
        customRankingResult.innerHTML = '<h3>Your Custom Ranking</h3>';
        
        const rankingList = document.createElement('ol');
        customRanking.forEach(character => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="custom-rank-item">
                    <img src="${character.image}" alt="${character.name}" width="50" height="50">
                    <div>
                        <strong>${character.name}</strong>
                        <span>${character.title}</span>
                    </div>
                </div>
            `;
            rankingList.appendChild(listItem);
        });
        
        customRankingResult.appendChild(rankingList);
        
        // Show a success message
        alert('Your custom ranking has been saved!');
    }
});
