import React from 'react';
import { ShieldCheck, Lock, Eye, RefreshCw } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 min-h-screen bg-heritage-cream text-heritage-charcoal font-sans" id="privacy-policy-page">
      {/* Header */}
      <div className="bg-heritage-dark text-white py-12 md:py-16 relative overflow-hidden border-b border-heritage-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-heritage-gold font-bold block mb-2">
            LEGAL FRAMEWORK
          </span>
          <h1 className="font-serif-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-[10px] text-gray-400 font-mono mt-2">
            Last Updated: July 15, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
        
        <div className="flex items-start space-x-3 bg-white p-5 border border-heritage-gold/20 shadow-sm">
          <ShieldCheck className="w-6 h-6 text-heritage-gold flex-shrink-0 mt-0.5" />
          <div className="text-xs text-heritage-gray leading-relaxed">
            <strong className="text-heritage-dark font-semibold">Your privacy is absolute.</strong> Fort Restaurant, Chennai (referred to as "the Restaurant", "we", "us", or "our") values the trust of our patrons. This policy details how we treat information gathered through our booking ledger and website.
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            1. Information We Collect
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            When you complete a table reservation using our booking console, we collect:
          </p>
          <ul className="list-disc pl-5 text-xs text-heritage-gray space-y-1.5 font-light">
            <li><strong>Personal Identifier:</strong> Your full name to address you at our receiving lobby.</li>
            <li><strong>Contact Details:</strong> Your mobile number and email address to dispatch the digital seating ticket and communicate any changes.</li>
            <li><strong>Seating Preferences:</strong> Party sizes, booking date, slot hours, and any custom dietary or seat placement notes.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            2. How We Use Your Data
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            We use the gathered information strictly for transactional dining procedures:
          </p>
          <ul className="list-disc pl-5 text-xs text-heritage-gray space-y-1.5 font-light">
            <li>Instantly locking and assigning tables in our seating ledger.</li>
            <li>Transmitting webhook confirmations, receipts, and digital SMS text warnings.</li>
            <li>Verifying your reservation details when you arrive at our reception foyer.</li>
            <li>Addressing specified ingredient allergies or special seating guidelines before preparing your meal.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            3. Data Retention and Protection
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            All details in the live terminal database are encrypted under modern security layers. We do not sell, rent, trade, or distribute your email addresses or mobile numbers to third-party advertising brokers. Your records are retained purely to optimize subsequent anniversary bookings.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            4. Webhook and API Connections
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            Our reservation system communicates with automated webhook servers (including local endpoints and Vercel endpoints) to fire immediate receipt records. These transactions are strictly server-bound, ensuring that your contact details remain confidential and completely hidden from public client-side browser caches.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            5. Contact and Rectifications
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            If you wish to purge your data from our bookings history, or update any active seat coordinates, kindly contact our digital officer at <span className="text-heritage-gold hover:underline">noblefeast@fortrestaurant.com</span> or call our reception desk directly.
          </p>
        </div>

      </section>
    </div>
  );
}
