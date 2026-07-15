import React from 'react';
import { AlertTriangle, Info, Shield, HelpCircle } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="pt-24 min-h-screen bg-heritage-cream text-heritage-charcoal font-sans" id="disclaimer-page">
      {/* Header */}
      <div className="bg-heritage-dark text-white py-12 md:py-16 relative overflow-hidden border-b border-heritage-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-heritage-gold font-bold block mb-2">
            PATRON TERMS
          </span>
          <h1 className="font-serif-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Disclaimer
          </h1>
          <p className="text-[10px] text-gray-400 font-mono mt-2">
            Last Updated: July 15, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
        
        <div className="flex items-start space-x-3 bg-amber-500/5 p-5 border border-amber-500/20 shadow-sm">
          <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-heritage-gray leading-relaxed">
            <strong className="text-heritage-dark font-semibold">Important Dining Disclosures:</strong> This page covers legal limits, recipe descriptions, allergens, and reservation policies. Please read carefully before booking.
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            1. Culinary Authenticity & Recipe Variations
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            Our recipes are traditional heirlooms from the Karaikudi and Chennai coastal basins. Because we reject standardized industrial food chemicals, there may be slight differences in spice levels, textures, and aromas based on seasonal crops (such as changes in Gundu chilli heat or regional tamarind acidity). Our menu descriptions are written to convey the historical "vibe" and heritage origin of each recipe.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            2. Allergens and Health Advisory
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            Fort Restaurant's kitchens handle tree nuts (such as cashews used in gravies), milk/dairy products (such as pure ghee, curd, and condensed milk), seafood, wheat, and sesame. 
          </p>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            While we exercise extreme caution and follow strict sanitary protocols, cross-contamination is a possibility. Patrons with critical allergies must declare their condition to the table steward upon seating. Fort Restaurant assumes no liability for adverse reactions if allergies are not declared during booking or before consumption.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            3. Seat Holding and Release Disclaimer
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            Due to extremely high patron volume and limited seating within our historic 18th-century stone mansion, table reservations are subject to a **strict 15-minute grace period**. If your party does not arrive or check in at our receiving foyer within 15 minutes of your booking time, your table will be released automatically to the walk-in waiting list. We are not responsible for seating delays if you arrive late.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-xl font-bold text-heritage-dark border-b border-heritage-gold/10 pb-2">
            4. Digital Connectivity and Live Terminal Status
          </h2>
          <p className="text-xs text-heritage-gray leading-relaxed font-light">
            The Bookings Ledger on this website represents a real-time client-side terminal state. While we strive to maintain perfect alignment, server-side synchronicities, network latencies, or third-party email delivery delays may occasionally cause minor booking conflicts. In such rare instances, the decision of our Restaurant Manager regarding table re-allocation shall be final and binding.
          </p>
        </div>

      </section>
    </div>
  );
}
