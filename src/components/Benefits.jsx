export default function Benefits() {
    const benefits = [
        { title: "Lose Fat & Build Muscle Without Starving", text: "Forget crash diets. Fuel your body with science-backed nutrition." },
        { title: "Eat Foods You Love", text: "Flexible nutrition plan. Yes, you can have pizza and progress!" },
        { title: "Customized Workout Plan", text: "Home or Gym. Efficient workouts tailored to your schedule." },
        { title: "Stay Motivated & Accountable", text: "Weekly check-ins and direct communication for adjustments." }
    ];

    return (
        <section className="section benefits-section" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '1rem' }}>
                    AFTER THIS 1-1 CLARITY CALL, YOU’LL DISCOVER:
                </h2>
                <div className="benefits-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    {benefits.map((b, i) => (
                        <div key={i} className="benefit-card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-dark)', borderRadius: '8px', borderTop: '2px solid var(--secondary-color)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{b.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{b.text}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <a href="https://calendly.com/healthynation1008/1-on-1-personalized-fitness-call-with-team-sourav" className="btn-primary">
                        Book Your Strategy Call Now
                    </a>
                </div>
            </div>
        </section>
    );
}
