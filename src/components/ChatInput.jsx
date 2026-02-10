import React, { useState } from 'react';
import { Send, FileText, Mic, Paperclip } from 'lucide-react';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-input-area">
      <form className="chat-input-form" onSubmit={handleSubmit} role="form">
        <div className="input-group">
          <button type="button" className="btn-icon" aria-label="Upload report">
            <Paperclip size={20} />
          </button>

          <input
            type="text"
            className="form-control"
            placeholder="Type your symptoms here..."
            aria-label="Message input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className={`btn-send ${message.trim() ? 'active' : ''}`}
            disabled={!message.trim()}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="input-feedback">
          <span className="secure-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Encrypted & Private
          </span>
        </div>
      </form>

      <style>{`
                .chat-input-area {
                    padding: 1rem 1.5rem;
                    background-color: var(--bg-surface);
                    border-top: 1px solid var(--border-light);
                    position: sticky;
                    bottom: 0;
                }

                .chat-input-form {
                    max-width: 800px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .input-group {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    background-color: var(--bg-surface-alt);
                    border: 1px solid var(--border-light);
                    border-radius: var(--radius-lg); /* Rounded pills */
                    padding: 0.5rem 0.75rem;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                .input-group:focus-within {
                    border-color: var(--border-focus);
                    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
                }

                .form-control {
                    flex: 1;
                    border: none;
                    background: transparent;
                    font-size: 1rem;
                    color: var(--text-main);
                    padding: 0.5rem;
                }

                .form-control:focus {
                    outline: none;
                }

                .btn-icon {
                    background: transparent;
                    border: none;
                    color: var(--text-dim);
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: all 0.2s;
                }

                .btn-icon:hover {
                    color: var(--text-main);
                    background-color: var(--border-light);
                }

                .btn-send {
                    background-color: var(--border-light);
                    color: var(--text-dim);
                    border: none;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: not-allowed;
                    transition: all 0.2s;
                }

                .btn-send.active {
                    background-color: var(--primary);
                    color: white;
                    cursor: pointer;
                }

                .btn-send.active:hover {
                    background-color: var(--primary-hover);
                }

                .input-feedback {
                    display: flex;
                    justify-content: center;
                }

                .secure-badge {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 0.75rem;
                    color: var(--text-dim);
                }
            `}</style>
    </div>
  );
};

export default ChatInput;
