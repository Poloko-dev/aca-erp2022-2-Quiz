import React, { useEffect, useState } from 'react';
import './questionsPage.css';

interface Question {
  _id?: string;
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const QuestionsPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [reviewMode, setReviewMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://aca-erp2022-2-quiz.onrender.com/api/questions',
       {
        credentials: 'include',
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load questions');
        return res.json();
      })
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleOptionSelect = (option: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questions[currentIndex].id]: option,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    let total = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.answer) total++;
    });
    setScore(total);
    setReviewMode(true);

    fetch('https://aca-erp2022-2-quiz.onrender.com/api/score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', 
        body: JSON.stringify({ score: total })
      })
    .then(res => res.json())
    .then(data => console.log('Score saved:', data))
    .catch(err => console.error('Failed to save score', err));
  };

  if (loading) return <div>Loading questions...</div>;
  if (error) return <div>Error: {error}</div>;
  if (questions.length === 0) return <div>No questions found.</div>;

  return (
    <div className="questions-container">
      <header className="header-gradient">
        <h1>React + GitHub Beginner Assessment</h1>
        <p>
          {reviewMode
            ? 'Review Mode'
            : `Question ${currentIndex + 1} of ${questions.length}`}
        </p>
      </header>

      <main className="question-card">
        {reviewMode ? (
          <>
            {questions.map((q, index) => (
              <div key={q.id} className="question-review-card">
                <h3>
                  Q{index + 1}: {q.question}
                </h3>
                <div className="options-container">
                  {q.options.map((option) => {
                    const isCorrect = option === q.answer;
                    const isUserChoice = userAnswers[q.id] === option;
                    return (
                      <div
                        key={option}
                        className={`option-button
                          ${isCorrect ? 'correct' : ''}
                          ${isUserChoice && !isCorrect ? 'wrong' : ''}
                        `}
                      >
                        {option}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="score-display">
              Your Score: {score} / {questions.length}
            </div>
          </>
        ) : (
          <>
            <h2>{questions[currentIndex].question}</h2>
            <div className="options-container">
              {questions[currentIndex].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className={`option-button ${
                    userAnswers[questions[currentIndex].id] === option
                      ? 'selected'
                      : ''
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="navigation-buttons">
              <button onClick={handlePrevious} disabled={currentIndex === 0}>
                Previous
              </button>
              {currentIndex < questions.length - 1 ? (
                <button onClick={handleNext}>Next</button>
              ) : (
                <button onClick={handleSubmit}>Submit</button>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default QuestionsPage;
