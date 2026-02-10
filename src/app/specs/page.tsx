import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "iPhone 17 Pro Max Specifications | Technical Specs",
    description: "Full technical specifications for iPhone 17 Pro Max. Display, camera, chip, battery, and more.",
};

const specs = [
    {
        category: "Display",
        items: [
            { label: "Size", value: '6.9" Super Retina XDR display' },
            { label: "Resolution", value: "2868 x 1320 pixels at 460 ppi" },
            { label: "Technology", value: "ProMotion with adaptive refresh up to 120Hz" },
            { label: "Brightness", value: "2000 nits peak (outdoor), 1000 nits typical" },
            { label: "Features", value: "Always-On display, Dynamic Island, HDR" },
        ],
    },
    {
        category: "Chip",
        items: [
            { label: "Chip", value: "A19 Bionic" },
            { label: "CPU", value: "6-core CPU (2 performance + 4 efficiency)" },
            { label: "GPU", value: "6-core GPU with hardware ray tracing" },
            { label: "Neural Engine", value: "18-core Neural Engine" },
            { label: "Process", value: "Industry-leading 3nm technology" },
        ],
    },
    {
        category: "Camera",
        items: [
            { label: "Main", value: "48MP main camera, ƒ/1.78 aperture" },
            { label: "Ultra Wide", value: "12MP ultra wide, ƒ/2.2 aperture, 120° FOV" },
            { label: "Telephoto", value: "12MP 5x optical zoom, ƒ/2.8 aperture" },
            { label: "Front", value: "12MP TrueDepth camera, ƒ/1.9 aperture" },
            { label: "Video", value: "8K video recording at 30fps, 4K at 120fps" },
        ],
    },
    {
        category: "Battery & Charging",
        items: [
            { label: "Video Playback", value: "Up to 29 hours" },
            { label: "Audio Playback", value: "Up to 95 hours" },
            { label: "Fast Charging", value: "50% charge in 30 minutes with 35W adapter" },
            { label: "MagSafe", value: "Up to 25W wireless charging" },
            { label: "Qi2", value: "Up to 15W wireless charging" },
        ],
    },
    {
        category: "Connectivity",
        items: [
            { label: "Cellular", value: "5G (sub‑6 GHz and mmWave), Gigabit LTE" },
            { label: "Wi-Fi", value: "Wi-Fi 7 (802.11be)" },
            { label: "Bluetooth", value: "Bluetooth 5.3" },
            { label: "Ultra Wideband", value: "Second-generation chip" },
            { label: "Port", value: "USB-C with USB 3 speeds" },
        ],
    },
    {
        category: "Dimensions & Weight",
        items: [
            { label: "Height", value: "159.9 mm (6.30 inches)" },
            { label: "Width", value: "76.7 mm (3.02 inches)" },
            { label: "Depth", value: "8.25 mm (0.32 inch)" },
            { label: "Weight", value: "221 grams (7.80 ounces)" },
        ],
    },
];

export default function SpecsPage() {
    return (
        <main className="bg-[#0d0d0d] min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-20 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
                        Technical Specifications
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        iPhone 17 Pro Max
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto">
                        Explore the complete technical specifications of the most advanced iPhone ever made.
                    </p>
                </div>
            </section>

            {/* Chip Hero */}
            <section className="relative py-16 px-6 lg:px-8 overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                        <Image
                            src="/images/a19_chip_hero_1769248956080.png"
                            alt="A19 Bionic Chip"
                            width={1200}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Specs Grid */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {specs.map((section) => (
                            <div
                                key={section.category}
                                className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10"
                            >
                                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    {section.category}
                                </h3>
                                <div className="space-y-4">
                                    {section.items.map((item) => (
                                        <div
                                            key={item.label}
                                            className="flex justify-between items-start gap-4 py-3 border-b border-white/5 last:border-0"
                                        >
                                            <span className="text-white/50 text-sm">{item.label}</span>
                                            <span className="text-white text-sm text-right max-w-[60%]">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to experience the power?
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
                            href="/camera"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all"
                        >
                            Explore Camera
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
