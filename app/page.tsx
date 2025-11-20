// ... existing code ...

'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center">
          {/* Main Content Container */}
          <div className="max-w-4xl mb-20">
            {/* Main Headline */}
            <h1 className="text-[64px] font-bold leading-[1.1] text-white mb-6">
              Engineering Cybersecurity :<br />
              Empowering
            </h1>

            {/* Subheadline */}
            <p className="text-xl leading-relaxed max-w-[720px] mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Dedicated to protecting operational technology and critical infrastructure with robust
              solutions tailored to tomorrow's challenges.
            </p>

            {/* Primary CTA Button */}
            <div className="mb-16">
              <Link 
                href="#solutions" 
                className="inline-flex items-center h-[52px] px-8 text-base font-bold text-white rounded-[28px] transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(90deg, #0055FF, #6E00FF)' }}
              >
                EXPERIENCE CYBERSECURITY TODAY
                <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-blue-600">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Hero Metrics / Achievements Row */}
          <div className="pt-6 pb-10">
            <div className="w-full flex justify-left gap-20">
              {/* Customers */}
              <div className="flex flex-col items-start">
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', width: '100%', paddingTop: '12px' }}>
                  <div className="flex items-center mb-1">
                    <div className="w-[18px] h-[18px] rounded-full bg-white mr-2"></div>
                    <span 
                      className="text-[14px] uppercase tracking-[1px]"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      CUSTOMERS
                    </span>
                  </div>
                  <span className="text-[48px] font-bold text-white mt-1 block">250+</span>
                </div>
              </div>

              {/* Partners */}
              <div className="flex flex-col items-start">
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', width: '100%', paddingTop: '12px' }}>
                  <div className="flex items-center mb-1">
                    <div className="w-[18px] h-[18px] rounded-full bg-white mr-2"></div>
                    <span 
                      className="text-[14px] uppercase tracking-[1px]"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      PARTNERS
                    </span>
                  </div>
                  <span className="text-[48px] font-bold text-white mt-1 block">150+</span>
                </div>
              </div>

              {/* Deployments */}
              <div className="flex flex-col items-start">
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', width: '100%', paddingTop: '12px' }}>
                  <div className="flex items-center mb-1">
                    <div className="w-[18px] h-[18px] rounded-full bg-white mr-2"></div>
                    <span 
                      className="text-[14px] uppercase tracking-[1px]"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      DEPLOYMENTS
                    </span>
                  </div>
                  <span className="text-[48px] font-bold text-white mt-1 block">1500+</span>
                </div>
              </div>

              {/* Countries */}
              <div className="flex flex-col items-start">
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', width: '100%', paddingTop: '12px' }}>
                  <div className="flex items-center mb-1">
                    <div className="w-[18px] h-[18px] rounded-full bg-white mr-2"></div>
                    <span 
                      className="text-[14px] uppercase tracking-[1px]"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      COUNTRIES
                    </span>
                  </div>
                  <span className="text-[48px] font-bold text-white mt-1 block">21+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transform Your Organization Section */}
          <div className="pt-8">
            <div className="flex items-start justify-between">
              <div className="w-3/4 pr-8">
                <h2 className="text-5xl font-bold text-white mb-4">
                  Transform Your Organization with Cybersecurity Automation
                </h2>
              </div>
              <div className="w-1/4 pl-8">
                <p className="text-gray-300 mb-6">
                  Optimize your operations across the board with our comprehensive range of AI solutions designed to streamline processes that your business needs.
                </p>
                <Link href="/solutions" className="inline-flex items-center text-white">
                  READ MORE
                  <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
