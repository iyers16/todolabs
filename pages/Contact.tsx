import React, { useState } from 'react';
import Typewriter from '../components/Typewriter';
import { Send, MapPin, Globe, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'PILOT_REQUEST', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("access_key", "726cb54b-a441-4564-bb3f-6c27ff5f96cc");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", `[${formData.subject}] New Contact from TODO Labs`);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const res = await response.json();
      if (res.success) {
        setSubmitted(true);
      } else {
        alert("Transmission failed. Please check your network connection.");
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 animate-in fade-in duration-700">
        <div className="w-16 h-16 border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 animate-pulse">
          <Send size={32} />
        </div>
        <h2 className="text-3xl font-bold text-green-500">TRANSMISSION RECEIVED</h2>
        <p className="text-green-700 max-w-md font-mono">
          Your message has been successfully queued for review.
          <br />
          A TODO Labs representative will establish contact shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: 'PILOT_REQUEST', message: '' });
          }}
          className="text-xs text-green-500 underline uppercase tracking-widest mt-4 hover:text-green-300 transition-colors"
        >
          Send another transmission?
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12 py-4">
      <section>
        <h1 className="text-4xl font-bold mb-4">
          <Typewriter text="GIVE US A TODO" speed={60} />
        </h1>
        <p className="text-green-700 max-w-2xl leading-relaxed">
          Need a solution to a problem that shouldn't exist? We're
          ready to help you scale the impossible. Reach out below.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[20px] text-green-900 uppercase font-mono font-bold">Sender Name</label>
              <input
                required
                type="text"
                placeholder="Ex: John Titor"
                className="w-full bg-black border border-green-900 p-3 text-green-500 outline-none focus:border-green-500 transition-colors placeholder:text-green-900/50"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[20px] text-green-900 uppercase font-mono font-bold">Email</label>
              <input
                required
                type="email"
                placeholder="Ex: agent@domain.com"
                className="w-full bg-black border border-green-900 p-3 text-green-500 outline-none focus:border-green-500 transition-colors placeholder:text-green-900/50"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[20px] text-green-900 uppercase font-mono font-bold">Query Type</label>
            <select
              className="w-full bg-black border border-green-900 p-3 text-green-500 outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            >
              <option value="PILOT_REQUEST" className="bg-black">Vantage</option>
              <option value="ORBITAL_SUPPORT" className="bg-black">Parallax</option>
              <option value="PCB_DESIGN" className="bg-black">Etch</option>
              <option value="CUSTOM" className="bg-black">Custom inquiry</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[20px] text-green-900 uppercase font-mono font-bold">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Describe the hard problem you're solving..."
              className="w-full bg-black border border-green-900 p-3 text-green-500 outline-none focus:border-green-500 transition-colors placeholder:text-green-900/50 resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 text-black py-4 font-bold hover:bg-green-400 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            {isSubmitting ? "TRANSMITTING..." : "SEND"} 
            <Send size={18} className={`${isSubmitting ? 'animate-ping' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;