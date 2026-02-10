import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MessageCircle, Activity, Home, Bell, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header" role="banner">
      <div className="header-container">
        {/* Brand */}
        <Link to="/" className="branding" aria-label="MedGuide - Home">
          <div className="brand-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#0284c7" />
              <path d="M2 17L12 22L22 17" fill="#0284c7" className="opacity-70" />
              <path d="M2 12L12 17L22 12" fill="#0284c7" className="opacity-80" />
            </svg>
          </div>
          <span className="brand-text">MedGuide</span>
        </Link>

        {/* Mobile Menu Toggle (Accessible) */}
        <button
          className="menu-toggle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <nav className={`nav-main ${isMenuOpen ? 'nav-open' : ''}`} role="navigation">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <Home size={18} aria-hidden="true" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/chat" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <MessageCircle size={18} aria-hidden="true" />
            <span>Consultation</span>
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <Activity size={18} aria-hidden="true" />
            <span>My Health</span>
          </NavLink>
        </nav>

        {/* User Tools */}
        <div className="header-tools">
          <button className="tool-btn" aria-label="Notifications">
            <Bell size={20} />
            <span className="notification-dot" aria-label="New notification"></span>
          </button>
          <div className="user-profile" role="button" aria-label="User Profile" tabIndex="0">
            <div className="user-avatar text-sm">JP</div>
          </div>
        </div>
      </div>

      <style>{`
                .header {
                    background: var(--bg-surface);
                    border-bottom: 1px solid var(--border-light);
                    height: var(--header-height);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    width: 100%;
                }

                .header-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .branding {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                    color: var(--text-main);
                }

                .brand-text {
                    font-size: 1.25rem; /* ~20px */
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    color: var(--text-main);
                }

                .nav-main {
                    display: flex;
                    gap: 2rem;
                }

                .nav-link {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--text-body);
                    font-weight: 500;
                    font-size: 0.9375rem;
                    padding: 0.5rem 0;
                    border-bottom: 2px solid transparent;
                    transition: all 0.2s ease;
                }

                .nav-link:hover {
                    color: var(--primary);
                    text-decoration: none; /* Override universal hover */
                }

                .nav-link.active {
                    color: var(--primary);
                    border-bottom-color: var(--primary);
                }

                .header-tools {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                }

                .tool-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-dim);
                    cursor: pointer;
                    position: relative;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: color 0.2s;
                }

                .tool-btn:hover {
                    color: var(--primary);
                    background-color: var(--bg-app);
                }

                .notification-dot {
                    position: absolute;
                    top: 6px;
                    right: 6px;
                    width: 8px;
                    height: 8px;
                    background: var(--accent);
                    border-radius: 50%;
                    border: 2px solid var(--bg-surface);
                }

                .user-avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background-color: var(--primary-subtle);
                    color: var(--primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    font-size: 0.875rem;
                    border: 1px solid var(--border-light);
                }

                .menu-toggle {
                    display: none;
                    background: transparent;
                    border: none;
                    color: var(--text-main);
                    cursor: pointer;
                }

                @media (max-width: 768px) {
                    .menu-toggle {
                        display: block;
                    }
                    .nav-main {
                        display: none;
                        position: absolute;
                        top: var(--header-height);
                        left: 0;
                        width: 100%;
                        background: var(--bg-surface);
                        flex-direction: column;
                        padding: 1rem;
                        box-shadow: var(--shadow-md);
                        gap: 1rem;
                        border-bottom: 1px solid var(--border-light);
                    }
                    .nav-open {
                        display: flex;
                    }
                    .header-tools {
                        display: none; 
                    }
                }
            `}</style>
    </header>
  );
};

export default Header;
