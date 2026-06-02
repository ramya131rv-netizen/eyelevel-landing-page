import { useState } from "react";
import { Button } from "../ui/button";

export function HeroForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState("Go-to-Market Strategy");
  
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !email.trim()) {
      setErrorMsg("⚠ Please fill in your name and email.");
      return;
    }

    // Success state transition
    setSubmitted(true);
  };

  if (submitted) {
    const firstName = name.trim().split(" ")[0];
    return (
      <div className="bg-brand-secondary border border-brand-accent/25 rounded-[20px] p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] font-bricolage transition-all duration-300">
        <h3 className="font-dela text-2xl text-brand-accent mb-4 leading-tight">
          Thank you!
        </h3>
        <p className="text-brand-text/95 text-base mb-6">
          Thanks {firstName} — we'll review your details and get in touch within one business day.
        </p>
        <div className="p-4 bg-brand-accent/12 border border-brand-accent rounded-lg text-brand-accent text-sm font-medium flex items-center gap-2">
          ✓ Form submitted successfully.
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-brand-secondary border border-brand-accent/25 rounded-[20px] p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] font-bricolage text-left sticky top-[100px] transition-all duration-300"
    >
      <h3 className="font-dela text-2xl md:text-[28px] text-brand-accent mb-2 leading-tight">
        Talk to us about your marketing.
      </h3>
      <p className="text-xs text-brand-text/60 mb-7">
        Reply within one business day.
      </p>

      {errorMsg && (
        <div className="mb-4 p-3 bg-red-950/40 border border-red-500/50 rounded-lg text-red-300 text-sm font-medium">
          {errorMsg}
        </div>
      )}

      <div className="space-y-[18px] mb-7">
        <div className="space-y-2">
          <label className="block text-xs font-semibold tracking-wider uppercase text-brand-text/60">
            Full Name
          </label>
          <input 
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3.5 bg-brand-primary/60 border border-brand-accent/15 rounded-lg text-brand-text text-sm outline-none focus:border-brand-accent focus:bg-brand-primary/90 transition-all duration-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold tracking-wider uppercase text-brand-text/60">
            Email
          </label>
          <input 
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3.5 bg-brand-primary/60 border border-brand-accent/15 rounded-lg text-brand-text text-sm outline-none focus:border-brand-accent focus:bg-brand-primary/90 transition-all duration-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold tracking-wider uppercase text-brand-text/60">
            Company Name
          </label>
          <input 
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3.5 bg-brand-primary/60 border border-brand-accent/15 rounded-lg text-brand-text text-sm outline-none focus:border-brand-accent focus:bg-brand-primary/90 transition-all duration-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold tracking-wider uppercase text-brand-text/60">
            What do you need help with?
          </label>
          <select 
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            className="w-full px-4 py-3.5 bg-brand-primary/60 border border-brand-accent/15 rounded-lg text-brand-text text-sm outline-none focus:border-brand-accent focus:bg-brand-primary/90 transition-all duration-200 appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23d0e999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center',
              backgroundSize: '16px'
            }}
          >
            <option className="bg-brand-primary text-brand-text" value="Go-to-Market Strategy">Go-to-Market Strategy</option>
            <option className="bg-brand-primary text-brand-text" value="LinkedIn B2B Marketing">LinkedIn B2B Marketing</option>
            <option className="bg-brand-primary text-brand-text" value="AI Content Production">AI Content Production</option>
            <option className="bg-brand-primary text-brand-text" value="Performance Marketing">Performance Marketing</option>
            <option className="bg-brand-primary text-brand-text" value="Marketing Automation">Marketing Automation</option>
            <option className="bg-brand-primary text-brand-text" value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <Button 
        type="submit"
        className="w-full py-4.5 rounded-lg bg-brand-accent text-brand-text-dark font-dela text-sm md:text-base border-none hover:bg-white hover:text-brand-text-dark hover:translate-y-[-2px] hover:shadow-[0_12px_30px_-10px_rgba(255,255,255,0.2)] transition-all duration-250 cursor-pointer"
      >
        Get Started →
      </Button>
    </form>
  );
}
