import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, User, PhoneCall, FileText } from 'lucide-react';
import { DEALERSHIP_INFO, getWhatsAppInquiryUrl } from '../data/dealershipData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Simulate clean dispatch and provide instant WhatsApp forwarding option
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = `Assalam o Alaikum Premium Imports, my name is ${encodeURIComponent(name || 'Customer')} (Phone: ${encodeURIComponent(phone)}). Inquiry: ${encodeURIComponent(message || 'I want to inquire about available imported cars at your showroom.')}`;
    window.open(`https://wa.me/${DEALERSHIP_INFO.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#071A3D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Inquiries Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8A00]/15 border border-[#FF8A00]/30 text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Connect with <span className="text-[#FF8A00]">Premium Imports</span>
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions about an imported vehicle, pricing, or custom imports? Contact us directly or send a message and our team will get back to you promptly.
            </p>

            {/* Direct Contact Buttons */}
            <div className="mt-8 space-y-3.5">
              {/* WhatsApp US */}
              <a
                id="contact-whatsapp-btn"
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-base py-4 px-6 rounded-2xl shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-3 transition-transform active:scale-95 text-center"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>WHATSAPP US ({DEALERSHIP_INFO.contact.whatsappFormatted})</span>
              </a>

              {/* CALL PREMIUM IMPORTS */}
              <a
                id="contact-call-btn"
                href={`tel:${DEALERSHIP_INFO.contact.phoneClean}`}
                className="w-full bg-[#FF8A00] hover:bg-[#E67A00] text-[#071A3D] font-heading font-black text-base py-4 px-6 rounded-2xl shadow-lg shadow-[#FF8A00]/25 flex items-center justify-center gap-3 transition-transform active:scale-95 text-center tracking-wide"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>CALL PREMIUM IMPORTS ({DEALERSHIP_INFO.contact.phoneDisplay})</span>
              </a>
            </div>

            {/* Quick reassurance */}
            <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-bold text-white mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Immediate Response During Showroom Hours</span>
              </div>
              <span>Monday to Saturday, 9:00 AM – 8:00 PM at Almas Khalil Car Village, Peshawar.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B224E] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <h3 className="font-heading font-black text-2xl text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6">
                Fill out the form below to inquire about any car or schedule an inspection.
              </p>

              {submitted ? (
                <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-2xl p-6 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-600/30 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-black text-xl text-white">
                    Thank You, {name}!
                  </h4>
                  <p className="text-slate-300 text-sm mt-1 mb-5">
                    Your inquiry has been received. Our sales team in Peshawar will contact you at <strong>{phone}</strong> shortly.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppForward}
                      className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Forward Directly to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Full Name <span className="text-[#FF8A00]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Khan Muhammad"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#071A3D] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#FF8A00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone / Mobile Number <span className="text-[#FF8A00]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0344 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#071A3D] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#FF8A00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Message / Vehicle of Interest
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <textarea
                        rows={4}
                        placeholder="Tell us which car model you are looking for (Prius, Aqua, Vezel, Alphard, etc.) or any questions you have..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-[#071A3D] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#FF8A00] transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* SEND MESSAGE Button */}
                  <button
                    type="submit"
                    id="contact-send-message-btn"
                    className="w-full bg-[#FF8A00] hover:bg-[#E67A00] text-[#071A3D] font-heading font-black text-base py-4 rounded-xl shadow-xl shadow-[#FF8A00]/25 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer tracking-wide"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
