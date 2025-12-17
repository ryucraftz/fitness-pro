export default function Comparison() {
    const donts = [
        "Give you one-size-fits-all plans that ignore your body",
        "Force you into broccoli-only, tasteless diets",
        "Let one missed workout ruin your momentum",
        "Leave you feeling confused and unsupported",
        "Offer quick fixes that don't last"
    ];

    const dos = [
        "Build a fully personalized fitness system",
        "Let you enjoy real Indian food (dal-chawal, paneer)",
        "Provide live check-ins and real-time adjustments",
        "Give you a step-by-step roadmap and expert support",
        "Design a sustainable system for long-term success"
    ];

    return (
        <section className="section comparison-section">
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '3rem' }}>Why HealthyNation is Different</h2>
                <div className="comparison-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="dont-column" style={{ backgroundColor: '#331e1e', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                        <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}>What We Don’t Do:</h3>
                        <ul style={{ listStyle: 'none' }}>
                            {donts.map((item, i) => (
                                <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                    <span>❌</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="do-column" style={{ backgroundColor: '#1e3329', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
                        <h3 style={{ color: '#22c55e', marginBottom: '1.5rem' }}>What We Do at HealthyNation:</h3>
                        <ul style={{ listStyle: 'none' }}>
                            {dos.map((item, i) => (
                                <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                                    <span>✅</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
