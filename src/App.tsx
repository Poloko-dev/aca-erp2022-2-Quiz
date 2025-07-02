import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './aca.png';
import './App.css';
import QuestionsPage from './questionsPage';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{ maxWidth: 150, maxHeight: 150 }} className="App-logo" alt="logo" />
        <h1>Welcome to AfricaCodeAcademy</h1>
        <Link to="/questions" className="App-link">
          Proceed to assessments
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
