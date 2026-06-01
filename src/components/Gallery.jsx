import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'cuts',
      title: 'Obsidian Pompadour Fade',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      category: 'cuts',
      title: 'Precision Mid Skin Fade',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      category: 'shaves',
      title: 'Classic Straight Razor Line',
      image: 'https://images.unsplash.com/photo-1593702295094-aec22597af65?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      category: 'shaves',
      title: 'Premium Steamed Facial Razor Shave',
      image: 'https://images.unsplash.com/photo-1605497746444-ac9dbd39f4a5?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      category: 'styling',
      title: 'Textured Crop & Wax Sculpt',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      category: 'cuts',
      title: 'High Taper Buzz Crop',
      image: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const filters = [
    { label: 'All Styles', value: 'all' },
    { label: 'Haircuts', value: 'cuts' },
    { label: 'Razor Shaves', value: 'shaves' },
    { label: 'Hair Styling', value: 'styling' },
  ];

  return (
    <section id="gallery" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2>Style Gallery</h2>
        
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
          Visual Proof of Unparalleled Grooming Excellence
        </p>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                backgroundColor: activeFilter === filter.value ? 'var(--gold-primary)' : 'transparent',
                color: activeFilter === filter.value ? 'var(--bg-primary)' : '#fff',
                border: '1px solid',
                borderColor: activeFilter === filter.value ? 'var(--gold-primary)' : 'var(--border-color)',
                padding: '0.6rem 1.4rem',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'var(--transition-medium)',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter.value) {
                  e.target.style.borderColor = 'var(--gold-primary)';
                  e.target.style.color = 'var(--gold-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter.value) {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.color = '#fff';
                }
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedImg(item)}
              style={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                aspectRatio: '1/1',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)',
                border: '1px solid var(--border-color)',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'all 0.5s ease',
                }}
                className="gallery-img"
              />

              {/* View Overlay on Hover */}
              <div
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(7, 7, 8, 0.85)',
                  border: '1.5px solid var(--gold-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'all 0.4s ease',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <Eye size={32} style={{ color: 'var(--gold-primary)', marginBottom: '0.75rem' }} />
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: '#fff',
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--gold-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontWeight: 600,
                  }}
                >
                  {item.category === 'cuts' ? 'Precision Haircut' : item.category === 'shaves' ? 'Traditional Straight Razor Shave' : 'Exclusive Styling'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Dialog Modal */}
      {selectedImg && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(7, 7, 8, 0.95)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '2rem',
          }}
          onClick={() => setSelectedImg(null)}
        >
          {/* Close button */}
          <button
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedImg(null)}
          >
            <X size={36} className="gold-text" />
          </button>

          {/* Expanded Picture Container */}
          <div
            style={{
              position: 'relative',
              maxWidth: '750px',
              width: '100%',
              backgroundColor: 'var(--bg-secondary)',
              border: '2px solid var(--gold-primary)',
              borderRadius: '4px',
              padding: '1.5rem',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.9)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImg.image}
              alt={selectedImg.title}
              style={{
                width: '100%',
                maxHeight: '70vh',
                objectFit: 'cover',
                borderRadius: '2px',
                marginBottom: '1rem',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: '#fff', textTransform: 'uppercase' }}>{selectedImg.title}</h3>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.8rem',
                  color: 'var(--gold-primary)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  border: '1px solid var(--gold-primary)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '2px',
                }}
              >
                {selectedImg.category}
              </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
