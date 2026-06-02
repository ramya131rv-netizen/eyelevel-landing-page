import { HeroForm } from "./HeroForm";

export function Hero() {
  return (
    <section className="hero grain py-20 md:py-28 overflow-hidden bg-brand-primary text-brand-text" id="hero-form">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-start">
          <div className="fade-up space-y-7">
            <span className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-brand-accent border border-brand-accent/40 px-3.5 py-2 rounded-full font-bricolage">
              SaaS Marketing Agency · India
            </span>
            <h1 className="font-dela text-[40px] md:text-5vw lg:text-[62px] leading-[1.05] tracking-tight">
              From First Demo to Predictable Pipeline
            </h1>
            <p className="font-bricolage text-base md:text-lg lg:text-[18px] leading-[1.55] text-brand-accent max-w-[560px]">
              SaaS growth is a pipeline problem. You need a consistent flow of qualified conversations with people who match your ICP. We build the systems — content, LinkedIn, performance ads, and automation — that fill that pipeline.
            </p>
          </div>
          <div className="fade-up w-full lg:sticky lg:top-[100px]">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}
