import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

export default function Hero({ onBookClick }) {
  const handleScrollToServices = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#services');
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '650px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        overflow: 'hidden',
        backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Premium dark gradient overlay for text legibility and aesthetic */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(7, 7, 8, 0.6) 0%, rgba(7, 7, 8, 0.9) 80%, var(--bg-primary) 100%)',
          zIndex: 1,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          paddingTop: '60px',
        }}
      >
        <div className="hero-animate" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--gold-primary)',
              fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              fontWeight: 600,
            }}
          >
            ESTD. 2011 — MEN'S GROOMING CLUB
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '4px',
              lineHeight: 1.1,
              textTransform: 'uppercase',
              color: '#fff',
              marginBottom: '1.5rem',
            }}
          >
            CUT. STYLE.<br />
            <span className="gold-text">CONFIDENCE.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '3rem',
              fontWeight: 300,
              maxWidth: '650px',
              margin: '0 auto 3rem auto',
            }}
          >
            A high-end grooming club for the modern gentleman who values precision, premium care, and an elite social salon experience.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              marginBottom: '4rem',
            }}
          >
            <button className="gold-fill-btn" onClick={onBookClick} style={{ padding: '1.1rem 2.5rem', fontSize: '0.95rem' }}>
              <Calendar size={18} />
              Book Appointment
            </button>
            <a
              href="#services"
              onClick={handleScrollToServices}
              className="gold-border-btn"
              style={{ padding: '1.1rem 2.5rem', fontSize: '0.95rem' }}
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector('#about');
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: 'smooth',
            });
          }
        }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          color: 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
          fontSize: '0.75rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          animation: 'bounce 2s infinite',
        }}
        onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
        onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
      >
        <span>Discover More</span>
        <ChevronDown size={18} style={{ color: 'var(--gold-primary)' }} />
      </a>

      {/* Embedded bouncing animation keyframes */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translate(-50%, 0);
          }
          40% {
            transform: translate(-50%, -10px);
          }
          60% {
            transform: translate(-50%, -5px);
          }
        }
        
        .hero-animate {
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
