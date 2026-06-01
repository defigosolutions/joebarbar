import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, User, Scissors, CheckCircle, Clock } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    price: '',
    duration: '',
    barber: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const servicesList = [
    { title: 'Signature Haircut', price: '$45', duration: '45 Mins' },
    { title: 'Luxury Beard Trim', price: '$35', duration: '30 Mins' },
    { title: 'Hot Towel Straight Shave', price: '$50', duration: '45 Mins' },
    { title: 'The Executive Combo', price: '$75', duration: '75 Mins' },
    { title: 'The Royal Treatment', price: '$110', duration: '110 Mins' },
  ];

  const barbersList = [
    { name: 'Any Available Barber', role: 'Fastest booking option' },
    { name: 'Joe Barbar', role: 'Founder & Master Stylist' },
    { name: 'Marcus Vance', role: 'Lead Grooming Artisan' },
    { name: 'Julian Cross', role: 'Master Fade Specialist' },
    { name: 'Dominic Reyes', role: 'Beard Stylist & Facial Artisan' },
  ];

  // Helper to generate next 7 days for booking calendar
  const getNextSevenDays = () => {
    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 1; i <= 7; i++) {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + i);
      days.push({
        dayName: weekdays[futureDate.getDay()],
        dayNum: futureDate.getDate(),
        monthName: months[futureDate.getMonth()],
        fullString: `${weekdays[futureDate.getDay()]}, ${months[futureDate.getMonth()]} ${futureDate.getDate()}`,
      });
    }
    return days;
  };

  const timesList = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:30 PM', '01:30 PM', '02:30 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  const handleSelectService = (s) => {
    setBookingData({ ...bookingData, service: s.title, price: s.price, duration: s.duration });
    setStep(2);
  };

  const handleSelectBarber = (barberName) => {
    setBookingData({ ...bookingData, barber: barberName });
    setStep(3);
  };

  const handleSelectDateTime = (dateStr, timeStr) => {
    setBookingData({ ...bookingData, date: dateStr, time: timeStr });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateContactForm = () => {
    const errors = {};
    if (!bookingData.name.trim()) errors.name = 'Full name is required';
    if (!bookingData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(bookingData.email)) {
      errors.email = 'Enter a valid email address';
    }
    if (!bookingData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(bookingData.phone.replace(/\s+/g, ''))) {
      errors.phone = 'Enter a valid phone number';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateContactForm()) {
      setStep(5);
    }
  };

  const generateTicketId = () => {
    return 'JB-' + Math.floor(100000 + Math.random() * 900000);
  };

  const [ticketId] = useState(generateTicketId());

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(7, 7, 8, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '650px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1.5px solid var(--gold-primary)',
          borderRadius: '6px',
          padding: '2.5rem',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.9)',
          position: 'relative',
          overflowY: 'auto',
          maxHeight: '90vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Modal X Button */}
        <button
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
          }}
          onClick={onClose}
          onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
          onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
        >
          <X size={24} />
        </button>

        {/* Modal Progress Header */}
        {step < 5 && (
          <div style={{ marginBottom: '2.5rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                color: '#fff',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Book An Appointment
            </h3>
            
            {/* Step indicators */}
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', margin: '0 auto', maxWidth: '400px' }}>
              <div style={{ position: 'absolute', top: '15px', left: 0, right: 0, height: '2px', backgroundColor: 'var(--bg-tertiary)', zIndex: 1 }} />
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: 0,
                  width: `${((step - 1) / 3) * 100}%`,
                  height: '2px',
                  backgroundColor: 'var(--gold-primary)',
                  zIndex: 2,
                  transition: 'width 0.4s ease',
                }}
              />
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: s <= step ? 'var(--gold-primary)' : 'var(--bg-tertiary)',
                    color: s <= step ? 'var(--bg-primary)' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    zIndex: 3,
                    transition: 'all 0.4s ease',
                    boxShadow: s <= step ? '0 0 10px var(--gold-glow)' : 'none',
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
            
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: '0.5rem',
                margin: '0.5rem auto 0 auto',
                maxWidth: '430px',
                fontWeight: 600,
              }}
            >
              <span>Service</span>
              <span>Barber</span>
              <span>Schedule</span>
              <span>Details</span>
            </div>
          </div>
        )}

        {/* STEP 1: Select Grooming Treatment */}
        {step === 1 && (
          <div>
            <h4
              style={{
                color: 'var(--gold-primary)',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                fontSize: '1.1rem',
                letterSpacing: '1px',
              }}
            >
              Select Service
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {servicesList.map((service, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectService(service)}
                  style={{
                    padding: '1.25rem',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition-medium)',
                  }}
                  className="booking-option-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ color: 'var(--gold-primary)' }}>
                      <Scissors size={20} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}>{service.title}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={12} /> {service.duration}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--gold-primary)', fontWeight: 700 }}>
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Choose Barber */}
        {step === 2 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h4
                style={{
                  color: 'var(--gold-primary)',
                  fontFamily: 'var(--font-serif)',
                  textTransform: 'uppercase',
                  fontSize: '1.1rem',
                  letterSpacing: '1px',
                  margin: 0,
                }}
              >
                Choose Barber
              </h4>
              <button
                onClick={() => setStep(1)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={16} /> Back
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {barbersList.map((barber, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectBarber(barber.name)}
                  style={{
                    padding: '1.25rem',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition-medium)',
                  }}
                  className="booking-option-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ color: 'var(--gold-primary)' }}>
                      <User size={20} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}>{barber.name}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{barber.role}</span>
                    </div>
                  </div>
                  <ChevronRight size={18} style={{ color: 'var(--text-muted)' }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Date & Time Schedule */}
        {step === 3 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h4
                style={{
                  color: 'var(--gold-primary)',
                  fontFamily: 'var(--font-serif)',
                  textTransform: 'uppercase',
                  fontSize: '1.1rem',
                  letterSpacing: '1px',
                  margin: 0,
                }}
              >
                Schedule Appointment
              </h4>
              <button
                onClick={() => setStep(2)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={16} /> Back
              </button>
            </div>

            {/* Next 7 Days list */}
            <p style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: 600 }}>Select Date</p>
            <div
              style={{
                display: 'flex',
                gap: '0.6rem',
                overflowX: 'auto',
                paddingBottom: '1rem',
                marginBottom: '2rem',
              }}
              className="calendar-scroll"
            >
              {getNextSevenDays().map((d, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectDateTime(d.fullString, bookingData.time)}
                  style={{
                    flexShrink: 0,
                    padding: '0.75rem 1rem',
                    backgroundColor: bookingData.date === d.fullString ? 'var(--gold-primary)' : 'var(--bg-primary)',
                    border: '1px solid',
                    borderColor: bookingData.date === d.fullString ? 'var(--gold-primary)' : 'var(--border-color)',
                    borderRadius: '4px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    minWidth: '85px',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  <p style={{ fontSize: '0.75rem', color: bookingData.date === d.fullString ? 'var(--bg-primary)' : 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    {d.dayName}
                  </p>
                  <p style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0.15rem 0', color: bookingData.date === d.fullString ? 'var(--bg-primary)' : '#fff' }}>
                    {d.dayNum}
                  </p>
                  <p style={{ fontSize: '0.7rem', color: bookingData.date === d.fullString ? 'var(--bg-primary)' : 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {d.monthName}
                  </p>
                </div>
              ))}
            </div>

            {/* Hour options */}
            <p style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: 600 }}>Select Time</p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                marginBottom: '2.5rem',
              }}
            >
              {timesList.map((time, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectDateTime(bookingData.date, time)}
                  style={{
                    padding: '0.75rem 0.5rem',
                    backgroundColor: bookingData.time === time ? 'var(--gold-primary)' : 'var(--bg-primary)',
                    border: '1px solid',
                    borderColor: bookingData.time === time ? 'var(--gold-primary)' : 'var(--border-color)',
                    borderRadius: '4px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    color: bookingData.time === time ? 'var(--bg-primary)' : '#fff',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  {time}
                </div>
              ))}
            </div>

            {/* Next buttons */}
            <button
              className="gold-fill-btn"
              disabled={!bookingData.date || !bookingData.time}
              onClick={() => setStep(4)}
              style={{
                width: '100%',
                justifyContent: 'center',
                opacity: (!bookingData.date || !bookingData.time) ? 0.5 : 1,
                cursor: (!bookingData.date || !bookingData.time) ? 'not-allowed' : 'pointer',
              }}
            >
              Continue
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* STEP 4: Personal Details Form */}
        {step === 4 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h4
                style={{
                  color: 'var(--gold-primary)',
                  fontFamily: 'var(--font-serif)',
                  textTransform: 'uppercase',
                  fontSize: '1.1rem',
                  letterSpacing: '1px',
                  margin: 0,
                }}
              >
                Grooming Reservation Details
              </h4>
              <button
                onClick={() => setStep(3)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={16} /> Back
              </button>
            </div>

            {/* Summary Panel */}
            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                padding: '1.25rem',
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Service:</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>{bookingData.service} ({bookingData.price})</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Stylist:</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>{bookingData.barber}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Appointment:</span>
                <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>{bookingData.date} @ {bookingData.time}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Smith"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: formErrors.name ? '1px solid red' : '1px solid var(--border-color)',
                    padding: '0.8rem 1rem',
                    color: '#fff',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                  }}
                />
                {formErrors.name && <span style={{ color: 'red', fontSize: '0.75rem' }}>{formErrors.name}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. john@example.com"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: formErrors.email ? '1px solid red' : '1px solid var(--border-color)',
                    padding: '0.8rem 1rem',
                    color: '#fff',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                  }}
                />
                {formErrors.email && <span style={{ color: 'red', fontSize: '0.75rem' }}>{formErrors.email}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +1 (555) 019-2834"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: formErrors.phone ? '1px solid red' : '1px solid var(--border-color)',
                    padding: '0.8rem 1rem',
                    color: '#fff',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                  }}
                />
                {formErrors.phone && <span style={{ color: 'red', fontSize: '0.75rem' }}>{formErrors.phone}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Special Notes (Optional)</label>
                <textarea
                  name="notes"
                  value={bookingData.notes}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Tell us if you have any hair conditions, preferred products, or special requests..."
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    padding: '0.8rem 1rem',
                    color: '#fff',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    resize: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                className="gold-fill-btn"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '1.1rem',
                  marginTop: '1rem',
                }}
              >
                Complete Grooming Reservation
              </button>
            </form>
          </div>
        )}

        {/* STEP 5: Luxury Gold-Print Ticket Success */}
        {step === 5 && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ color: 'var(--gold-primary)', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <CheckCircle size={60} />
            </div>
            
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.8rem',
                color: '#fff',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
              }}
            >
              Reservation Flawless
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
              We have reserved your session. A premium confirmation email has been dispatched to {bookingData.email}.
            </p>

            {/* Gold Ticket representation */}
            <div
              style={{
                background: 'linear-gradient(135deg, #111113 0%, #1c1c21 100%)',
                border: '2px solid var(--gold-primary)',
                borderRadius: '8px',
                padding: '2.5rem 2rem',
                position: 'relative',
                boxShadow: '0 15px 35px rgba(212, 175, 55, 0.1)',
                textAlign: 'left',
                margin: '0 auto 2.5rem auto',
                maxWidth: '480px',
              }}
            >
              {/* Decorative notches for vintage luxury barber ticket look */}
              <div style={{ position: 'absolute', left: '-12px', top: '50%', transform: 'translateY(-50%)', width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', borderRight: '2px solid var(--gold-primary)' }} />
              <div style={{ position: 'absolute', right: '-12px', top: '50%', transform: 'translateY(-50%)', width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', borderLeft: '2px solid var(--gold-primary)' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed rgba(212, 175, 55, 0.3)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#fff', textTransform: 'uppercase' }}>Joe Barbar Salon</h4>
                  <p style={{ fontSize: '0.65rem', color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Cut. Style. Confidence.</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Ticket ID</span>
                  <p style={{ color: '#fff', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1rem' }}>{ticketId}</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Gentleman:</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{bookingData.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Treatment:</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{bookingData.service}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Barber Artisan:</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{bookingData.barber}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Time Slot:</span>
                  <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>{bookingData.date} @ {bookingData.time}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Price:</span>
                  <span style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '1rem' }}>{bookingData.price}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                className="gold-fill-btn"
                onClick={onClose}
                style={{ padding: '0.9rem 2rem' }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .booking-option-card:hover {
          border-color: var(--gold-primary) !important;
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.1);
          transform: translateY(-2px);
        }
        .calendar-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .calendar-scroll::-webkit-scrollbar-thumb {
          background-color: var(--bg-tertiary);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
