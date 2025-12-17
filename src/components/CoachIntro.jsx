export default function CoachIntro() {
    return (
        <section className="section coach-section">
            <div className="container">
                <h2 className="text-center">Meet Coach – SOURAV MISHRA</h2>
                <p className="text-center highlight" style={{ marginBottom: '2rem' }}>Elite Credentials. Real Results</p>

                <div className="coach-grid">
                    <div className="coach-image-placeholder">
                        {/* Placeholder for Coach Image */}
                        <div style={{ width: '100%', height: '400px', backgroundColor: '#334155', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Coach Image
                        </div>
                    </div>
                    <div className="coach-bio">
                        <h3 style={{ color: 'var(--text-light)' }}>Backed by globally recognized certifications and real-world expertise:</h3>
                        <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Senior Fitness Coach at Fitelo</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Coach at Anytime Fitness & FITTR</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Nutritionist at Apollo Clinic</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Fitness & Health Consultant at HEALTHYFYME</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Founder of Healthynationonline – Transforming lives for 3+ years</li>
                        </ul>
                        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                            Meet Coach SOURAV MISHRA — 10+ Years of Experience. Thousands Transformed. I’ve coached at Fitelo, Anytime Fitness, FITTR, and more, and helped thousands get lean, strong, and confident without extreme diets or endless cardio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
