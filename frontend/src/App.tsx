import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import TaskList from './TaskList';
import { AddForm } from './Forms';
import About from './About';
import { Link } from 'react-router-dom';
import FinishedTasksList from './FinishedTasksList';

function App() {
  return (
    <Router>
      <header className="Header">
        <h1 className="MainName">Todo App</h1>
      </header>
      <nav className="Navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className="Body">
        <Routes>
          <Route path="/" element={
            <>
              <div className="Sidebar">
                <AddForm />
              </div>
              <div className="MainContent">
                <TaskList />
                <FinishedTasksList />
              </div>
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <footer className="Footer">
        <p>© Yara's Todo App. Summer pet-project.</p>
      </footer>
    </Router>
  );
}

export default App;