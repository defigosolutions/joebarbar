import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Footer({ onBookClick }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '5rem 0 2rem 0',
      }}
    >
      <div className="container">
        {/* Upper Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Logo column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img
                src={logoImg}
                alt="Joe Barbar Logo"
                style={{
                  height: '45px',
                  width: '45px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--gold-primary)',
                  objectFit: 'cover',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  color: '#fff',
                }}
              >
                JOE <span className="gold-text">BARBAR</span>
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Tailoring confidence, precision craftsmanship, and high-end styling solutions for professional men since 2011.
            </p>

            {/* Social Icons list */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  ),
                  href: '#'
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                  href: '#'
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  ),
                  href: '#'
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                      <polygon points="10 15 15 12 10 9 10 15"/>
                    </svg>
                  ),
                  href: '#'
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  style={{
                    height: '38px',
                    width: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--gold-primary)';
                    e.currentTarget.style.borderColor = 'var(--gold-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                paddingBottom: '0.5rem',
                alignSelf: 'flex-start',
              }}
            >
              Lounge Menu
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'About Joe Barbar', href: '#about' },
                { name: 'Services & Pricing', href: '#services' },
                { name: 'Style Gallery', href: '#gallery' },
                { name: 'Meet Our Barbers', href: '#barbers' },
                { name: 'Hours & Directions', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      transition: 'var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                paddingBottom: '0.5rem',
                alignSelf: 'flex-start',
              }}
            >
              Concierge
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              742 Luxury Boulevard, Suite 300<br />
              New York, NY 10001
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              T: +1 (212) 555-0199<br />
              E: concierge@joebarbar.com
            </p>
            <span
              onClick={onBookClick}
              style={{
                fontSize: '0.85rem',
                color: 'var(--gold-primary)',
                cursor: 'pointer',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                alignSelf: 'flex-start',
              }}
              onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
            >
              Book Now &rarr;
            </span>
          </div>

          {/* Newsletter subscription column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                paddingBottom: '0.5rem',
                alignSelf: 'flex-start',
              }}
            >
              Newsletter
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Subscribe to receive style advisories, grooming guides, and exclusive member announcements.
            </p>
            
            {subscribed ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid var(--gold-primary)',
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  color: 'var(--gold-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                <Check size={16} />
                Subscribed Successfully
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', position: 'relative' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    padding: '0.75rem 3rem 0.75rem 1rem',
                    color: '#fff',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-sans)',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    position: 'absolute',
                    right: '1px',
                    top: '1px',
                    bottom: '1px',
                    backgroundColor: 'var(--bg-primary)',
                    border: 'none',
                    color: 'var(--gold-primary)',
                    padding: '0 0.85rem',
                    cursor: 'pointer',
                    borderRadius: '0 3px 3px 0',
                    transition: 'var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Separator line */}
        <div style={{ height: '1px', backgroundColor: 'var(--border-color)', marginBottom: '2rem' }} />

        {/* Lower copyright area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
          className="lower-footer"
        >
          <p>© 2026 Joe Barbar Salon. All Rights Reserved. Designed & Developed for the Modern Gentleman.</p>
          <p style={{ letterSpacing: '1px', fontSize: '0.75rem', textTransform: 'uppercase' }}>
            <span className="gold-text">Cut. Style. Confidence.</span>
          </p>
        </div>
      </div>
      
      <style>{`
        @media (min-width: 768px) {
          .lower-footer {
            flex-direction: row !important;
            justify-content: space-between !important;
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
}
