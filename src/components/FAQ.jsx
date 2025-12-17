import { useState } from 'react';

export default function FAQ() {
    const faqs = [
        { q: "What happens in this strategy call?", a: "In this session, you’ll receive expert guidance from a certified fitness professional. We’ll discuss your current fitness goals, challenges, and lifestyle to help you create a clear roadmap for your weight loss journey." },
        { q: "Will I get a diet or workout plan in the call?", a: "No, this session is focused on providing expert advice and discussing your personal goals. While you won’t receive a complete workout or diet plan, you will get customized tips and a roadmap for the next steps." },
        { q: "How long does the session last?", a: "The session typically lasts around 40 – 60 minutes. During this time, we’ll dive into your goals, challenges, and outline a strategy." },
        { q: "What do I need to prepare?", a: "All you need to do is come with an open mind and be ready to discuss your fitness goals, current challenges, and any obstacles you’re facing." },
        { q: "Is there any obligation to join the program?", a: "No, there’s absolutely no obligation after the session. Our goal is to provide value and help you with the next steps on your fitness journey." },
        { q: "Is this suitable for busy professionals?", a: "Yes! This session is specifically designed for busy professionals. We understand your time is valuable, so the advice and roadmap we provide will be easy to integrate into your hectic lifestyle." }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="section faq-section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="text-center" style={{ marginBottom: '3rem' }}>Your Questions, Answered!</h2>

                <div className="faq-list">
                    {faqs.map((item, index) => (
                        <div key={index} className="faq-item" style={{ marginBottom: '1rem', borderBottom: '1px solid #334155' }}>
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '1.5rem 0',
                                    background: 'none',
                                    color: 'var(--text-light)',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                {item.q}
                                <span style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                            </button>
                            {openIndex === index && (
                                <div style={{ paddingBottom: '1.5rem', color: 'var(--text-muted)' }}>
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '2rem' }}>
                    <p style={{ marginBottom: '1rem' }}>Still have a question? Mail us at <a href="mailto:mr.fitmikeaesthetics@gmail.com" style={{ color: 'var(--secondary-color)' }}>mr.fitmikeaesthetics@gmail.com</a></p>
                </div>
            </div>
        </section>
    );
}
