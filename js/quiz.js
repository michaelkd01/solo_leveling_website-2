// Quiz JavaScript for Solo Leveling Character Quiz

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const quizImage = document.getElementById('quiz-image');
    const quizOptions = document.getElementById('quiz-options');
    const quizSubmit = document.getElementById('quiz-submit');
    const quizResult = document.getElementById('quiz-result');
    const quizNext = document.getElementById('quiz-next');

    // Quiz state
    let currentCharacter = null;
    let selectedOption = null;
    let usedCharacters = [];
    let score = 0;
    let totalQuestions = 0;

    // Initialize the quiz
    initializeQuiz();

    // Event listeners
    quizSubmit.addEventListener('click', checkAnswer);
    quizNext.addEventListener('click', nextQuestion);

    // Function to initialize the quiz
    function initializeQuiz() {
        // Reset quiz state
        usedCharacters = [];
        score = 0;
        totalQuestions = 0;
        
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
        
        // If all characters have been used, reset the used characters array
        if (availableCharacters.length === 0) {
            usedCharacters = [];
            availableCharacters = characters;
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
        
        // If this is the last question, show the final score
        if (totalQuestions === 10) {
            quizResult.textContent = `Quiz complete! Your score: ${score}/10`;
            quizNext.textContent = 'Restart Quiz';
        }
    }

    // Function to load the next question
    function nextQuestion() {
        // If this is the last question, restart the quiz
        if (totalQuestions === 10) {
            quizNext.textContent = 'Next Character';
            initializeQuiz();
            return;
        }
        
        // Load a new question
        loadQuestion();
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
