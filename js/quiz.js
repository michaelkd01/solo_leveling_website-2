// Quiz JavaScript for Solo Leveling Character Quiz

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const quizImage = document.getElementById('quiz-image');
    const quizOptions = document.getElementById('quiz-options');
    const quizSubmit = document.getElementById('quiz-submit');
    const quizResult = document.getElementById('quiz-result');
    const quizNext = document.getElementById('quiz-next');
    const nameModal = document.getElementById('name-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const playerNameInput = document.getElementById('player-name');
    const saveScoreButton = document.getElementById('save-score');
    const finalScoreSpan = document.getElementById('final-score');
    const leaderboardBody = document.getElementById('leaderboard-body');
    const personalBest = document.getElementById('personal-best');
    const questionCounter = document.getElementById('question-counter');
    const currentQuestionSpan = document.getElementById('current-question');
    const quizContainer = document.getElementById('quiz-container');
    const leaderboard = document.getElementById('leaderboard');

    // Navigation
    const navButtons = document.querySelectorAll('.quiz-nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active states
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show/hide sections
            const targetSection = button.getAttribute('data-section');
            if (targetSection === 'quiz') {
                quizContainer.classList.add('active');
                leaderboard.classList.remove('active');
                if (totalQuestions > 0 && totalQuestions <= 10) {
                    questionCounter.classList.add('active');
                }
            } else {
                quizContainer.classList.remove('active');
                leaderboard.classList.add('active');
                questionCounter.classList.remove('active');
            }
        });
    });

    // Quiz state
    let currentCharacter = null;
    let selectedOption = null;
    let usedCharacters = [];
    let score = 0;
    let totalQuestions = 0;

    // Initialize the quiz and leaderboard
    initializeQuiz();
    updateLeaderboard();
    showPersonalBest();

    // Event listeners
    quizSubmit.addEventListener('click', checkAnswer);
    quizNext.addEventListener('click', nextQuestion);
    saveScoreButton.addEventListener('click', saveScore);

    // Function to initialize the quiz
    function initializeQuiz() {
        // Reset quiz state
        usedCharacters = [];
        score = 0;
        totalQuestions = 0;
        
        // Reset UI
        questionCounter.classList.add('active');
        currentQuestionSpan.textContent = '1';
        
        // Start with the first question
        loadQuestion();
    }

    // Function to load a new question
    function loadQuestion() {
        // Reset UI
        quizResult.textContent = '';
        quizSubmit.style.display = 'block';
        quizNext.style.display = 'none';
        selectedOption = null;
        
        // Remove selected class from all options
        const options = quizOptions.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
        });
        
        // Get a random character that hasn't been used yet
        let availableCharacters = characters.filter(character => !usedCharacters.includes(character.id));
        
        // If all characters have been used or we've reached 10 questions, end the quiz
        if (availableCharacters.length === 0 || totalQuestions >= 10) {
            endQuiz();
            return;
        }
        
        // Select a random character
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        currentCharacter = availableCharacters[randomIndex];
        usedCharacters.push(currentCharacter.id);
        
        // Set the image
        quizImage.src = currentCharacter.image;
        quizImage.alt = 'Mystery Character';
        
        // Generate options
        generateOptions();
    }

    // Function to generate quiz options
    function generateOptions() {
        // Clear options
        quizOptions.innerHTML = '';
        
        // Create an array with the correct answer and 3 random incorrect answers
        let options = [currentCharacter];
        
        // Add random incorrect options
        while (options.length < 4) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            const randomCharacter = characters[randomIndex];
            
            // Make sure we don't add duplicates
            if (!options.some(option => option.id === randomCharacter.id)) {
                options.push(randomCharacter);
            }
        }
        
        // Shuffle the options
        options = shuffleArray(options);
        
        // Add options to the DOM
        options.forEach(character => {
            const optionElement = document.createElement('div');
            optionElement.className = 'quiz-option';
            optionElement.dataset.id = character.id;
            optionElement.textContent = character.name;
            
            // Add click event listener
            optionElement.addEventListener('click', function() {
                // Remove selected class from all options
                const allOptions = quizOptions.querySelectorAll('.quiz-option');
                allOptions.forEach(option => option.classList.remove('selected'));
                
                // Add selected class to this option
                this.classList.add('selected');
                
                // Update selected option
                selectedOption = this;
            });
            
            quizOptions.appendChild(optionElement);
        });
    }

    // Function to check the answer
    function checkAnswer() {
        if (!selectedOption) {
            alert('Please select an answer!');
            return;
        }
        
        totalQuestions++;
        currentQuestionSpan.textContent = Math.min(totalQuestions + 1, 10);
        
        // Get the selected character ID
        const selectedCharacterId = parseInt(selectedOption.dataset.id);
        
        // Check if the answer is correct
        const isCorrect = selectedCharacterId === currentCharacter.id;
        
        // Update score
        if (isCorrect) {
            score++;
        }
        
        // Show result
        quizResult.textContent = isCorrect ? 'Correct!' : `Incorrect! The correct answer is ${currentCharacter.name}.`;
        quizResult.style.color = isCorrect ? '#4CAF50' : '#F44336';
        
        // Highlight correct and incorrect answers
        const options = quizOptions.querySelectorAll('.quiz-option');
        options.forEach(option => {
            const optionId = parseInt(option.dataset.id);
            
            if (optionId === currentCharacter.id) {
                option.classList.add('correct');
            } else if (optionId === selectedCharacterId && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // Show next button and hide submit button
        quizSubmit.style.display = 'none';
        quizNext.style.display = 'block';
        
        // If this is the last question, end the quiz
        if (totalQuestions === 10) {
            endQuiz();
        }
    }

    // Function to end the quiz
    function endQuiz() {
        finalScoreSpan.textContent = score;
        modalOverlay.style.display = 'block';
        nameModal.style.display = 'block';
        quizNext.textContent = 'Restart Quiz';
        questionCounter.classList.remove('active');
    }

    // Function to load the next question
    function nextQuestion() {
        // If this is the last question, restart the quiz
        if (totalQuestions === 10) {
            quizNext.textContent = 'Next Character';
            modalOverlay.style.display = 'none';
            nameModal.style.display = 'none';
            initializeQuiz();
            return;
        }
        
        // Load a new question
        loadQuestion();
    }

    // Function to save the score
    function saveScore() {
        const playerName = playerNameInput.value.trim();
        if (!playerName) {
            alert('Please enter your name!');
            return;
        }

        // Get existing scores from localStorage
        const scores = JSON.parse(localStorage.getItem('quizScores') || '[]');

        // Add new score
        const newScore = {
            name: playerName,
            score: score,
            date: new Date().toISOString()
        };

        scores.push(newScore);

        // Sort scores by score (descending) and date (ascending)
        scores.sort((a, b) => b.score - a.score || new Date(a.date) - new Date(b.date));

        // Keep only top 10 scores
        const topScores = scores.slice(0, 10);

        // Save to localStorage
        localStorage.setItem('quizScores', JSON.stringify(topScores));

        // Save personal best for this player
        const personalBests = JSON.parse(localStorage.getItem('personalBests') || '{}');
        if (!personalBests[playerName] || score > personalBests[playerName]) {
            personalBests[playerName] = score;
            localStorage.setItem('personalBests', JSON.stringify(personalBests));
        }

        // Update the leaderboard
        updateLeaderboard();
        showPersonalBest(playerName);

        // Close the modal
        modalOverlay.style.display = 'none';
        nameModal.style.display = 'none';
        playerNameInput.value = '';

        // Switch to leaderboard view
        navButtons[1].click();
    }

    // Function to update the leaderboard
    function updateLeaderboard() {
        const scores = JSON.parse(localStorage.getItem('quizScores') || '[]');
        leaderboardBody.innerHTML = '';

        scores.forEach((score, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${score.name}</td>
                <td>${score.score}/10</td>
                <td>${new Date(score.date).toLocaleDateString()}</td>
            `;
            leaderboardBody.appendChild(row);
        });
    }

    // Function to show personal best
    function showPersonalBest(playerName) {
        const personalBests = JSON.parse(localStorage.getItem('personalBests') || '{}');
        if (playerName && personalBests[playerName]) {
            personalBest.style.display = 'block';
            personalBest.textContent = `Your Personal Best: ${personalBests[playerName]}/10`;
        } else {
            personalBest.style.display = 'none';
        }
    }

    // Helper function to shuffle an array
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
});
