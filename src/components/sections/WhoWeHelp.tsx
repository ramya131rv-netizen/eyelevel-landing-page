export function WhoWeHelp() {
  const blocks = [
    { num: "01", text: "Seed to Series B SaaS companies in India." },
    { num: "02", text: "Indian SaaS companies selling to US or EU markets." },
    { num: "03", text: "Offshore SaaS startups that want an Indian marketing team." }
  ];

  return (
    <section className="section py-28 bg-[#11261e] text-brand-text" id="who-we-help">
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="font-dela text-4xl md:text-5vw lg:text-[60px] leading-[1.05] tracking-tight mb-16 max-w-[900px]">
          WHO THIS IS FOR
        </h2>
        
        <div className="who-grid grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Timeline dashed line (hidden on mobile, visible on tablet/desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-[linear-gradient(to_right,var(--brand-accent)_50%,transparent_50%)] bg-[length:12px_1px] opacity-50 z-0 pointer-events-none" />
          
          {blocks.map((block, i) => (
            <div 
              key={i} 
              className="who-block fade-up bg-brand-secondary rounded-[18px] p-10 md:px-8 md:py-10 relative z-10 font-bricolage"
            >
              <div className="font-dela text-[64px] text-brand-accent leading-none mb-6">
                {block.num}
              </div>
              <p className="text-base md:text-lg text-brand-text/85 leading-relaxed">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
