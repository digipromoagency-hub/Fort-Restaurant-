import React from 'react';
import { Scroll, Compass, Heart, Scale } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 min-h-screen bg-heritage-cream text-heritage-charcoal font-sans" id="terms-page">
      {/* Header */}
      <div className="bg-heritage-dark text-white py-12 md:py-16 relative overflow-hidden border-b border-heritage-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-heritage-gold font-bold block mb-2">
            LEGAL TERMS
          </span>
          <h1 className="font-serif-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="text-[10px] text-gray-400 font-mono mt-2">
            Last Updated: July 15, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
        
        <div className="flex items-start space-x-3 bg-white p-5 border border-heritage-gold/20 shadow-sm">
          <Scale className="w-6 h-6 text-heritage-gold flex-shrink-0 mt-0.5" />
          <div className="text-xs text-heritage-gray leading-relaxed">
            <strong className="text-heritage-dark font-semibold">User Agreement:</strong> By accessing, browsing, or placing reservations on this platform, you agree to abide by Fort Restaurant’s house protocols and dining terms.
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            1. Table Booking and Real-Time Seating
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            Our seating ledger holds your digital ticket based on your requested slot. To guarantee a high-quality, relaxed experience for all guests, we require:
          </p>
          <ul className="list-disc pl-5 text-xs text-heritage-gray space-y-1.5 font-light">
            <li>Accurate contact names and active mobile numbers during booking.</li>
            <li>No booking of multiple overlapping slots by the same user to prevent system abuse.</li>
            <li>Cancellations to be submitted at least 2 hours before the dine-in time to allow waitlisted families to occupy the seats.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            2. Dining Conduct and House Etiquette
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            Fort Restaurant maintains a serene, respectful heritage atmosphere. We reserve the absolute right to refuse entry or ask guests to leave if:
          </p>
          <ul className="list-disc pl-5 text-xs text-heritage-gray space-y-1.5 font-light">
            <li>There is behavior that disrupts other diners or our live musical artists.</li>
            <li>Guests show verbal hostility, intoxication, or intentional property damage.</li>
            <li>Guests violate our core Smart Casual / Traditional Indian dress code policy.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            3. Webhook Integration and API Usage
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            This website incorporates an external webhook communication module to synchronize booking logs. Any attempt to flood, spam, scrape, or execute malicious denial-of-service scripts targeting our booking console endpoints is strictly prohibited and will result in permanent IP blacklisting and potential legal actions under state laws.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            4. Amendments of Terms
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            We reserve the right to amend these Terms of Service or modify reservation grace periods without prior notice. Continuing to use the platform following such changes forms full binding acceptance of those updated guidelines.
          </p>
        </div>

      </section>
    </div>
  );
}
