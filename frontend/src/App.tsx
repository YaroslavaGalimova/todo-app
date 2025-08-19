import React from 'react';
import './App.css';
import TaskList from './TaskList';

function App() {
  return (
    <>
      <header className="Header">
        <h1 className="MainName">Todo App</h1>
      </header>
      <nav className="Navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tasks">Tasks</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <TaskList />
      <footer className="Footer">
        <p>© Yara's Todo App. Summer pet-project.</p>
      </footer>
    </>
  );
}

export default App;
