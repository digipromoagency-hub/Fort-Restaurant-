import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StandoutSection from './components/StandoutSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import { Reservation } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedDish, setPreselectedDish] = useState<string | undefined>(undefined);
  
  // Real-time client-side reservation list, pre-seeded with 2 realistic bookings
  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: 'res-1',
      name: 'Dr. Kavitha Selvam',
      mobile: '9840234567',
      email: 'kavitha.selvam@outlook.com',
      guests: 4,
      date: '2026-07-15',
      time: '07:30 PM',
      status: 'confirmed',
      notes: 'Anniversary dinner, prefer table near the courtyard teak arches.',
      submissionTime: '2026-07-14T10:15:00.000Z',
    },
    {
      id: 'res-2',
      name: 'Rajesh Kumar',
      mobile: '9444012345',
      email: 'rajesh.k@gmail.com',
      guests: 2,
      date: '2026-07-16',
      time: '01:30 PM',
      status: 'confirmed',
      notes: 'Requesting mild spice level for the Madras Fish Curry.',
      submissionTime: '2026-07-14T11:40:00.000Z',
    },
  ]);

  const handleOpenBooking = () => {
    setPreselectedDish(undefined);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithDish = (dishName: string) => {
    setPreselectedDish(dishName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedDish(undefined);
  };

  const handleCreateReservation = (
    newRes: Omit<Reservation, 'id' | 'status' | 'submissionTime'>
  ) => {
    const reservation: Reservation = {
      ...newRes,
      id: `res-${Date.now()}`,
      status: 'confirmed',
      submissionTime: new Date().toISOString(),
    };
    setReservations((prev) => [reservation, ...prev]);
  };

  const handleCancelReservation = (id: string) => {
    if (window.confirm('Are you sure you want to cancel this royal table reservation?')) {
      setReservations((prev) => prev.filter((res) => res.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-heritage-cream text-heritage-charcoal font-sans relative" id="app-root">
      
      {/* Persistant Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* SECTION 1: Hero Banner */}
      <HeroSection onOpenBooking={handleOpenBooking} />

      {/* SECTION 2: Why We Stand Out */}
      <StandoutSection />

      {/* SECTION 3: About Us & The Story */}
      <AboutSection />

      {/* SECTION 4: Interactive Menu */}
      <MenuSection onOpenBookingWithDish={handleOpenBookingWithDish} />

      {/* SECTION 5: Testimonials, Contact and Live Ledger Tracker */}
      <ReservationSection
        onOpenBooking={handleOpenBooking}
        reservations={reservations}
        onCancelReservation={handleCancelReservation}
      />

      {/* Dynamic Footer */}
      <Footer />

      {/* Pop-up Table Booking Form Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        onSubmit={handleCreateReservation}
        preselectedDish={preselectedDish}
      />

    </div>
  );
}
