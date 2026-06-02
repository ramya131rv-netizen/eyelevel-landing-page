import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-primary/85 backdrop-blur-md border-b border-brand-accent/12">
      <div className="max-w-[1240px] mx-auto px-6 py-4.5 flex items-center justify-between">
        <a href="#" className="font-dela text-2xl tracking-tight text-brand-text">
          Eye<span className="text-brand-accent">Level</span>
        </a>
        <a 
          href="https://theeyelevelstudio.com/booking" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            className="rounded-full bg-brand-accent text-brand-text-dark hover:bg-white hover:text-brand-text-dark font-bricolage font-semibold text-sm px-[22px] py-[13px] h-auto border-1.5 border-transparent hover:translate-y-[-2px] hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] transition-all duration-250 cursor-pointer"
          >
            Book a Call →
          </Button>
        </a>
      </div>
    </nav>
  );
}
