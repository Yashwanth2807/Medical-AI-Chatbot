import React, { useState, useEffect, useRef } from 'react';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import { Loader2, Info, RefreshCcw, ShieldAlert, Stethoscope } from 'lucide-react';

const Chat = () => {
    // --- STATE MANAGEMENT ---
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'bot',
            text: "Hello, I'm MedGuide. I am here to assist with preliminary symptom analysis. \n\n⚠️ Disclaimer: I am an AI, not a doctor. My advice is for informational purposes only.",
            time: 'Just now'
        },
        {
            id: 2,
            sender: 'bot',
            text: "To begin, please interpret your primary symptom. What is bothering you most right now? (e.g., 'Headache', 'Stomach pain', 'Fever')",
            time: 'Just now'
        }
    ]);

    const [flowState, setFlowState] = useState({
        step: 'ASK_SYMPTOM', // GREETING, ASK_SYMPTOM, ASK_DURATION, ASK_SEVERITY, ASK_HISTORY, ANALYSIS, COMPLETED
        data: {
            symptom: null,
            duration: null,
            severity: null,
            history: null
        }
    });

    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const isMounted = useRef(true);

    // --- AUTO SCROLL ---
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        isMounted.current = true;
        scrollToBottom();
        return () => { isMounted.current = false; };
    }, [messages, isTyping]);


    // --- MEDICAL KNOWLEDGE BASE (SIMULATED AI) ---
    const getMedicalAnalysis = (symptom, severity) => {
        const s = symptom.toLowerCase();
        const isSevere = severity === 'high';

        if (s.includes('headache') || s.includes('head')) {
            return {
                causes: isSevere ? ["Migraine", "Cluster Headache", "Hypertension"] : ["Tension Headache", "Dehydration", "Eye Strain"],
                advice: isSevere
                    ? ["Rest in a dark room.", "Avoid screens and loud noises.", "If accompanied by vision loss or speech issues, go to ER immediately."]
                    : ["Drink plenty of water.", "Rest in a quiet environment.", "Consider over-the-counter pain relief if needed."],
                urgency: isSevere ? "High - Consult Doctor" : "Low - Home Care"
            };
        }
        if (s.includes('chest') || s.includes('heart')) {
            return {
                causes: ["Angina", "Acid Reflux", "Muscle Strain", "Panic Attack"],
                advice: ["If pain is crushing or radiates to arm/jaw, call 911 immediately.", "If burning feeling occurs after eating, it may be reflux.", "Avoid strenuous activity."],
                urgency: "CRITICAL"
            };
        }
        if (s.includes('stomach') || s.includes('belly') || s.includes('abdom')) {
            return {
                causes: isSevere ? ["Appendicitis", "Gallstones", "Food Poisoning"] : ["Indigestion", "Gas", "Viral Gastroenteritis"],
                advice: ["Stay hydrated with small sips of water.", "Avoid solid foods for a few hours.", "If pain localizes to the lower right abdomen, seek medical care."],
                urgency: isSevere ? "Medium/High" : "Low"
            };
        }
        if (s.includes('fever') || s.includes('temp')) {
            return {
                causes: ["Viral Infection (Flu/Cold)", "Bacterial Infection", "Inflammation"],
                advice: ["Monitor your temperature every 4 hours.", "Stay hydrated with water or electrolyte drinks.", "Rest as much as possible.", "If fever exceeds 103°F or stiffness occurs, seek professional help."],
                urgency: "Medium"
            };
        }
        if (s.includes('joint') || s.includes('knee') || s.includes('back')) {
            return {
                causes: ["Arthritis", "Strain/Sprain", "Inflammation"],
                advice: ["Use the R.I.C.E method: Rest, Ice, Compression, Elevation.", "Avoid heavy lifting or strenuous movement.", "Take gentle walks if pain permits to avoid stiffness."],
                urgency: "Low"
            };
        }
        return {
            causes: ["General Inflammation", "Viral Illness", "Fatigue"],
            advice: ["Monitor your symptoms closely.", "Ensure you are well-hydrated and rested.", "If symptoms persist for more than 3 days, consult a General Practitioner."],
            urgency: "Unknown"
        };
    };

    // --- LOGIC ENGINE ---
    const processMessage = (text, currentState) => {
        const lower = text.toLowerCase();
        let response = "";
        let nextState = { ...currentState };
        let nextStep = currentState.step;

        // 🚨 1. GLOBAL EMERGENCY GUARDRAIL
        if (lower.match(/chest pain|heart attack|stroke|can't breathe|unconscious|suicide|kill myself|bleeding heavily/)) {
            return {
                text: "🚨 **EMERGENCY DETECTED**: These symptoms require immediate professional medical attention.\n\nPlease **call 911** or go to the nearest Emergency Room immediately.\n\nI cannot safely continue this consultation.",
                state: { step: 'COMPLETED', data: currentState.data }
            };
        }

        // 🔄 2. RESET COMMAND
        if (lower === 'reset' || lower === 'start over') {
            return {
                text: "Consultation reset. Please tell me your primary symptom.",
                state: { step: 'ASK_SYMPTOM', data: { symptom: null, duration: null, severity: null, history: null } }
            };
        }

        // 🧠 3. STATE MACHINE FLOW
        switch (currentState.step) {
            case 'ASK_SYMPTOM':
                // Capture Symptom
                nextState.data.symptom = text;
                response = `Okay, I understand you are experiencing "${text}".\n\nHow long have you had this symptom? (e.g., '2 days', 'just started')`;
                nextStep = 'ASK_DURATION';
                break;

            case 'ASK_DURATION':
                // Capture Duration
                nextState.data.duration = text;
                response = "Noted. On a scale of 1-10, how severe is the pain or discomfort?\n(1 = Mild, 10 = Unbearable)";
                nextStep = 'ASK_SEVERITY';
                break;

            case 'ASK_SEVERITY':
                // Capture Severity
                nextState.data.severity = text;
                const num = parseInt(text.match(/\d+/)?.[0] || "0");
                const isSevere = num > 6 || lower.includes('severe') || lower.includes('bad');
                nextState.data.severityCalculated = isSevere ? 'high' : 'low';

                response = "Do you have any existing medical conditions I should know about? (e.g., Diabetes, Asthma, None)";
                nextStep = 'ASK_HISTORY';
                break;

            case 'ASK_HISTORY':
                // Capture History & ANALYZE
                nextState.data.history = text;

                // Perform Analysis
                const analysis = getMedicalAnalysis(nextState.data.symptom, nextState.data.severityCalculated);

                // Format Advice as Bullets
                const adviceList = analysis.advice.map(item => `• ${item}`).join('\n');

                // New Cleaner Layout
                response = `📋 MEDGUIDE ANALYSIS REPORT\n` +
                    `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                    `🔴 **Symptom Profile**\n` +
                    `• Issue: ${nextState.data.symptom}\n` +
                    `• Duration: ${nextState.data.duration}\n` +
                    `• Severity: ${nextState.data.severity}/10\n\n` +
                    `🔍 **Potential Causes**\n` +
                    analysis.causes.map(c => `• ${c}`).join('\n') + `\n\n` +
                    `💊 **Recommended Care**\n` +
                    `${adviceList}\n\n` +
                    `⚠️ **Triage Status**: ${analysis.urgency.toUpperCase()}\n\n` +
                    `━━━━━━━━━━━━━━━━━━━━━━\n` +
                    `*Please consult a medical professional for an official diagnosis.*`;

                nextStep = 'COMPLETED';
                break;

            case 'COMPLETED':
                response = "Our consultation is complete. If you have new symptoms, please type 'reset' to start over.";
                break;

            default:
                response = "Please tell me your primary symptom.";
                nextStep = 'ASK_SYMPTOM';
        }

        nextState.step = nextStep;
        return { text: response, state: nextState };
    };

    // --- HANDLERS ---
    const handleSend = (text) => {
        if (isTyping || !text.trim()) return;

        // User Message
        const newMessage = {
            id: Date.now(),
            sender: 'user',
            text: text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, newMessage]);

        // Bot Response
        setIsTyping(true);
        const delay = 1000;

        setTimeout(() => {
            if (!isMounted.current) return;
            const result = processMessage(text, flowState);
            setFlowState(result.state);

            const botResponse = {
                id: Date.now() + 1,
                sender: 'bot',
                text: result.text,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, delay);
    };

    const handleReset = () => {
        setMessages([{
            id: Date.now(),
            sender: 'bot',
            text: "Context cleared. Let's start over. What is your primary symptom?",
            time: 'Just now'
        }]);
        setFlowState({
            step: 'ASK_SYMPTOM',
            data: { symptom: null, duration: null, severity: null, history: null }
        });
    };

    return (
        <div className="chat-layout">
            <div className="chat-container">
                <main className="messages-area" aria-live="polite">
                    <div className="chat-header-actions">
                        <div className="chat-disclaimer">
                            <ShieldAlert size={14} className="text-primary" />
                            <span className="disclaimer-text">MedGuide AI - Experimental Triage Demo</span>
                        </div>
                        <button onClick={handleReset} className="reset-btn" title="Restart">
                            <RefreshCcw size={14} /> Reset
                        </button>
                    </div>

                    {messages.map((msg) => (
                        <ChatMessage key={msg.id} message={msg} />
                    ))}

                    {isTyping && (
                        <div className="typing-row">
                            <div className="typing-avatar"><Stethoscope size={16} /></div>
                            <div className="typing-bubble">
                                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </main>

                <ChatInput onSend={handleSend} />
            </div>

            <style>{`
                .chat-layout {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    background-color: var(--bg-surface-alt);
                }

                .chat-container {
                    width: 100%;
                    max-width: 800px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    background-color: var(--bg-surface);
                    box-shadow: var(--shadow-sm);
                }

                .messages-area {
                    flex: 1;
                    overflow-y: auto;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .chat-header-actions {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid var(--border-light);
                }

                .chat-disclaimer {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.75rem;
                    color: var(--text-dim);
                    font-weight: 500;
                }

                .reset-btn {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    background: transparent;
                    border: 1px solid var(--border-light);
                    padding: 4px 10px;
                    border-radius: var(--radius-sm);
                    font-size: 0.75rem;
                    color: var(--text-dim);
                    cursor: pointer;
                }
                .reset-btn:hover { background: var(--bg-surface-alt); color: var(--text-main); }

                .typing-row {
                    display: flex;
                    align-items: flex-end;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }

                .typing-avatar {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--primary);
                    color: white;
                }

                .typing-bubble {
                    padding: 0.75rem 1rem;
                    border-radius: var(--radius-lg);
                    border-bottom-left-radius: 2px;
                    background-color: var(--bg-surface-alt);
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    border: 1px solid var(--border-light);
                }

                .dot {
                    width: 6px;
                    height: 6px;
                    background-color: var(--text-dim);
                    border-radius: 50%;
                    animation: bounce 1.4s infinite ease-in-out both;
                }
                .dot:nth-child(1) { animation-delay: -0.32s; }
                .dot:nth-child(2) { animation-delay: -0.16s; }
                .dot:nth-child(3) { animation-delay: 0s; }

                @keyframes bounce {
                    0%, 80%, 100% { transform: scale(0); }
                    40% { transform: scale(1); }
                }
            `}</style>
        </div>
    );
};

export default Chat;
