export function Testimonial() {
  return (
    <section className="testimonial bg-brand-secondary py-36 text-center grain text-brand-text">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <span className="section-eyebrow fade-up block text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent mb-5 font-bricolage">
          Client Proof
        </span>
        <span className="quote-mark fade-up font-dela text-[75px] md:text-[90px] text-brand-accent leading-[0.7] block mb-6 select-none">
          "
        </span>
        <p className="quote-text fade-up font-bricolage text-xl md:text-3vw lg:text-[38px] font-normal max-w-[900px] mx-auto leading-[1.35] text-brand-text">
          EyeLevel manages SaaS marketing for Indian and offshore clients across the US and UAE.
        </p>
        <div className="quote-underline fade-up w-20 h-[2px] bg-brand-accent mx-auto mt-12" />
      </div>
    </section>
  );
}
