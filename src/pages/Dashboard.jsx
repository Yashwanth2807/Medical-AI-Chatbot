import React, { useState } from 'react';
import { Activity, Heart, Thermometer, Calendar } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">
            <header className="page-header">
                <div className="header-text">
                    <h1>My Health Overview</h1>
                    <p className="subtitle">Real-time monitoring of your latest vital signs.</p>
                </div>
                <div className="header-actions">
                    <button className="btn btn-secondary">Download Report</button>
                    <button className="btn btn-primary">Add New Vitals</button>
                </div>
            </header>

            <div className="dashboard-grid">
                {/* Vitals Cards */}
                <div className="card stat-card">
                    <div className="icon-wrapper heart">
                        <Heart size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Heart Rate</span>
                        <div className="stat-value">72 <span className="unit">bpm</span></div>
                        <span className="stat-trend positive">Normal range</span>
                    </div>
                </div>

                <div className="card stat-card">
                    <div className="icon-wrapper activity">
                        <Activity size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Blood Pressure</span>
                        <div className="stat-value">120/80 <span className="unit">mmHg</span></div>
                        <span className="stat-trend positive">Optimal</span>
                    </div>
                </div>

                <div className="card stat-card">
                    <div className="icon-wrapper temp">
                        <Thermometer size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Body Temp</span>
                        <div className="stat-value">98.6 <span className="unit">°F</span></div>
                        <span className="stat-trend neutral">Stable</span>
                    </div>
                </div>

                <div className="card calendar-mini">
                    <div className="icon-wrapper cal">
                        <Calendar size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Next Visit</span>
                        <div className="stat-value text-sm">Dec 15</div>
                        <a href="#" className="link-sm">Dr. Sarah Smith</a>
                    </div>
                </div>

                {/* Main Chart Area */}
                <div className="card chart-section">
                    <div className="chart-header">
                        <h3>Weekly Vitals Trend</h3>
                        <div className="chart-controls">
                            <button className="chart-tab active">Heart Rate</button>
                            <button className="chart-tab">Pressure</button>
                        </div>
                    </div>
                    <div className="chart-display">
                        <div className="chart-bars-container">
                            {[65, 70, 68, 74, 72, 75, 72].map((val, idx) => (
                                <div key={idx} className="bar-group">
                                    <div className="bar" style={{ height: `${val}%` }}></div>
                                    <span className="bar-label">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .dashboard-wrapper {
                    padding: 2rem;
                    max-width: 1280px;
                    margin: 0 auto;
                    height: 100%;
                    overflow-y: auto;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .subtitle { color: var(--text-dim); margin-top: 0.25rem; }

                .dashboard-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.5rem;
                }

                .stat-card, .calendar-mini {
                    padding: 1.5rem;
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    grid-column: span 1;
                }

                .chart-section {
                    grid-column: span 4;
                    padding: 2rem;
                    min-height: 400px;
                }

                .icon-wrapper {
                    width: 48px;
                    height: 48px;
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .heart { background-color: #fee2e2; color: #ef4444; }
                .activity { background-color: #e0f2fe; color: #0284c7; }
                .temp { background-color: #fef3c7; color: #f59e0b; }
                .cal { background-color: #f3e8ff; color: #9333ea; }

                .stat-content { display: flex; flex-direction: column; }
                .stat-label { font-size: 0.875rem; color: var(--text-dim); }
                .stat-value { font-size: 1.5rem; font-weight: 700; color: var(--text-main); line-height: 1.2; }
                .unit { font-size: 0.875rem; font-weight: 400; color: var(--text-dim); }
                .stat-trend { font-size: 0.75rem; margin-top: 4px; font-weight: 500; }
                .positive { color: var(--success); }
                .text-sm { font-size: 1.125rem; }
                .link-sm { font-size: 0.75rem; color: var(--primary); margin-top: 4px; }

                /* Chart */
                .chart-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 2rem;
                }
                .chart-controls {
                    display: flex;
                    gap: 0.5rem;
                    background: var(--bg-surface-alt);
                    padding: 4px;
                    border-radius: 8px;
                }
                .chart-tab {
                    padding: 6px 12px;
                    border: none;
                    background: transparent;
                    color: var(--text-dim);
                    font-size: 0.875rem;
                    cursor: pointer;
                    border-radius: 6px;
                }
                .chart-tab.active {
                    background: var(--bg-surface);
                    color: var(--primary);
                    box-shadow: var(--shadow-sm);
                    font-weight: 600;
                }

                .chart-display {
                    height: 300px;
                    width: 100%;
                }
                .chart-bars-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    height: 100%;
                    padding-bottom: 1rem;
                }
                .bar-group {
                    flex: 1;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 8px;
                }
                .bar {
                    width: 40px;
                    background-color: var(--primary);
                    border-radius: 4px 4px 0 0;
                    opacity: 0.8;
                    transition: height 0.3s ease;
                }
                .bar:hover { opacity: 1; }
                .bar-label { font-size: 0.75rem; color: var(--text-dim); }

                @media (max-width: 1024px) {
                    .dashboard-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    .chart-section {
                        grid-column: span 2;
                    }
                }
                @media (max-width: 640px) {
                    .dashboard-grid {
                        grid-template-columns: 1fr;
                    }
                    .chart-section {
                        grid-column: span 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Dashboard;
