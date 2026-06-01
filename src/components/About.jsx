import React from 'react';
import { Award, ShieldCheck, Clock, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Award size={28} />, value: '15+', label: 'Years of Craft' },
    { icon: <Users size={28} />, value: '12K+', label: 'Groomed Gentlemen' },
    { icon: <Clock size={28} />, value: '5', label: 'Master Stylists' },
    { icon: <ShieldCheck size={28} />, value: '4.9★', label: 'Customer Rating' },
  ];

  return (
    <section id="about" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2>About Joe Barbar</h2>
        
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
          Crafting Confidence & Precision Since 2011
        </p>

        {/* Split Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '5rem',
          }}
          className="about-grid"
        >
          {/* Left Image Column with gold border offset styling */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              justifySelf: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '100%',
                height: '100%',
                border: '2px solid var(--gold-primary)',
                borderRadius: '4px',
                zIndex: 1,
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
              alt="Barber Crafting a Beard Trim"
              style={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                borderRadius: '4px',
                objectFit: 'cover',
                zIndex: 2,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.7)',
              }}
            />
          </div>

          {/* Right Text Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3
              style={{
                color: '#fff',
                fontSize: '1.8rem',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-serif)',
              }}
            >
              The Art of <span className="gold-text">Gentlemen's Grooming</span>
            </h3>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              At Joe Barbar, grooming is treated as a master craft. We believe a haircut or beard trim is not just maintenance—it is a personal transformation. Established in 2011, our lounge provides an upscale sanctuary where the modern gentleman can relax, socialize, and receive premium treatment.
            </p>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              Our expert master barbers combine time-honored European barbering traditions with state-of-the-art styling techniques. Whether you are looking for a razor-sharp fade, a luxurious hot towel straight-shave, or a custom style treatment, we tailor every detail to match your unique lifestyle and features.
            </p>
            
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-primary)',
                borderLeft: '4px solid var(--gold-primary)',
                borderRadius: '0 4px 4px 0',
                marginTop: '1rem',
              }}
            >
              <p
                style={{
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  fontSize: '1.05rem',
                }}
              >
                "A gentleman is defined by his character, and his character is reflected in his presentation. We ensure your presentation is flawless."
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  color: 'var(--gold-primary)',
                  marginTop: '0.75rem',
                  textAlign: 'right',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                }}
              >
                — Joe Barbar, Founder & Head Barber
              </p>
            </div>
          </div>
        </div>

        {/* Stats Metrics Dashboard */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            width: '100%',
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div style={{ color: 'var(--gold-primary)', marginBottom: '0.5rem' }}>
                {stat.icon}
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#fff',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'var(--text-muted)',
                  fontWeight: '600',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
