export default function ProgramDetails() {
    const features = [
        {
            title: "1-on-1 Coaching",
            desc: "Personalized support from Sourav to guide you through every phase of your transformation. No generic plans, everything is tailored to your body, lifestyle, and goals."
        },
        {
            title: "Custom Meal Guidance",
            desc: "No crash diets or cookie-cutter meal plans. You’ll get flexible, realistic nutrition strategies that align with your goals, from dal-chawal to paneer bhurji."
        },
        {
            title: "Weekly Check-ins & Progress Tracking",
            desc: "Stay on track with weekly progress check-ins via WhatsApp or calls. We review your wins and address challenges in real-time."
        },
        {
            title: "Exclusive WhatsApp Community Access",
            desc: "Join a private group of like-minded men. Get daily motivation, support, tips, and accountability."
        }
    ];

    return (
        <section className="section program-section" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 className="section-title">What is Healthy Nation?</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
                        Healthy Nation is a 12-Week Fitness & Lifestyle Blueprint for Busy Men.
                        Created by Coach Sourav, this is the only coaching system built specifically for men who are busy, tired of extremes, and ready for real change.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-dark)', borderRadius: '8px', marginBottom: '1rem' }}>
                            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
