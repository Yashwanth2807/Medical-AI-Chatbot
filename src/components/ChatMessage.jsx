import React from 'react';
import { User, Bot, CheckCircle } from 'lucide-react';

const ChatMessage = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`message-row ${isBot ? 'bot-row' : 'user-row'}`}>
      <div className={`message-avatar ${isBot ? 'bot-avatar-wrap' : 'user-avatar-wrap'}`} aria-hidden="true">
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>

      <div className={`message-card ${isBot ? 'bot-card' : 'user-card'}`}>
        <div className="message-header">
          <span className="sender-name">{isBot ? 'MedGuide AI' : 'You'}</span>
          <span className="message-time">{message.time}</span>
        </div>
        <div className="message-body">
          {message.text}
        </div>
        {isBot && (
          <div className="message-footer">
            <span className="verify-badge">
              <CheckCircle size={12} className="text-success" />
              AI Response
            </span>
          </div>
        )}
      </div>

      <style>{`
                .message-row {
                    display: flex;
                    gap: 1rem;
                    max-width: 80%;
                    width: 100%;
                }

                .bot-row {
                    align-self: flex-start;
                }

                .user-row {
                    align-self: flex-end;
                    flex-direction: row-reverse;
                }

                .message-avatar {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    margin-top: 4px;
                }

                .bot-avatar-wrap {
                    background-color: var(--primary-subtle);
                    color: var(--primary);
                }

                .user-avatar-wrap {
                    background-color: var(--border-light);
                    color: var(--text-dim);
                }

                .message-card {
                    padding: 1rem;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-sm);
                    position: relative;
                }

                .bot-card {
                    background-color: var(--bg-surface);
                    border: 1px solid var(--border-light);
                    border-top-left-radius: 2px;
                }

                .user-card {
                    background-color: var(--primary-subtle); /* Very soft blue */
                    border: 1px solid transparent;
                    border-top-right-radius: 2px;
                }

                .message-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                    font-size: 0.75rem;
                }

                .sender-name {
                    font-weight: 600;
                    color: var(--text-main);
                }

                .message-time {
                    color: var(--text-dim);
                }

                .message-body {
                    color: var(--text-body);
                    line-height: 1.5;
                    font-size: 0.9375rem;
                    white-space: pre-wrap;
                }

                .message-footer {
                    margin-top: 0.5rem;
                    padding-top: 0.5rem;
                    border-top: 1px solid var(--border-light);
                    display: flex;
                    justify-content: flex-end;
                }

                .verify-badge {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 0.75rem;
                    color: var(--text-dim);
                }
                
                .text-success {
                    color: var(--success);
                }
            `}</style>
    </div>
  );
};

export default ChatMessage;
