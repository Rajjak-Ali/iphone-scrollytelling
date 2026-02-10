import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "iPhone 17 Pro Max Camera | Pro Camera System",
    description: "Explore the revolutionary Pro camera system on iPhone 17 Pro Max. 48MP main, 5x optical zoom, and 8K video.",
};

const cameraFeatures = [
    {
        title: "48MP Main Camera",
        description: "Quad-pixel sensor captures incredible detail. Shoot at full 48MP or use pixel binning for amazing low-light shots.",
        specs: ["ƒ/1.78 aperture", "2nd-gen sensor-shift OIS", "100% Focus Pixels"],
    },
    {
        title: "5x Telephoto",
        description: "Get 5x closer with the new tetraprism design. Perfect for portraits, wildlife, and distant subjects.",
        specs: ["120mm focal length", "ƒ/2.8 aperture", "3D sensor-shift OIS"],
    },
    {
        title: "Ultra Wide",
        description: "Capture more of the scene with the 12MP ultra wide. Great for landscapes, architecture, and macro shots.",
        specs: ["13mm focal length", "ƒ/2.2 aperture", "120° field of view"],
    },
];

const videoFeatures = [
    { label: "8K", desc: "Video at 30fps" },
    { label: "4K", desc: "Cinematic Mode" },
    { label: "ProRes", desc: "Log encoding" },
    { label: "Action", desc: "Stabilization mode" },
];

export default function CameraPage() {
    return (
        <main className="bg-[#0d0d0d] min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-20 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
                        Camera
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Pro camera.<br />Pro creativity.
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto">
                        The most powerful camera system ever on an iPhone.
                        Capture stunning photos and videos like never before.
                    </p>
                </div>
            </section>

            {/* Camera Hero Image */}
            <section className="py-8 px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden">
                        <Image
                            src="/images/camera_macro_shot_1769248937062.png"
                            alt="iPhone 17 Pro Max Camera"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                    </div>
                </div>
            </section>

            {/* Camera System Details */}
            <section className="py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        Three pro cameras. Endless possibilities.
                    </h2>
                    <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
                        Every camera is a pro camera, optimized to work together for
                        the ultimate creative experience.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {cameraFeatures.map((feature) => (
                            <div
                                key={feature.title}
                                className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10"
                            >
                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-white/60 mb-6">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.specs.map((spec) => (
                                        <li key={spec} className="flex items-center gap-2 text-sm text-white/50">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Capabilities */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            A movie studio in your pocket.
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Record in stunning 8K resolution, edit with ProRes, and create
                            cinematic masterpieces right on your iPhone.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {videoFeatures.map((feature) => (
                            <div
                                key={feature.label}
                                className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center"
                            >
                                <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {feature.label}
                                </p>
                                <p className="text-white/50 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Styles */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Photographic Styles.
                            </h2>
                            <p className="text-white/60 text-lg mb-6">
                                Make every photo distinctly yours. Photographic Styles let you
                                customize the look of your images while preserving skin tones
                                and sky colors.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400"></span>
                                    <span className="text-white">Rich Contrast</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></span>
                                    <span className="text-white">Vibrant</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300"></span>
                                    <span className="text-white">Warm</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-slate-400 to-slate-300"></span>
                                    <span className="text-white">Cool</span>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-orange-500/30 to-amber-500/10 flex items-center justify-center">
                                <span className="text-white/50 text-sm">Rich Contrast</span>
                            </div>
                            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/10 flex items-center justify-center">
                                <span className="text-white/50 text-sm">Vibrant</span>
                            </div>
                            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-amber-400/30 to-yellow-300/10 flex items-center justify-center">
                                <span className="text-white/50 text-sm">Warm</span>
                            </div>
                            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-slate-400/30 to-slate-300/10 flex items-center justify-center">
                                <span className="text-white/50 text-sm">Cool</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Capture your best shots yet.
                    </h2>
                    <p className="text-white/60 text-lg mb-8">
                        iPhone 17 Pro Max. Starting at $1,199.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/buy"
                            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all hover:scale-105"
                        >
                            Buy Now
                        </Link>
                        <Link
                            href="/specs"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all"
                        >
                            View All Specs
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
