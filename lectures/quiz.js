function submitQuiz() {
  // Define correct answers
  const correctAnswers = {
      q1: 'paris',
      q2: 'tokyo'
      // Add more correct answers as needed
  };

  // Initialize variables for scoring
  let score = 0;
  let missedQuestions = [];

  // Check each question
  for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
      const questionName = 'q' + i;
      const userAnswer = document.querySelector(`input[name="${questionName}"]:checked`);

      if (userAnswer) {
          if (userAnswer.value === correctAnswers[questionName]) {
              score++;
          } else {
              missedQuestions.push(questionName);
          }
      } else {
          missedQuestions.push(questionName);
      }
  }

  // Display results
  displayResults(score, missedQuestions);
}

function displayResults(score, missedQuestions) {
  const scoreElement = document.getElementById('score');
  const missedQuestionsElement = document.getElementById('missed-questions');
  const resultsContainer = document.getElementById('results-container');

  // Display score
  scoreElement.textContent = `Your Score: ${score} out of ${Object.keys(correctAnswers).length}`;

  // Display missed questions
  if (missedQuestions.length > 0) {
      missedQuestionsElement.textContent = `Missed Questions: ${missedQuestions.join(', ')}`;
  } else {
      missedQuestionsElement.textContent = 'You answered all questions correctly!';
  }

  // Show results container
  resultsContainer.style.display = 'block';
}
