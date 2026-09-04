import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp, MessageSquare } from 'lucide-react';
import { REVIEWS, STORE_INFO } from '../data/electronicsData.ts';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              What Shabqadar Says About Us
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              Real reviews from homeowners and business proprietors across Shabqadar and Charsadda who rely on Malik Electronics.
            </p>
          </div>

          {/* Aggregate Rating Badge */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shrink-0">
            <div className="text-center">
              <div className="font-heading font-black text-3xl text-slate-900 leading-none">
                4.9
              </div>
              <div className="text-[11px] text-slate-500 font-bold uppercase mt-1">
                Out of 5.0
              </div>
            </div>
            <div className="border-l border-slate-200 pl-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-semibold text-slate-700 mt-1">
                Based on 200+ Local Customers
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Grid: ⭐⭐⭐⭐⭐ ratings, bold names */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars: ⭐⭐⭐⭐⭐ */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Verified Purchase Tag */}
                <div className="mb-3.5 inline-block bg-blue-50 text-blue-800 text-[11px] font-bold px-2 py-0.5 rounded border border-blue-100">
                  Purchased: {review.verifiedPurchase}
                </div>

                {/* Review Body */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Customer Info: Bold Name + Location */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  {/* Bold Customer Name */}
                  <h4 className="font-heading font-black text-slate-950 text-base">
                    {review.name}
                  </h4>
                  <div className="text-xs text-slate-500 font-medium">
                    {review.location}
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center" title="Verified Customer">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Callout box for prospective buyers */}
        <div className="mt-10 bg-slate-100 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ThumbsUp className="w-6 h-6 text-blue-700 shrink-0 hidden sm:block" />
            <p className="text-sm font-semibold text-slate-800">
              Have you bought an appliance from us in Shabqadar? We value your honest feedback and satisfaction!
            </p>
          </div>

          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Assalam%20o%20Alaikum%20Malik%20Electronics%2C%20I%20would%20like%20to%20share%20my%20feedback%20or%20ask%20a%20question.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-4 py-2 rounded-lg text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Send Feedback on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
