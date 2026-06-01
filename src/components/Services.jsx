import React, { useState } from 'react';
import { Scissors, Sparkles, Clock, Check } from 'lucide-react';

export default function Services({ onBookClick }) {
  const [activeTab, setActiveTab] = useState('signatures');

  const signatures = [
    {
      title: 'Signature Haircut',
      price: '$45',
      duration: '45 Mins',
      description: 'Our top-tier precision haircut tailored to your head shape and style preferences.',
      features: [
        'Detailed personal style consultation',
        'Shampoo wash & scalp massage',
        'Classic hot towel neck cleanup',
        'Straight razor neck shave',
        'Premium pomade finish',
      ],
      icon: <Scissors size={20} />,
    },
    {
      title: 'Luxury Beard Trim',
      price: '$35',
      duration: '30 Mins',
      description: 'Expert beard sculpting and shaping to enhance your facial structure.',
      features: [
        'Beard length and outline grooming',
        'Deep conditioning beard wash',
        'Premium beard oil & steam treatment',
        'Crisp straight-razor cheek & neck line',
        'Soothing post-shave balm lining',
      ],
      icon: <Sparkles size={20} />,
    },
    {
      title: 'Hot Towel Straight Shave',
      price: '$50',
      duration: '45 Mins',
      description: 'A luxurious straight razor shaving ritual following strict European traditions.',
      features: [
        'Essential oil face massage & prep',
        'Dual hot steamed towels',
        'Warm custom-lather shave cream',
        'Double-pass straight razor shave',
        'Cold-stone massage & cooling splash',
      ],
      icon: <Sparkles size={20} />,
    },
    {
      title: 'Hair Styling & Wash',
      price: '$30',
      duration: '25 Mins',
      description: 'A deep-cleaning styling session for special occasions or sharp business meetings.',
      features: [
        'Exfoliating wash & tonic shampoo',
        'Professional blow-dry styling',
        'Custom application of pomade/clay',
        'Individual grooming advice',
      ],
      icon: <Scissors size={20} />,
    },
  ];

  const packages = [
    {
      title: 'The Executive Combo',
      price: '$75',
      duration: '75 Mins',
      description: 'Our most popular combination pairing the Signature Haircut with the Luxury Beard Trim.',
      features: [
        'Signature Precision Haircut',
        'Luxury Beard Trim & Razor Line',
        'Scalp-massaging shampoo wash',
        'Steamed hot towels',
        'Complimentary single-malt whiskey or craft beverage',
      ],
      icon: <Scissors size={20} />,
    },
    {
      title: 'The Royal Treatment',
      price: '$110',
      duration: '110 Mins',
      description: 'The ultimate men\'s grooming experience for unmatched confidence and premium care.',
      features: [
        'Signature Precision Haircut',
        'Hot Towel Straight Razor Shave',
        'Rejuvenating charcoal peel face mask',
        'Detailed ear, nose, & brow grooming',
        'Deep neck & shoulder massage',
        'Take-home premium brand pomade',
      ],
      icon: <Sparkles size={20} />,
    },
    {
      title: 'The Beard Ritual & Face Cleanse',
      price: '$65',
      duration: '60 Mins',
      description: 'A rejuvenating service designed specifically for full-bearded gentlemen.',
      features: [
        'Luxury Beard Sculpting & Oil Massage',
        'Warm mist steam treatment',
        'Exfoliating charcoal facial scrub',
        'Premium cold towel post-treatment care',
      ],
      icon: <Sparkles size={20} />,
    },
  ];

  const activeServices = activeTab === 'signatures' ? signatures : packages;

  return (
    <section id="services" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2>Services & Pricing</h2>
        
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
          Crafted Grooming Treatments Tailored for Men
        </p>

        {/* Custom Styling Tab Toggles */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          <button
            onClick={() => setActiveTab('signatures')}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: activeTab === 'signatures' ? '#fff' : 'var(--text-muted)',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'signatures' ? '2px solid var(--gold-primary)' : '2px solid transparent',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              transition: 'var(--transition-fast)',
            }}
          >
            Signature Services
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: activeTab === 'packages' ? '#fff' : 'var(--text-muted)',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'packages' ? '2px solid var(--gold-primary)' : '2px solid transparent',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              transition: 'var(--transition-fast)',
            }}
          >
            Luxury Combo Packages
          </button>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {activeServices.map((service, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '4px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
              }}
            >
              {/* Header inside card */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--gold-primary)',
                  }}
                >
                  {service.icon}
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: '700',
                      color: '#fff',
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    color: 'var(--gold-primary)',
                  }}
                >
                  {service.price}
                </span>
              </div>

              {/* Time display */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '1rem',
                  fontWeight: '500',
                }}
              >
                <Clock size={14} style={{ color: 'var(--gold-primary)' }} />
                <span>{service.duration}</span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  lineHeight: '1.6',
                }}
              >
                {service.description}
              </p>

              {/* Feature lists with styled ticks */}
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginBottom: '2.5rem',
                  flexGrow: 1,
                }}
              >
                {service.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Check
                      size={15}
                      style={{
                        color: 'var(--gold-primary)',
                        flexShrink: 0,
                        marginTop: '0.15rem',
                      }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Booking under each card */}
              <button
                className="gold-border-btn"
                onClick={onBookClick}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.9rem 1.5rem',
                  marginTop: 'auto',
                }}
              >
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
