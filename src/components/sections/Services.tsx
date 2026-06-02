export function Services() {
  const serviceList = [
    {
      title: "Go-to-Market Strategy",
      desc: "ICP definition, positioning, channel prioritization, and a 90-day execution plan.",
      icon: (
        <svg className="w-12 h-12 text-brand-accent mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="24" cy="24" r="20"/>
          <circle cx="24" cy="24" r="12"/>
          <circle cx="24" cy="24" r="4"/>
          <line x1="24" y1="0" x2="24" y2="10"/>
          <line x1="24" y1="38" x2="24" y2="48"/>
          <line x1="0" y1="24" x2="10" y2="24"/>
          <line x1="38" y1="24" x2="48" y2="24"/>
        </svg>
      )
    },
    {
      title: "LinkedIn B2B Marketing",
      desc: "Founder personal branding, company page management, and paid LinkedIn campaigns.",
      icon: (
        <svg className="w-12 h-12 text-brand-accent mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="10" cy="12" r="3"/>
          <circle cx="38" cy="10" r="3"/>
          <circle cx="24" cy="26" r="4"/>
          <circle cx="8" cy="38" r="3"/>
          <circle cx="40" cy="38" r="3"/>
          <line x1="12" y1="14" x2="22" y2="24"/>
          <line x1="36" y1="12" x2="26" y2="24"/>
          <line x1="22" y1="28" x2="10" y2="36"/>
          <line x1="26" y1="28" x2="38" y2="36"/>
        </svg>
      )
    },
    {
      title: "AI Content Production",
      desc: "Blog posts, case studies, product explainers, and comparison pages — at scale.",
      icon: (
        <svg className="w-12 h-12 text-brand-accent mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
          <line x1="6" y1="14" x2="36" y2="14"/>
          <line x1="6" y1="24" x2="42" y2="24"/>
          <line x1="6" y1="34" x2="30" y2="34"/>
          <path d="M40 6 L42 12 L48 14 L42 16 L40 22 L38 16 L32 14 L38 12 Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: "Performance Marketing",
      desc: "Google Search and LinkedIn paid campaigns optimized for demo requests.",
      icon: (
        <svg className="w-12 h-12 text-brand-accent mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="30" width="6" height="14"/>
          <rect x="18" y="22" width="6" height="22"/>
          <rect x="30" y="14" width="6" height="30"/>
          <path d="M4 24 L20 12 L30 18 L46 4" />
          <path d="M40 4 L46 4 L46 10"/>
        </svg>
      )
    },
    {
      title: "Marketing Automation",
      desc: "Lead qualification agents and CRM automation using Make.com and Zapier.",
      icon: (
        <svg className="w-12 h-12 text-brand-accent mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M8 24 a16 16 0 0 1 28 -10"/>
          <path d="M40 24 a16 16 0 0 1 -28 10"/>
          <polyline points="30,8 36,14 30,20"/>
          <polyline points="18,40 12,34 18,28"/>
        </svg>
      )
    },
    {
      title: "One Team, One Pipeline",
      desc: "Every service plugs into the same pipeline model — no handoffs, no siloed metrics.",
      icon: (
        <svg className="w-12 h-12 text-brand-accent mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M24 4 L44 24 L24 44 L4 24 Z"/>
          <circle cx="24" cy="24" r="6" fill="currentColor"/>
        </svg>
      ),
      special: true
    }
  ];

  return (
    <section className="section py-28 grain bg-brand-primary text-brand-text" id="services">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <h2 className="font-dela text-4xl md:text-5vw lg:text-[60px] leading-[1.05] tracking-tight mb-16 max-w-[900px]">
          WHAT WE DO FOR SAAS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceList.map((svc, i) => (
            <div 
              key={i} 
              className={`card fade-up bg-brand-secondary border-t-3 rounded-[18px] p-10 relative overflow-hidden transition-all duration-350 hover:translate-y-[-6px] hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] ${
                svc.special 
                  ? "bg-gradient-to-br from-[#253e35] to-[#1b3128] border-t-transparent" 
                  : "border-t-brand-accent"
              }`}
            >
              {svc.icon}
              <h3 className="font-dela text-xl md:text-2xl mb-3.5 leading-tight text-brand-text">
                {svc.title}
              </h3>
              <p className="font-bricolage text-[15.5px] text-brand-text/75 leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
