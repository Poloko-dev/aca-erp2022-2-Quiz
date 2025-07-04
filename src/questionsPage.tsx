import React, { useEffect, useState } from 'react';
import './questionsPage.css';

interface Question {
  _id?: string;
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface LeaderboardEntry {
  userId: string;
  email: string;
  score: number;
}

const QuestionsPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [reviewMode, setReviewMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not authenticated');
      setLoading(false);
      return;
    }

    fetch('https://aca-erp2022-2-quiz.onrender.com/api/questions', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          throw new Error('Unauthorized - please login again');
        }
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

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Not authenticated');
      return;
    }

    fetch('https://aca-erp2022-2-quiz.onrender.com/api/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ score: total }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to save score');
        return res.json();
      })
      .then((data) => {
        console.log('Score saved:', data);
        setCurrentUserId(data.userId); // Expect backend to return userId
        fetchLeaderboard(token);
      })
      .catch((err) => console.error('Failed to save score', err));
  };

  const fetchLeaderboard = (token: string) => {
    fetch('https://aca-erp2022-2-quiz.onrender.com/api/score/leaderboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setLeaderboard(data))
      .catch((err) => console.error('Failed to fetch leaderboard', err));
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
          <div className="review-leaderboard-container">
            <div className="review-section">
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
            </div>

            <div className="leaderboard">
              <h3>Leaderboard</h3>
              <ul>
                {leaderboard.map((entry, index) => (
                  <li
                    key={entry.userId}
                    style={{
                      fontWeight:
                        entry.userId === currentUserId ? 'bold' : 'normal',
                      color:
                        entry.userId === currentUserId ? 'green' : 'black',
                    }}
                  >
                    {index + 1}. {entry.email} - {entry.score}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
