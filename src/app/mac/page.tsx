import MacScrollCanvas from "@/components/MacScrollCanvas";
import MacVideoPlayer from "@/components/MacVideoPlayer";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function MacPage() {
    return (
        <main className="relative">
            {/* Gradient overlay at top */}
            <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

            {/* Main Scroll Experience */}
            <MacScrollCanvas />

            {/* Features Section */}
            <section className="relative bg-[#0d0d0d] py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
                        Why MacBook Pro?
                    </h2>
                    <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
                        The most powerful MacBook Pro ever, with groundbreaking M3 Pro and M3 Max chips.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">M3 Pro & M3 Max</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Game-changing performance and efficiency with up to 40% faster graphics.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Liquid Retina XDR</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Stunning 14.2&quot; or 16.2&quot; display with extreme dynamic range and contrast.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">22 Hours Battery</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                The longest battery life ever in a MacBook Pro. Go all day and then some.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <span>Back to iPhone</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="relative bg-[#0d0d0d] py-24 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
                            Watch
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            See MacBook Pro in Action
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Experience the power and elegance of the new MacBook Pro.
                        </p>
                    </div>

                    <MacVideoPlayer />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
