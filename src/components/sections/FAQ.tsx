import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export function FAQ() {
  const faqs: FAQItem[] = [
    {
      q: "What is SaaS marketing?",
      a: "SaaS marketing is the practice of acquiring, converting, and retaining software-as-a-service customers through digital channels — including content, paid ads, LinkedIn, email, and marketing automation."
    },
    {
      q: "How do SaaS companies find customers in India?",
      a: "The most effective channels for Indian SaaS are LinkedIn B2B marketing, SEO and content marketing, and Google Search ads targeting high-intent buyers. Founders who build their personal LinkedIn presence consistently drive lower CAC than those relying on paid alone."
    },
    {
      q: "What is the go-to-market strategy for SaaS?",
      a: "A go-to-market strategy for SaaS covers ICP definition, product positioning, channel prioritization, pricing, and the 90-day execution plan that turns those decisions into pipeline."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section py-28 grain bg-brand-primary text-brand-text" id="faq">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <span className="section-eyebrow fade-up block text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent mb-5 font-bricolage">
          FAQ
        </span>
        <h2 className="font-dela text-4xl md:text-5vw lg:text-[60px] leading-[1.05] tracking-tight mb-16 max-w-[900px]">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        
        <div className="faq-list max-w-[880px] mx-auto font-bricolage">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`faq-item border-t border-brand-accent/30 ${
                  i === faqs.length - 1 ? "border-b" : ""
                } fade-up transition-all duration-300`}
              >
                <button 
                  onClick={() => toggleIndex(i)}
                  className="faq-q w-full bg-transparent border-none text-brand-text py-7 font-dela text-lg md:text-xl lg:text-[26px] text-left cursor-pointer flex justify-between items-center gap-6 line-clamp-2 md:line-clamp-none"
                >
                  <span>{faq.q}</span>
                  <span 
                    className={`plus flex-shrink-0 w-9 h-9 border-1.5 border-brand-accent rounded-full text-brand-accent flex items-center justify-center text-xl font-light transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-brand-accent text-brand-text-dark" : "bg-transparent"
                    }`}
                  >
                    +
                  </span>
                </button>
                
                <div 
                  className="faq-a overflow-hidden transition-all duration-400 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    paddingBottom: isOpen ? "28px" : "0px"
                  }}
                >
                  <p className="text-[15.5px] text-brand-text/80 leading-relaxed max-w-[800px]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
