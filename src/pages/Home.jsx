import React from 'react';
import { ArrowRight, Shield, Activity, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-grid container">
                <div className="hero-text">
                    <span className="badge-primary">Trusted by 10,000+ Patients</span>
                    <h1>Your Health Journey, <br /><span className="text-highlight">Simplified by Intelligence.</span></h1>
                    <p className="lead-text">
                        MedGuide provides instant, preliminary medical guidance using advanced AI.
                        Understand your symptoms, prepare for doctor visits, and access meaningful health insights 24/7.
                    </p>
                    <div className="cta-group">
                        <Link to="/chat" className="btn btn-primary btn-lg">
                            Start Secure Consultation <ArrowRight size={18} />
                        </Link>
                        <a href="#how-it-works" className="btn btn-secondary btn-lg">
                            How It Works
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="trust-card card">
                        <div className="trust-header">
                            <Shield className="text-primary" size={24} />
                            <div>
                                <h4>Medical Grade Security</h4>
                                <p className="text-sm text-dim">HIPAA Compliant Data Handling</p>
                            </div>
                        </div>
                        <div className="trust-metric">
                            <Activity className="text-success" size={20} />
                            <span>99.9% Uptime for Critical Access</span>
                        </div>
                        <div className="trust-metric">
                            <Clock className="text-warning" size={20} />
                            <span>Available 24/7/365</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features / Value Prop */}
            <section className="features-section bg-alt" id="how-it-works">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose MedGuide?</h2>
                        <p className="text-dim">Built with patient safety and data privacy as our core foundation.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card card">
                            <div className="icon-wrapper bg-primary-subtle">
                                <Activity size={24} className="text-primary" />
                            </div>
                            <h3>Instant Triage</h3>
                            <p>Get immediate feedback on symptoms ranging from common colds to complex conditions, helping you decide when to see a doctor.</p>
                        </div>

                        <div className="feature-card card">
                            <div className="icon-wrapper bg-success-subtle">
                                <Shield size={24} className="text-success" />
                            </div>
                            <h3>Private & Secure</h3>
                            <p>Your health data is encrypted end-to-end. We never share your personal information with third parties without consent.</p>
                        </div>

                        <div className="feature-card card">
                            <div className="icon-wrapper bg-warning-subtle">
                                <Clock size={24} className="text-warning" />
                            </div>
                            <h3>Always Available</h3>
                            <p>Health concerns don't follow business hours. Access reliable medical guidance whenever you need it, day or night.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .home-container {
                    padding-top: 4rem;
                }

                .hero-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                    padding-bottom: 4rem;
                }

                .hero-text {
                    max-width: 600px;
                }

                .badge-primary {
                    display: inline-block;
                    background-color: var(--primary-subtle);
                    color: var(--primary);
                    font-weight: 600;
                    font-size: 0.875rem;
                    padding: 0.25rem 0.75rem;
                    border-radius: 99px;
                    margin-bottom: 1.5rem;
                }

                h1 {
                    font-size: 3rem;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    color: var(--text-main);
                }

                .text-highlight {
                    color: var(--primary);
                }

                .lead-text {
                    font-size: 1.25rem;
                    color: var(--text-body);
                    margin-bottom: 2.5rem;
                    line-height: 1.6;
                }

                .cta-group {
                    display: flex;
                    gap: 1rem;
                }

                .btn-lg {
                    padding: 0.875rem 1.5rem;
                    font-size: 1rem;
                }

                .hero-image {
                    display: flex;
                    justify-content: center;
                }

                .trust-card {
                    padding: 2rem;
                    width: 100%;
                    max-width: 400px;
                    background: var(--bg-surface);
                    box-shadow: var(--shadow-lg);
                    border: 1px solid var(--border-light);
                }

                .trust-header {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    align-items: flex-start;
                }

                .trust-metric {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem 0;
                    border-top: 1px solid var(--border-light);
                    color: var(--text-main);
                    font-weight: 500;
                }

                .bg-alt {
                    background-color: var(--bg-surface-alt);
                    padding: 5rem 0;
                }

                .section-header {
                    margin-bottom: 3rem;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .feature-card {
                    padding: 2rem;
                    transition: transform 0.2s;
                }

                .feature-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                }

                .icon-wrapper {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }

                .bg-primary-subtle { background-color: var(--primary-subtle); }
                .bg-success-subtle { background-color: #dcfce7; }
                .bg-warning-subtle { background-color: #fef3c7; }

                .text-primary { color: var(--primary); }
                .text-success { color: var(--success); }
                .text-warning { color: var(--warning); }

                @media (max-width: 768px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 2rem;
                    }
                    .hero-image {
                        order: -1; 
                    }
                    .cta-group {
                        justify-content: center;
                    }
                    .trust-card {
                        margin: 0 auto;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;
