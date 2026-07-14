import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, Mail, Users, Clock, CheckCircle, Gift, Landmark } from 'lucide-react';
import { Reservation } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reservation: Omit<Reservation, 'id' | 'status' | 'submissionTime'>) => void;
  preselectedDish?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  onSubmit,
  preselectedDish,
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  // Form states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  // Handle dish pre-selection
  useEffect(() => {
    if (preselectedDish) {
      setNotes(`Request Chef Special Dish: ${preselectedDish}`);
    } else {
      setNotes('');
    }
  }, [preselectedDish, isOpen]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your royal name';
    } else if (name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    // Indian mobile number matching (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!phoneRegex.test(mobile.trim())) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number (e.g. 9876543210)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!date) {
      newErrors.date = 'Select your preferred dining date';
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!time) {
      newErrors.time = 'Select your preferred dining time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Create random booking code
      const code = 'FORT-' + Math.floor(1000 + Math.random() * 9000);
      setReservationCode(code);

      // Submit data to state
      onSubmit({
        name: name.trim(),
        mobile: mobile.trim(),
        email: email.trim(),
        guests: Number(guests),
        date,
        time,
        notes: notes.trim() || undefined,
      });

      setIsSuccess(true);
    }
  };

  const handleResetAndClose = () => {
    setName('');
    setMobile('');
    setEmail('');
    setGuests(2);
    setDate('');
    setTime('');
    setNotes('');
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-heritage-dark/85 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="booking-form"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="bg-white border border-heritage-gold/30 rounded-none max-w-lg w-full overflow-hidden shadow-artistic relative"
          >
            {/* Header banner */}
            <div className="bg-heritage-dark text-white px-6 py-6 border-b border-heritage-gold/20 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-heritage-gold text-heritage-dark rounded-none">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-lg font-bold tracking-wide">
                    Reserve Royal Seat
                  </h3>
                  <p className="text-[9px] text-heritage-gold uppercase tracking-[0.2em] font-bold">
                    Fort Restaurant • Chennai
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-1.5 rounded-none hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="p-6 md:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
              {preselectedDish && (
                <div className="bg-heritage-gold/10 p-3 rounded-none border border-heritage-gold/30 text-xs text-heritage-dark flex items-center space-x-2">
                  <Gift className="w-4 h-4 text-heritage-gold flex-shrink-0 fill-heritage-gold" />
                  <span>
                    You selected <strong>{preselectedDish}</strong>. Chef Muthu is notified!
                  </span>
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-heritage-dark mb-1">
                  Full Name of Guest *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-heritage-gray">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 bg-heritage-cream/40 border rounded-none text-sm text-heritage-dark focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-heritage-gold/30 focus:border-heritage-gold'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.name}</p>}
              </div>

              {/* Mobile and Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mobile */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-heritage-dark mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-heritage-gray">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="e.g. 9876543210"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                      className={`w-full pl-10 pr-4 py-2.5 bg-heritage-cream/40 border rounded-none text-sm text-heritage-dark focus:outline-none transition-colors ${
                        errors.mobile ? 'border-red-500 focus:border-red-500' : 'border-heritage-gold/30 focus:border-heritage-gold'
                      }`}
                    />
                  </div>
                  {errors.mobile && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.mobile}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-heritage-dark mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-heritage-gray">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      placeholder="e.g. guest@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 bg-heritage-cream/40 border rounded-none text-sm text-heritage-dark focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-heritage-gold/30 focus:border-heritage-gold'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.email}</p>}
                </div>
              </div>

              {/* Guests Count */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-heritage-dark mb-1">
                  Number of Persons *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-heritage-gray">
                    <Users className="w-4 h-4" />
                  </span>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2.5 bg-heritage-cream/40 border border-heritage-gold/30 rounded-none text-sm text-heritage-dark focus:outline-none focus:border-heritage-gold transition-colors appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Person (Solo Seat)' : `Persons`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-heritage-dark mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-heritage-gray">
                      <Calendar className="w-4 h-4" />
                    </span>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 bg-heritage-cream/40 border rounded-none text-sm text-heritage-dark focus:outline-none transition-colors ${
                        errors.date ? 'border-red-500 focus:border-red-500' : 'border-heritage-gold/30 focus:border-heritage-gold'
                      }`}
                    />
                  </div>
                  {errors.date && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.date}</p>}
                </div>

                {/* Time */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-heritage-dark mb-1">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-heritage-gray">
                      <Clock className="w-4 h-4" />
                    </span>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 bg-heritage-cream/40 border rounded-none text-sm text-heritage-dark focus:outline-none transition-colors appearance-none ${
                        errors.time ? 'border-red-500 focus:border-red-500' : 'border-heritage-gold/30 focus:border-heritage-gold'
                      }`}
                    >
                      <option value="">Select a slot</option>
                      <option disabled>-- Lunch Slots --</option>
                      <option value="11:30 AM">11:30 AM (Royal Lunch Start)</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="01:30 PM">01:30 PM</option>
                      <option value="02:30 PM">02:30 PM</option>
                      <option disabled>-- Dinner Slots --</option>
                      <option value="06:30 PM">06:30 PM (Grand Dinner Start)</option>
                      <option value="07:30 PM">07:30 PM</option>
                      <option value="08:30 PM">08:30 PM</option>
                      <option value="09:30 PM">09:30 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                    </select>
                  </div>
                  {errors.time && <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.time}</p>}
                </div>
              </div>

              {/* Special Instructions / Notes */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-heritage-dark mb-1">
                  Special Notes or Culinary Requests
                </label>
                <textarea
                  placeholder="e.g. Anniversary dinner, extra high chair for baby, mild spices, or particular table preferences."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2.5 bg-heritage-cream/40 border border-heritage-gold/30 rounded-none text-sm text-heritage-dark focus:outline-none focus:border-heritage-gold transition-colors"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-heritage-gold/10 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-gray-300 text-heritage-gray rounded-none text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-heritage-gold text-heritage-dark rounded-none text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-heritage-dark hover:text-white transition-all duration-300"
                >
                  Secure Royal Seat
                </button>
              </div>

            </form>
          </motion.div>
        ) : (
          /* Confirmation Slide */
          <motion.div
            key="booking-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[#232323] text-white border border-heritage-gold/30 rounded-none max-w-md w-full p-8 text-center shadow-artistic-gold relative"
          >
            <div className="w-16 h-16 bg-heritage-gold/20 text-heritage-gold rounded-none flex items-center justify-center mx-auto mb-6 border border-heritage-gold/30">
              <CheckCircle className="w-10 h-10" />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-heritage-gold">
              Booking Confirmed
            </span>
            
            <h3 className="font-serif-display text-2xl font-semibold mt-2 text-white">
              Your Feast Awaits!
            </h3>

            {/* Custom Receipt Slip */}
            <div className="bg-heritage-dark border border-white/5 rounded-none p-5 my-6 text-left space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-heritage-gold/5 rounded-full filter blur-xl" />
              
              <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                <span className="text-gray-400">Reservation Reference</span>
                <span className="font-mono text-heritage-gold font-bold">{reservationCode}</span>
              </div>

              <div className="text-xs space-y-2 font-serif">
                <p><strong>Guest:</strong> {name}</p>
                <p><strong>Mobile:</strong> +91 {mobile}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Table Size:</strong> {guests} Persons</p>
                <p><strong>Schedule:</strong> {date} at {time}</p>
                {notes && <p className="italic text-[11px] text-gray-400"><strong>Note:</strong> "{notes}"</p>}
              </div>

              <div className="text-[10px] text-center text-heritage-gold border-t border-white/5 pt-2 tracking-wide font-light">
                📍 64, Khader Nawaz Khan Road, Nungambakkam, Chennai
              </div>
            </div>

            <p className="text-xs text-gray-300 font-serif italic mb-6">
              A royal digital ticket has been dispatched to <strong>{email}</strong>. We look forward to serving you Chennai’s finest heritage cuisine!
            </p>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 bg-heritage-gold text-heritage-dark text-[10px] font-bold uppercase tracking-[0.2em] rounded-none hover:bg-white transition-colors duration-200"
            >
              Back to Home
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
