import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Meet Our Barbers', href: '#barbers' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Hours & Location', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.4s ease',
          backgroundColor: isScrolled ? 'rgba(7, 7, 8, 0.95)' : 'rgba(7, 7, 8, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.8)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <img
              src={logoImg}
              alt="Joe Barbar Logo"
              style={{
                height: '45px',
                width: '45px',
                borderRadius: '50%',
                border: '1.5px solid var(--gold-primary)',
                objectFit: 'cover',
                boxShadow: '0 0 10px rgba(212, 175, 55, 0.2)',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  color: '#fff',
                  lineHeight: 1.1,
                }}
              >
                JOE <span className="gold-text">BARBAR</span>
              </span>
              <span
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '1.5px',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                }}
              >
                Cut. Style. Confidence.
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="desktop-menu-container"
          >
            <ul
              style={{
                display: 'flex',
                listStyle: 'none',
                gap: '1.8rem',
              }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: 'var(--text-secondary)',
                      position: 'relative',
                      padding: '0.25rem 0',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <button className="gold-border-btn" onClick={onBookClick} style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>
              <Calendar size={14} />
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={26} className="gold-text" /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isMobileMenuOpen ? 0 : '-100%',
          width: '80%',
          maxWidth: '350px',
          height: '100vh',
          backgroundColor: 'var(--bg-secondary)',
          zIndex: 999,
          padding: '6rem 2rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.9)',
          transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderLeft: '1px solid var(--border-color)',
        }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            listStyle: 'none',
            marginBottom: '3rem',
          }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  display: 'block',
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

        <button className="gold-fill-btn" onClick={() => { setIsMobileMenuOpen(false); onBookClick(); }} style={{ justifyContent: 'center' }}>
          <Calendar size={16} />
          Book Appointment
        </button>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(3px)',
            zIndex: 998,
          }}
        />
      )}

      {/* Inline styles for responsive utility to avoid media query issues in React JS inline styles */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-menu-container {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
