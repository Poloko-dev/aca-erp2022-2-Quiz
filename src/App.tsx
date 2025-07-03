import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './aca.png';
import './App.css';
import QuestionsPage from './questionsPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{ maxWidth: 150, maxHeight: 150 }} className="App-logo" alt="logo" />
        <h1>Welcome to AfricaCodeAcademy</h1>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <Link to="/login" className="App-link">Login</Link>
          <Link to="/register" className="App-link">Register</Link>
        </div>
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
