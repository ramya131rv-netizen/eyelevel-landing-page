import { Button } from "../ui/button";

export function CTA() {
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero-form");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-brand-secondary py-24 text-center">
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="font-dela text-3xl md:text-5vw lg:text-[50px] leading-[1.1] tracking-tight text-brand-text-accent max-w-[760px] mx-auto mb-9">
          Ready to build your SaaS pipeline?
        </h2>
        <a 
          href="#hero-form" 
          onClick={handleScrollToForm}
          className="fade-up inline-block"
        >
          <Button 
            className="rounded-full bg-brand-accent text-brand-text-dark hover:bg-white hover:text-brand-text-dark font-bricolage font-semibold text-[15px] px-[22px] py-[13px] h-auto border-1.5 border-transparent hover:translate-y-[-2px] hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] transition-all duration-250 cursor-pointer"
          >
            Fill in the form above →
          </Button>
        </a>
      </div>
    </section>
  );
}
