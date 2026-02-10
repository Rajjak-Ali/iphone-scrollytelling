import ScrollCanvas from "@/components/ScrollCanvas";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import ParticleField from "@/components/ParticleField";
import AnimatedBackground from "@/components/AnimatedBackground";
import MagneticCursor from "@/components/MagneticCursor";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import TextMarquee from "@/components/TextMarquee";
import AnimatedCounterSection from "@/components/AnimatedCounter";
import HorizontalShowcase from "@/components/HorizontalShowcase";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      {/* Custom Cursor Effect removed - using GlobalCursor now */}

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Motion Background — animated gradient orbs */}
      <AnimatedBackground />

      {/* Floating Particles Background */}
      <ParticleField count={50} />

      {/* Gradient overlay at top for polish */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

      {/* Main Scroll Experience */}
      <ScrollCanvas />

      {/* Features Section */}
      <section className="relative bg-[#0d0d0d]/90 py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" blur>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
              Why iPhone 17 Pro Max?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15} blur>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
              The most advanced iPhone ever, packed with groundbreaking technology.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 - with Magnetic Effect */}
            <ScrollReveal direction="up" delay={0.1} scale>
              <MagneticCursor>
                <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">A19 Bionic Chip</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    The fastest chip ever in a smartphone with breakthrough performance and efficiency.
                  </p>
                </div>
              </MagneticCursor>
            </ScrollReveal>

            {/* Feature Card 2 - with Magnetic Effect */}
            <ScrollReveal direction="up" delay={0.25} scale>
              <MagneticCursor>
                <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Pro Camera System</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    48MP main camera with 5x optical zoom. Capture stunning photos and 8K video.
                  </p>
                </div>
              </MagneticCursor>
            </ScrollReveal>

            {/* Feature Card 3 - with Magnetic Effect */}
            <ScrollReveal direction="up" delay={0.4} scale>
              <MagneticCursor>
                <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/5 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">All-Day Battery</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Up to 29 hours of video playback. The longest battery life ever in an iPhone.
                  </p>
                </div>
              </MagneticCursor>
            </ScrollReveal>
          </div>

          {/* CTA */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="mt-16 text-center">
              <Link href="/specs">
                <LiquidButton variant="ghost" size="lg" className="rounded-full px-8 text-blue-400 hover:text-white [--liquid-button-color:#3b82f6] gap-2">
                  <span>View all specifications</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </LiquidButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scrolling Text Marquee */}
      <section className="relative bg-[#0d0d0d]/90 py-8 overflow-hidden border-t border-white/5">
        <TextMarquee text="iPhone 17 Pro Max" speed={25} />
      </section>

      {/* Video Section */}
      <section className="relative bg-[#0d0d0d]/90 py-24 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ScrollReveal direction="up" blur>
              <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
                Watch
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1} blur>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Experience the Magic
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-white/60 max-w-2xl mx-auto">
                See iPhone 17 Pro Max in action. Discover what makes it the most powerful iPhone ever.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.3} scale>
            <VideoPlayer />
          </ScrollReveal>
        </div>
      </section>

      {/* Animated Stats Counter */}
      <AnimatedCounterSection />

      {/* Color Options Preview */}
      <section className="relative bg-[#0d0d0d]/90 py-24 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Four stunning<br />titanium finishes.
                </h2>
                <p className="text-white/60 text-lg mb-8 max-w-md">
                  iPhone 17 Pro Max features a titanium design with a refined brushed texture
                  and four beautiful colors to match your style.
                </p>
                <Link href="/design">
                  <LiquidButton variant="default" size="lg" className="rounded-full px-6 gap-2 [--liquid-button-background-color:#1a1a2e] [--liquid-button-color:#6366f1]">
                    <span>Explore the design</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </LiquidButton>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2} scale>
              <div className="relative">
                <Image
                  src="/images/iphone_colors_lineup_1769248917594.png"
                  alt="iPhone 17 Pro Max Colors"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Feature Showcase */}
      <HorizontalShowcase />

      {/* CTA Section */}
      <section className="relative bg-gradient-to-b from-[#0d0d0d]/90 to-[#1a1a1a] py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" blur>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to upgrade?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
              Get the most advanced iPhone ever. Starting at $1,199 or $49.95/mo. with Apple Card.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3} scale>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buy">
                <LiquidButton variant="secondary" size="lg" className="rounded-full px-8 py-4 h-auto text-base font-semibold shadow-lg shadow-blue-500/20 [--liquid-button-background-color:#3b82f6] [--liquid-button-color:#1d4ed8] border-blue-500/30">
                  Buy Now
                </LiquidButton>
              </Link>
              <Link href="/specs">
                <LiquidButton variant="ghost" size="lg" className="rounded-full px-8 py-4 h-auto text-base font-semibold [--liquid-button-background-color:rgba(255,255,255,0.1)] [--liquid-button-color:rgba(255,255,255,0.2)] border border-white/10">
                  Learn More
                </LiquidButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
