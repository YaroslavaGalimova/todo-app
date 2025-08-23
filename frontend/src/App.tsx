import React from 'react';
import './styles/App.css';
import TaskList from './TaskList';
import { AddForm } from './Forms';

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
      <div className="Body">
        <div className="Sidebar">
            <AddForm />
        </div>
        <div className="MainContent">
          <TaskList />
        </div>
      </div>
      <footer className="Footer">
        <p>© Yara's Todo App. Summer pet-project.</p>
      </footer>
    </>
  );
}

export default App;
