import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const hours = [
    { days: 'Monday – Friday', hours: '09:00 AM – 08:00 PM' },
    { days: 'Saturday', hours: '09:00 AM – 06:00 PM' },
    { days: 'Sunday', hours: '10:00 AM – 04:00 PM' },
  ];

  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2>Hours & Location</h2>
        
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
          Visit the Lounge For The Elite Grooming Experience
        </p>

        {/* Contact Split Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
          }}
          className="contact-grid"
        >
          {/* Left Column: Opening hours & details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  color: '#fff',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Clock size={22} style={{ color: 'var(--gold-primary)' }} />
                Opening Hours
              </h3>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  padding: '1.5rem',
                }}
              >
                {hours.map((h, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderBottom: idx < hours.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                      paddingBottom: idx < hours.length - 1 ? '1rem' : 0,
                      fontSize: '0.95rem',
                    }}
                  >
                    <span style={{ color: '#fff', fontWeight: 600 }}>{h.days}</span>
                    <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '0.2rem' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Lounge Location</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    742 Luxury Boulevard, Suite 300<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '0.2rem' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Direct Line</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    +1 (212) 555-0199
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '0.2rem' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Electronic Mail</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    concierge@joebarbar.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form & stylized map container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  color: '#fff',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                Send Us A Message
              </h3>

              <div
                className="glass-panel"
                style={{
                  padding: '2rem',
                  borderRadius: '4px',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
                }}
              >
                {isSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <CheckCircle size={48} style={{ color: 'var(--gold-primary)', marginBottom: '1rem' }} />
                    <h4 style={{ color: '#fff', textTransform: 'uppercase', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Message Transmitted</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Thank you. Our concierge will review your message and reply within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alexander Vance"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          border: errors.name ? '1px solid red' : '1px solid var(--border-color)',
                          padding: '0.75rem 1rem',
                          color: '#fff',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9rem',
                        }}
                      />
                      {errors.name && <span style={{ color: 'red', fontSize: '0.75rem' }}>{errors.name}</span>}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. alex@vance.com"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          border: errors.email ? '1px solid red' : '1px solid var(--border-color)',
                          padding: '0.75rem 1rem',
                          color: '#fff',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9rem',
                        }}
                      />
                      {errors.email && <span style={{ color: 'red', fontSize: '0.75rem' }}>{errors.email}</span>}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="How can we assist you today? Let us know about corporate booking options or media requests..."
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          border: errors.message ? '1px solid red' : '1px solid var(--border-color)',
                          padding: '0.75rem 1rem',
                          color: '#fff',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9rem',
                          resize: 'none',
                        }}
                      />
                      {errors.message && <span style={{ color: 'red', fontSize: '0.75rem' }}>{errors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className="gold-fill-btn"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '0.9rem',
                      }}
                    >
                      <Send size={16} />
                      Transmit Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Stylized premium Dark/Gold map placeholder card */}
            <div
              style={{
                width: '100%',
                height: '240px',
                borderRadius: '4px',
                border: '1.5px solid var(--gold-primary)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.6)',
                backgroundColor: '#0a0a0d',
                backgroundImage: `radial-gradient(var(--border-color) 1px, transparent 1px), radial-gradient(var(--border-color) 1.5px, transparent 1.5px)`,
                backgroundSize: '30px 30px',
                backgroundPosition: '0 0, 15px 15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Decorative grid vectors representing streets */}
              <div style={{ position: 'absolute', top: '25%', left: 0, right: 0, height: '2px', backgroundColor: 'rgba(212, 175, 55, 0.08)' }} />
              <div style={{ position: 'absolute', top: '65%', left: 0, right: 0, height: '2px', backgroundColor: 'rgba(212, 175, 55, 0.08)' }} />
              <div style={{ position: 'absolute', left: '30%', top: 0, bottom: 0, width: '2px', backgroundColor: 'rgba(212, 175, 55, 0.08)' }} />
              <div style={{ position: 'absolute', left: '70%', top: 0, bottom: 0, width: '2px', backgroundColor: 'rgba(212, 175, 55, 0.08)' }} />
              
              {/* Accent highlight vector indicating radius around the barber shop */}
              <div
                style={{
                  position: 'absolute',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(212, 175, 55, 0.4)',
                  backgroundColor: 'rgba(212, 175, 55, 0.03)',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)',
                }}
              />

              {/* Pin indicator with glowing effect */}
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 2,
                }}
              >
                {/* Glowing ring animation container */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    boxShadow: '0 0 15px rgba(212, 175, 55, 0.6)',
                  }}
                  className="map-glow"
                />
                
                <MapPin size={28} style={{ color: 'var(--gold-primary)', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.8))' }} />
                
                <div
                  style={{
                    backgroundColor: 'rgba(7, 7, 8, 0.95)',
                    border: '1px solid var(--gold-primary)',
                    borderRadius: '2px',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.7rem',
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 700,
                    marginTop: '0.5rem',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.8)',
                  }}
                >
                  Joe Barbar Salon
                </div>
              </div>

              {/* Compass symbol on top right */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                }}
              >
                N
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        
        @keyframes pulse-glow {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
        .map-glow {
          animation: pulse-glow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
