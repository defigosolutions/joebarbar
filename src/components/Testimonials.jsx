import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Arthur Pendleton',
      role: 'Financial Partner',
      age: 34,
      stars: 5,
      barber: 'Marcus Vance',
      quote: 'Absolute highest class of service. Joe Barbar is not just a haircut, it is a masterclass in men\'s grooming. The hot razor lining and steamed towels are second to none. Marcus is an absolute artist.',
      initials: 'AP',
    },
    {
      name: 'Richard Vance',
      role: 'Principal Architect',
      age: 42,
      stars: 5,
      barber: 'Joe Barbar',
      quote: 'Finding a barber who understands modern skin fades while honoring classic scissor styles is rare. The lounge is upscale, masculine, and welcoming. The single-malt whiskey is a stellar touch.',
      initials: 'RV',
    },
    {
      name: 'Michael Cole',
      role: 'Tech Vice President',
      age: 29,
      stars: 5,
      barber: 'Julian Cross',
      quote: 'I have been coming here for 3 years. There is a dedication to precision that you simply won\'t find anywhere else. The booking system is streamlined, respect for appointment times is absolute.',
      initials: 'MC',
    },
  ];

  return (
    <section id="testimonials" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2>Customer Testimonials</h2>
        
        <p
          style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: 'var(--gold-primary)',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginTop: '-2rem',
            marginBottom: '4rem',
          }}
        >
          Unsolicited Feedback From Distinguished Gentlemen
        </p>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '3rem 2rem 2.5rem 2rem',
                borderRadius: '4px',
                position: 'relative',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {/* Quote Mark Icon */}
              <Quote
                size={40}
                style={{
                  color: 'var(--gold-glow)',
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  opacity: 0.8,
                }}
              />

              {/* Star Ratings */}
              <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--gold-primary)' }}>
                {[...Array(review.stars)].map((_, sIdx) => (
                  <Star key={sIdx} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Text Quote */}
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                  flexGrow: 1,
                }}
              >
                "{review.quote}"
              </p>

              {/* Barber Attribution Tag */}
              <div
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: '20px',
                  padding: '0.25rem 0.8rem',
                  fontSize: '0.75rem',
                  color: 'var(--gold-primary)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Service by {review.barber}
              </div>

              {/* Separator Line */}
              <div style={{ height: '1px', backgroundColor: 'var(--border-color)', width: '100%' }} />

              {/* Client Profile Footer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1.5px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--gold-primary)',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    fontSize: '1.1rem',
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.15)',
                  }}
                >
                  {review.initials}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: '#fff',
                    }}
                  >
                    {review.name}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {review.role}, Age {review.age}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
