import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { faqsData } from '../data/faqsData';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const validate = () => {
    const errors = {};
    if (!fullName.trim()) errors.fullName = 'Please enter your full name.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errors.email = 'Valid email is required.';
    if (!phone.trim()) errors.phone = 'Phone number is required.';
    if (!subject.trim()) errors.subject = 'Please specify a subject.';
    if (!message.trim() || message.length < 10) errors.message = 'Message must be at least 10 characters long.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
    setFullName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setFormErrors({});

    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-offwhite pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-navy-900 text-white py-16 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-wider">
            We Are Here For You 24/7
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Contact YoYo Hotels Concierge
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Have questions about a reservation, private group inquiries, or custom hotel requests? Our global advisors are always ready to assist.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-luxury flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 text-navy-900 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-gold-dark" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-navy-900">Phone Support</h3>
              <p className="text-xs text-charcoal-muted mt-1">24/7 toll-free global hotline</p>
              <p className="text-sm font-bold text-navy-900 mt-2">+1 (800) 969-6969</p>
              <p className="text-xs text-charcoal-muted">+91 22 6800 9000 (India)</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-luxury flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 text-navy-900 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-gold-dark" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-navy-900">Email Concierge</h3>
              <p className="text-xs text-charcoal-muted mt-1">Typical response within 2 hours</p>
              <p className="text-sm font-bold text-navy-900 mt-2">concierge@yoyohotels.com</p>
              <p className="text-xs text-charcoal-muted">support@yoyohotels.com</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-luxury flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 text-navy-900 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-gold-dark" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-navy-900">Global Offices</h3>
              <p className="text-xs text-charcoal-muted mt-1">International corporate locations</p>
              <p className="text-xs text-charcoal mt-2"><strong>Dubai:</strong> DIFC Gate Tower, Level 42</p>
              <p className="text-xs text-charcoal"><strong>Mumbai:</strong> Nariman Point, Marine Drive</p>
            </div>
          </div>

        </div>

        {/* Contact Form & Office Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-luxury space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-900">
                Send Us a Message
              </h2>
              <p className="text-xs text-charcoal-muted mt-1">
                Fill in the details below and a senior hospitality specialist will be in touch promptly.
              </p>
            </div>

            {isSubmitted && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs space-y-1 animate-fade-in flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm">Thank You for Reaching Out!</strong>
                  <span>Your message has been successfully received. A concierge will reply to your email shortly.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alexander Wright"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
                />
                {formErrors.fullName && (
                  <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alexander@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
                  />
                  {formErrors.email && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
                  />
                  {formErrors.phone && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Reservation Inquiry / Group Booking / Special Celebration"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
                />
                {formErrors.subject && (
                  <p className="text-xs text-red-500 mt-1">{formErrors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Message *
                </label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your upcoming travel plans, destination preferences, or queries..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-gold focus:outline-none"
                />
                {formErrors.message && (
                  <p className="text-xs text-red-500 mt-1">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gold hover:bg-gold-light text-navy-900 text-xs font-bold shadow-gold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>

          {/* Office Locations & FAQ Preview (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-navy-900 rounded-3xl p-8 text-white space-y-5 border border-gold/30 shadow-2xl">
              <h3 className="font-serif text-xl font-bold text-gold">
                YoYo Hotels Global Presence
              </h3>
              
              <div className="space-y-4 text-xs text-gray-300">
                <div className="pb-3 border-b border-white/10">
                  <p className="font-bold text-white text-sm">Dubai Headquarters (MENA)</p>
                  <p>Level 42, Al Saada Tower, One DIFC Gate, Dubai, United Arab Emirates</p>
                  <p className="text-gold mt-1">concierge.dubai@yoyohotels.com</p>
                </div>

                <div className="pb-3 border-b border-white/10">
                  <p className="font-bold text-white text-sm">Mumbai Regional Flagship (India)</p>
                  <p>Express Towers, 14th Floor, Barrister Rajni Patel Marg, Nariman Point, Mumbai 400021</p>
                  <p className="text-gold mt-1">concierge.mumbai@yoyohotels.com</p>
                </div>

                <div>
                  <p className="font-bold text-white text-sm">New Delhi Heritage Bureau</p>
                  <p>Janpath Diplomatic Square, New Delhi 110001, India</p>
                  <p className="text-gold mt-1">concierge.delhi@yoyohotels.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-luxury space-y-3 text-xs text-charcoal">
              <div className="flex items-center gap-2 font-bold text-navy-900 text-sm">
                <Clock className="w-4 h-4 text-gold-dark" />
                <span>Concierge Desk Availability</span>
              </div>
              <p>• <strong>Digital Reservations & App Support:</strong> 24 Hours / 7 Days</p>
              <p>• <strong>Corporate & Private Jet Concierge:</strong> Monday - Saturday (8 AM to 10 PM)</p>
              <p>• <strong>Live Chat Support:</strong> Available 24/7 on website footer</p>
            </div>

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-luxury space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-charcoal-muted mt-1">
              Find quick answers regarding our booking procedures, cancellation rules, and demo platform features.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqsData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-offwhite transition-colors"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-navy-900">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gold-dark shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 bg-offwhite text-xs sm:text-sm text-charcoal leading-relaxed border-t border-gray-100 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
