import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, Search, HelpCircle, Users2, Shield, Ticket, Star } from 'lucide-react';
import { Reservation } from '../types';

interface ReservationsPageProps {
  onOpenBooking: () => void;
  reservations: Reservation[];
  onCancelReservation: (id: string) => void;
}

export default function ReservationsPage({
  onOpenBooking,
  reservations,
  onCancelReservation,
}: ReservationsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReservations = reservations.filter((res) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    return (
      res.name.toLowerCase().includes(term) ||
      res.mobile.includes(term) ||
      res.time.toLowerCase().includes(term) ||
      (res.notes && res.notes.toLowerCase().includes(term))
    );
  });

  return (
    <div className="pt-24 min-h-screen bg-heritage-cream text-heritage-charcoal font-sans" id="reservations-page">
      {/* Page Header */}
      <div className="bg-heritage-dark text-white py-16 md:py-24 relative overflow-hidden border-b border-heritage-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0%,transparent_100%)] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-heritage-gold font-bold block mb-3">
              LIVE SEATING SYSTEM
            </span>
            <h1 className="font-serif-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl mx-auto">
              Heritage Reservations
            </h1>
            <div className="w-16 h-[2px] bg-heritage-gold mx-auto my-6" />
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Secure your royal seats inside our restored 18th-century sanctuary. View live table counts, active seating configurations, and booking protocols below.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Seating Policies and Booking Form Link */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white p-8 border border-heritage-gold/20 shadow-artistic text-center">
              <Calendar className="w-10 h-10 text-heritage-gold mx-auto mb-4" />
              <h2 className="font-serif-display text-2xl font-bold text-heritage-dark mb-2">
                Secure Royal Table
              </h2>
              <p className="text-xs text-heritage-gray font-light leading-relaxed mb-6">
                All table reservations are confirmed instantly. A royal digital ticket containing your unique booking reference will be generated and logged live in our ledger.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full py-4 bg-heritage-gold text-heritage-dark hover:bg-heritage-dark hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em] shadow-md hover:shadow-heritage-gold/20"
              >
                Open Seating Console
              </button>
            </div>

            {/* Protocol Card */}
            <div className="bg-heritage-dark text-white p-8 border border-heritage-gold/30">
              <h3 className="font-serif-display text-lg font-semibold text-heritage-gold flex items-center space-x-2 mb-4">
                <Shield className="w-5 h-5 text-heritage-gold" />
                <span>Royal House Protocol</span>
              </h3>
              
              <ul className="space-y-4 text-xs font-light text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-heritage-gold rounded-full mt-1.5 flex-shrink-0" />
                  <p><strong>Dress Code:</strong> Smart casual or traditional Indian attire. Kindly refrain from wearing slippers, athletic jerseys, or beachwear.</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-heritage-gold rounded-full mt-1.5 flex-shrink-0" />
                  <p><strong>Grace Period:</strong> We hold reserved tables for exactly 15 minutes past the scheduled hour before releasing the seat to walk-in patrons.</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-heritage-gold rounded-full mt-1.5 flex-shrink-0" />
                  <p><strong>Cancellations:</strong> Please cancel your reservation in the ledger or phone us at least 2 hours in advance if your plans shift.</p>
                </li>
              </ul>
            </div>

          </div>

          {/* Interactive Live Reservations Ledger */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-none border border-heritage-gold/20 shadow-artistic flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-serif-display text-2xl font-semibold tracking-tight text-heritage-charcoal">
                    Your Bookings Ledger
                  </h3>
                  <p className="text-xs text-heritage-gray font-light mt-1 font-sans">
                    Real-time list of all confirmed seats at Fort Restaurant
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1.5 bg-heritage-gold/15 text-heritage-dark border border-heritage-gold/20 text-[9px] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                    <Users2 className="w-3.5 h-3.5 text-heritage-gold" />
                    <span>{reservations.length} Active</span>
                  </span>
                  <span className="px-2.5 py-1.5 bg-green-100 text-green-800 text-[9px] font-bold rounded-none animate-pulse flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                    <span>Live Terminal</span>
                  </span>
                </div>
              </div>

              {/* Real-time search filter */}
              {reservations.length > 0 && (
                <div className="relative mb-5">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-heritage-gold pointer-events-none">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search booked people by name, phone, or time slot..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-heritage-cream/40 border border-heritage-gold/25 text-xs text-heritage-dark focus:outline-none focus:border-heritage-gold transition-colors font-sans"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-heritage-dark text-xs font-medium"
                    >
                      Clear
                    </button>
                  )}
                </div>
              )}

              {reservations.length === 0 ? (
                <div className="py-16 text-center border-2 border-dashed border-heritage-gold/20 rounded-none">
                  <Calendar className="w-10 h-10 text-heritage-gold/30 mx-auto mb-3" />
                  <p className="text-sm font-medium text-heritage-charcoal font-sans">No reservations currently active</p>
                  <p className="text-xs text-heritage-gray mt-1 max-w-xs mx-auto font-sans leading-relaxed">
                    Click "Open Seating Console" to secure your royal seat.
                  </p>
                </div>
              ) : filteredReservations.length === 0 ? (
                <div className="py-12 text-center bg-heritage-cream/25 border border-heritage-gold/10">
                  <p className="text-sm font-medium text-heritage-charcoal font-sans">No matches found</p>
                  <p className="text-xs text-heritage-gray mt-1 font-sans">
                    We couldn't find any booking matching "{searchTerm}"
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-heritage-gold font-sans">
                  <AnimatePresence mode="popLayout">
                    {filteredReservations.map((res) => (
                      <motion.div
                        key={res.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-5 bg-heritage-cream/40 rounded-none border border-heritage-gold/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-heritage-gold transition-colors duration-200 group"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-heritage-dark text-sm group-hover:text-heritage-gold transition-colors duration-200">
                              {res.name}
                            </h4>
                            <span className="px-1.5 py-0.5 bg-green-100 text-green-800 text-[8px] font-bold uppercase rounded-none tracking-wider">
                              {res.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-xs text-heritage-gray font-sans">
                            <span>📅 {res.date}</span>
                            <span>⏰ {res.time}</span>
                            <span>👥 {res.guests} Persons</span>
                            <span>📞 {res.mobile}</span>
                          </div>
                          {res.notes && (
                            <div className="mt-1.5 text-[10px] italic text-heritage-gray bg-white px-2 py-0.5 rounded-none border border-heritage-gold/10 inline-block font-sans">
                              📌 Note: "{res.notes}"
                            </div>
                          )}
                        </div>
                        <div className="w-full sm:w-auto flex sm:flex-col justify-between items-end gap-2 border-t sm:border-t-0 border-heritage-gold/10 pt-2 sm:pt-0">
                          <span className="text-[10px] text-heritage-gold font-mono tracking-wider bg-heritage-dark text-white px-2 py-0.5 border border-heritage-gold/20">
                            {res.id.startsWith('res-17') ? 'FORT-' + res.id.slice(-4) : res.id === 'res-1' ? 'FORT-7832' : res.id === 'res-2' ? 'FORT-1294' : 'FORT-' + Math.floor(1000 + Math.random() * 9000)}
                          </span>
                          <button
                            onClick={() => onCancelReservation(res.id)}
                            className="text-[9px] uppercase tracking-wider font-bold text-red-500 hover:text-red-700 transition-colors hover:underline"
                          >
                            Cancel Reservation
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section className="bg-heritage-dark text-white py-16 border-t border-heritage-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Ticket className="w-8 h-8 text-heritage-gold mx-auto mb-2 animate-bounce" />
          <h3 className="font-serif-display text-2xl font-bold text-white">Need a custom private banquet?</h3>
          <p className="text-xs text-gray-300 max-w-xl mx-auto leading-relaxed">
            For group bookings exceeding 12 guests, private corporate banquets inside our courtyard, or bespoke anniversary configurations, please contact our chief catering steward directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs font-semibold uppercase tracking-wider text-heritage-gold">
            <span>📞 +91 95512 58012</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>✉️ noblefeast@fortrestaurant.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}
