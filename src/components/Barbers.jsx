// Custom inline SVG icons are used for brands to ensure 100% reliable builds.

export default function Barbers() {
  const barbers = [
    {
      name: 'Joe Barbar',
      role: 'Founder & Master Stylist',
      experience: '15+ Years Experience',
      specialty: 'Signature Razor Shaves & Classical Scissor Sculpting',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Marcus Vance',
      role: 'Lead Grooming Artisan',
      experience: '8+ Years Experience',
      specialty: 'Precision Pompadours & Hot Steamed Towel Rituals',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Julian Cross',
      role: 'Master Fade Specialist',
      experience: '6+ Years Experience',
      specialty: 'High Skin Fades, Crop Fringes & Modern Hair Artistry',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Dominic Reyes',
      role: 'Beard Stylist & Facial Artisan',
      experience: '5+ Years Experience',
      specialty: 'Beard Sculpting, Facial Exfoliations & Hot Oil Lining',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop',
    },
  ];

  return (
    <section id="barbers" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2>Meet Our Barbers</h2>
        
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
          Master Craftsmen Dedicated to the Gentleman's Image
        </p>

        {/* Barbers Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {barbers.map((barber, idx) => (
            <div
              key={idx}
              className="barber-card"
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.4s ease',
              }}
            >
              {/* Photo Area with hover scaling */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  aspectRatio: '3/4',
                  backgroundColor: '#111',
                }}
              >
                <img
                  src={barber.image}
                  alt={barber.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 0.6s ease',
                  }}
                  className="barber-img"
                />

                {/* Glassmorphic Info Panel on Image Hover */}
                <div
                  className="barber-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(0deg, rgba(7, 7, 8, 0.95) 10%, rgba(7, 7, 8, 0.4) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2rem 1.5rem',
                    opacity: 0,
                    transition: 'all 0.4s ease',
                  }}
                >
                  <p
                    style={{
                      color: 'var(--gold-primary)',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '0.8rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                      fontWeight: 600,
                    }}
                  >
                    {barber.experience}
                  </p>
                  
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {barber.specialty}
                  </p>

                  {/* Social Buttons */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        height: '35px',
                        width: '35px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        transition: 'var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--gold-primary)';
                        e.currentTarget.style.borderColor = 'var(--gold-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      style={{
                        height: '35px',
                        width: '35px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        transition: 'var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--gold-primary)';
                        e.currentTarget.style.borderColor = 'var(--gold-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      style={{
                        height: '35px',
                        width: '35px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        transition: 'var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--gold-primary)';
                        e.currentTarget.style.borderColor = 'var(--gold-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Info Area (visible by default) */}
              <div
                style={{
                  padding: '1.5rem',
                  textAlign: 'center',
                  borderTop: '1px solid var(--border-color)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem',
                    color: '#fff',
                    marginBottom: '0.25rem',
                  }}
                >
                  {barber.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    letterSpacing: '2px',
                    fontWeight: 600,
                  }}
                >
                  {barber.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .barber-card:hover {
          border-color: var(--border-glow) !important;
          box-shadow: 0 15px 35px rgba(212, 175, 55, 0.15) !important;
          transform: translateY(-5px);
        }
        .barber-card:hover .barber-img {
          transform: scale(1.08);
        }
        .barber-card:hover .barber-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
