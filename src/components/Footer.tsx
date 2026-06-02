export function Footer() {
  return (
    <footer className="bg-brand-secondary py-20 border-t border-brand-accent/10">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <div className="font-dela text-[28px] text-brand-text">
              Eye<span className="text-brand-accent">Level</span>
            </div>
            <p className="text-brand-text/70 text-sm max-w-[340px] leading-relaxed font-bricolage">
              A SaaS marketing agency in India building pipeline systems for seed to Series B companies.
            </p>
          </div>
          
          <div className="font-bricolage">
            <h4 className="font-semibold text-xs tracking-wider uppercase text-brand-accent mb-5">
              Quick Links
            </h4>
            <div className="space-y-2.5">
              <a href="#services" className="block text-brand-text/70 text-sm hover:text-brand-accent transition-colors duration-200">
                Services
              </a>
              <a href="#who-we-help" className="block text-brand-text/70 text-sm hover:text-brand-accent transition-colors duration-200">
                Who We Help
              </a>
              <a href="#faq" className="block text-brand-text/70 text-sm hover:text-brand-accent transition-colors duration-200">
                FAQ
              </a>
              <a 
                href="https://theeyelevelstudio.com/booking" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-brand-text/70 text-sm hover:text-brand-accent transition-colors duration-200"
              >
                Book a Call
              </a>
            </div>
          </div>
          
          <div className="font-bricolage">
            <h4 className="font-semibold text-xs tracking-wider uppercase text-brand-accent mb-5">
              Contact
            </h4>
            <div className="space-y-2.5">
              <a 
                href="mailto:hello@theeyelevelstudio.com" 
                className="block text-brand-text/70 text-sm hover:text-brand-accent transition-colors duration-200"
              >
                hello@theeyelevelstudio.com
              </a>
              <a 
                href="https://theeyelevelstudio.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-brand-text/70 text-sm hover:text-brand-accent transition-colors duration-200"
              >
                theeyelevelstudio.com
              </a>
              <p className="text-brand-text/70 text-sm">
                India · Remote-first
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-brand-accent/10 text-xs text-brand-text/50 font-bricolage">
          © 2025 EyeLevel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
