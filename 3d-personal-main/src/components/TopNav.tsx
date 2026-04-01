import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const TopNav = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline h-20">
      <div className="flex justify-between items-center px-8 h-full w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4">
          <a href="http://localhost:8080/home - V3.html" className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back
          </a>
          <div className="text-2xl font-black tracking-tighter text-primary">Digital Curator</div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Instant Quote Button */}
          <a
            href="http://localhost:8080/quote-manage.html"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:brightness-110 active:scale-95 transition-all shadow-sm shadow-primary/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Instant Quote
          </a>

          {/* Shopping Cart → quote-manage */}
          <a href="http://localhost:8080/quote-manage.html" className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all duration-200">
            <ShoppingCart size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </a>

          {/* Avatar (current page, no link needed) */}
          <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-outline cursor-default">
            <img
              alt="User profile avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDndcwMOH2pnW_zXPaaaFN4lFuF7sT83v_P_Rdm_PoHpVvQfVTYbU_fPG8YmvfBVvJw3q7DgHRAYFQHeongsZ3C6Jae7B19FhRJJzSMybA6WMMd1oAdFqb1aNmuRR-ouXL4AYZJx3Ylm96kKfv_CJnBX-A_hjjbyNiyge2J6woJ1s5dh1iipHyBqKRDs8KgXTI_5s8o7csNvVemyg9DIJdlOsTK6MFw3c1T2DGQrNCp4ysEpjcvaKZ66leCRSRbg5tU9I6J7qcATAB5"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
