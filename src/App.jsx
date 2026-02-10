import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <style>{`
          /* Reset & Base for App-Like Feel */
          :root {
            --header-height: 80px;
          }
          
          body, html {
            height: 100%;
            overflow: hidden; /* Prevent body scroll */
            margin: 0;
            padding: 0;
          }

          .app-container {
            display: flex;
            flex-direction: column;
            height: 100vh; /* Strict height */
            background: var(--bg-deep); /* Ensure background covers all */
            overflow: hidden;
            position: relative;
          }

          .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden; /* Container doesn't scroll, children do */
            position: relative;
            z-index: 10;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
