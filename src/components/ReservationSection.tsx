import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Clock, MapPin, Calendar, CheckCircle, ArrowRight, Search, Users2 } from 'lucide-react';
import { REVIEWS } from '../data';
import { Reservation } from '../types';

interface ReservationSectionProps {
  onOpenBooking: () => void;
  reservations: Reservation[];
  onCancelReservation: (id: string) => void;
}

export default function ReservationSection({
  onOpenBooking,
  reservations,
  onCancelReservation,
}: ReservationSectionProps) {
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
    <section id="reservations" className="py-20 md:py-28 bg-heritage-cream text-heritage-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Block */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-heritage-gold block mb-2">
              The Patron Experience
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-medium tracking-tighter">
              Testimonials from Our Royal Guests
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white p-8 rounded-none border border-heritage-gold/20 shadow-artistic relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-heritage-gold text-heritage-gold" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-heritage-gold/25 mb-3 absolute right-8 top-8" />
                  <p className="text-heritage-gray text-sm font-serif italic leading-relaxed mb-6">
                    "{review.comment}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 pt-4 border-t border-heritage-gold/15">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-none object-cover border border-heritage-gold"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif-display font-bold text-sm text-heritage-charcoal">
                      {review.name}
                    </h4>
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-heritage-gray">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Panel: Interactive reservation ledger + timings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-16">
          
          {/* Reservation timings & details */}
          <div className="lg:col-span-5 bg-heritage-dark text-white p-8 md:p-12 rounded-none border border-heritage-gold/30 flex flex-col justify-between shadow-artistic">
            <div>
              <span className="text-xs font-bold text-heritage-gold uppercase tracking-[0.25em] block mb-2">
                Join the Feast
              </span>
              <h3 className="font-serif-display text-2xl md:text-3xl font-medium tracking-tight mb-6">
                Hours & Seat Bookings
              </h3>

              <div className="space-y-6 my-8">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/5 rounded-none text-heritage-gold mt-1 border border-white/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-heritage-gold">Operating Hours</h4>
                    <p className="text-xs text-gray-300 font-light mt-1">
                      Tuesday – Sunday (Closed on Mondays) <br />
                      Lunch: 11:30 AM – 3:30 PM <br />
                      Dinner: 6:30 PM – 11:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/5 rounded-none text-heritage-gold mt-1 border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-heritage-gold">Our Chennai Location</h4>
                    <p className="text-xs text-gray-300 font-light mt-1">
                      64, Khader Nawaz Khan Road, Nungambakkam, Chennai, Tamil Nadu - 600006
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenBooking}
                className="w-full py-4 bg-heritage-gold text-heritage-dark rounded-none text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-200 flex items-center justify-center space-x-2"
                id="reservations-section-cta"
              >
                <Calendar className="w-4 h-4" />
                <span>Open Booking Console</span>
              </button>
              <p className="text-[10px] text-gray-400 text-center mt-3 font-light">
                *Reservations can be canceled or rescheduled up to 1 hour prior.
              </p>
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
                  <p className="text-xs text-heritage-gray font-light mt-1">
                    Real-time list of all confirmed seats at Fort Restaurant
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 bg-heritage-gold/10 text-heritage-dark border border-heritage-gold/20 text-[9px] font-bold uppercase tracking-wider flex items-center space-x-1">
                    <Users2 className="w-3 h-3 text-heritage-gold" />
                    <span>{reservations.length} Active</span>
                  </span>
                  <span className="px-2.5 py-1 bg-green-100 text-green-800 text-[9px] font-bold rounded-none animate-pulse flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                    <span>Live Terminal</span>
                  </span>
                </div>
              </div>

              {/* Real-time search filter */}
              {reservations.length > 0 && (
                <div className="relative mb-5">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-heritage-gold pointer-events-none">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search booked people by name, phone, or time slot..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-heritage-cream/40 border border-heritage-gold/25 text-xs text-heritage-dark focus:outline-none focus:border-heritage-gold transition-colors font-sans"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-heritage-dark text-[11px] font-medium"
                    >
                      Clear
                    </button>
                  )}
                </div>
              )}

              {reservations.length === 0 ? (
                <div className="py-12 text-center border-2 border-dashed border-heritage-gold/20 rounded-none">
                  <Calendar className="w-10 h-10 text-heritage-gold/40 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-heritage-charcoal">No Active Reservations</p>
                  <p className="text-xs text-heritage-gray max-w-xs mx-auto mt-1">
                    Click "Open Booking Console" or select a dish to secure your royal seat.
                  </p>
                </div>
              ) : filteredReservations.length === 0 ? (
                <div className="py-10 text-center bg-heritage-cream/20 border border-heritage-gold/10">
                  <p className="text-sm font-medium text-heritage-charcoal">No matches found</p>
                  <p className="text-xs text-heritage-gray mt-1">
                    We couldn't find any booking matching "{searchTerm}"
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-heritage-gold">
                  {filteredReservations.map((res) => (
                    <motion.div
                      key={res.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 bg-heritage-cream/40 rounded-none border border-heritage-gold/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:border-heritage-gold transition-colors duration-200"
                    >
                      <div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="font-semibold text-sm text-heritage-charcoal">{res.name}</span>
                          <span className="text-[9px] px-2 py-0.5 bg-green-100 text-green-800 font-bold rounded-none uppercase">
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
                      <button
                        onClick={() => onCancelReservation(res.id)}
                        className="text-xs text-red-600 hover:text-red-800 hover:underline font-semibold self-end sm:self-center"
                      >
                        Cancel Seat
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick action helper to prompt booking */}
            <div className="mt-6 pt-6 border-t border-heritage-gold/10 flex items-center justify-between text-xs">
              <span className="text-heritage-gray">Ready to skip the queue?</span>
              <button
                onClick={onOpenBooking}
                className="text-heritage-gold font-bold hover:underline flex items-center space-x-1"
              >
                <span>Reserve Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
