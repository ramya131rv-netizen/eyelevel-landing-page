export function ProofBar() {
  const proofs = [
    { num: "50+", label: "Clients Served" },
    { num: "200+", label: "Digital Campaigns" },
    { num: "5★", label: "Google Rating" }  ];

  return (
    <section className="bg-brand-secondary py-12 border-t border-b border-brand-accent/10">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
          {proofs.map((proof, i) => (
            <div 
              key={i} 
              className="proof-item fade-up relative md:px-4 py-2"
            >
              <div className="font-dela text-[44px] text-brand-accent leading-none">
                {proof.num}
              </div>
              <div className="font-bricolage text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-text/60 mt-3">
                {proof.label}
              </div>
              
              {/* Responsive desktop divider line */}
              {i < proofs.length - 1 && (
                <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-brand-accent/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
