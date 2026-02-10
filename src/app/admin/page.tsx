"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Simulated data
const dashboardStats = {
    totalOrders: 12847,
    revenue: 15234567,
    activeUsers: 8432,
    conversionRate: 4.2,
};

const recentOrders = [
    { id: "ORD-7829", customer: "John Smith", product: "iPhone 17 Pro Max 256GB", color: "Natural Titanium", status: "Processing", amount: 1199, date: "2 min ago" },
    { id: "ORD-7828", customer: "Sarah Johnson", product: "iPhone 17 Pro Max 512GB", color: "Blue Titanium", status: "Shipped", amount: 1399, date: "15 min ago" },
    { id: "ORD-7827", customer: "Michael Brown", product: "iPhone 17 Pro Max 1TB", color: "Black Titanium", status: "Delivered", amount: 1599, date: "1 hour ago" },
    { id: "ORD-7826", customer: "Emily Davis", product: "iPhone 17 Pro Max 256GB", color: "White Titanium", status: "Processing", amount: 1199, date: "2 hours ago" },
    { id: "ORD-7825", customer: "David Wilson", product: "iPhone 17 Pro Max 2TB", color: "Natural Titanium", status: "Shipped", amount: 1799, date: "3 hours ago" },
];

const inventoryData = [
    { color: "Natural Titanium", stock256: 1520, stock512: 890, stock1TB: 450, stock2TB: 120 },
    { color: "Blue Titanium", stock256: 1230, stock512: 670, stock1TB: 380, stock2TB: 95 },
    { color: "White Titanium", stock256: 980, stock512: 540, stock1TB: 290, stock2TB: 75 },
    { color: "Black Titanium", stock256: 1890, stock512: 1020, stock1TB: 520, stock2TB: 140 },
];

const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "orders", label: "Orders", icon: "📦" },
    { id: "inventory", label: "Inventory", icon: "📋" },
    { id: "analytics", label: "Analytics", icon: "📈" },
    { id: "settings", label: "Settings", icon: "⚙️" },
];

export default function AdminPanel() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-16">
            <div className="flex">
                {/* Sidebar */}
                <motion.aside
                    initial={false}
                    animate={{ width: sidebarOpen ? 256 : 80 }}
                    className="fixed left-0 top-16 bottom-0 bg-[#111] border-r border-white/10 z-40"
                >
                    <div className="p-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sidebarOpen ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"} />
                            </svg>
                        </button>
                    </div>

                    <nav className="px-3 space-y-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === tab.id
                                        ? "bg-blue-500/20 text-blue-400"
                                        : "text-white/60 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <span className="text-xl">{tab.icon}</span>
                                <AnimatePresence>
                                    {sidebarOpen && (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="font-medium"
                                        >
                                            {tab.label}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        ))}
                    </nav>

                    <div className="absolute bottom-4 left-0 right-0 px-3">
                        <Link
                            href="/"
                            className="w-full p-3 rounded-xl flex items-center gap-3 text-white/40 hover:text-white hover:bg-white/5 transition-all"
                        >
                            <span className="text-xl">🏠</span>
                            {sidebarOpen && <span className="font-medium">Back to Site</span>}
                        </Link>
                    </div>
                </motion.aside>

                {/* Main Content */}
                <main className={`flex-1 transition-all ${sidebarOpen ? "ml-64" : "ml-20"} p-8`}>
                    {/* Dashboard Tab */}
                    {activeTab === "dashboard" && (
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                                <p className="text-white/60">Welcome back! Here&apos;s what&apos;s happening today.</p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-500/20"
                                >
                                    <p className="text-blue-400 text-sm font-medium mb-2">Total Orders</p>
                                    <p className="text-3xl font-bold text-white">{dashboardStats.totalOrders.toLocaleString()}</p>
                                    <p className="text-green-400 text-sm mt-2">↑ 12% from last month</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/5 border border-green-500/20"
                                >
                                    <p className="text-green-400 text-sm font-medium mb-2">Revenue</p>
                                    <p className="text-3xl font-bold text-white">${(dashboardStats.revenue / 1000000).toFixed(1)}M</p>
                                    <p className="text-green-400 text-sm mt-2">↑ 23% from last month</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 border border-purple-500/20"
                                >
                                    <p className="text-purple-400 text-sm font-medium mb-2">Active Users</p>
                                    <p className="text-3xl font-bold text-white">{dashboardStats.activeUsers.toLocaleString()}</p>
                                    <p className="text-green-400 text-sm mt-2">↑ 8% from last month</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/5 border border-orange-500/20"
                                >
                                    <p className="text-orange-400 text-sm font-medium mb-2">Conversion Rate</p>
                                    <p className="text-3xl font-bold text-white">{dashboardStats.conversionRate}%</p>
                                    <p className="text-green-400 text-sm mt-2">↑ 0.5% from last month</p>
                                </motion.div>
                            </div>

                            {/* Recent Orders */}
                            <div className="bg-[#111] rounded-2xl border border-white/10 overflow-hidden">
                                <div className="p-6 border-b border-white/10">
                                    <h2 className="text-xl font-semibold text-white">Recent Orders</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-white/5">
                                                <th className="text-left text-white/50 text-sm font-medium p-4">Order ID</th>
                                                <th className="text-left text-white/50 text-sm font-medium p-4">Customer</th>
                                                <th className="text-left text-white/50 text-sm font-medium p-4">Product</th>
                                                <th className="text-left text-white/50 text-sm font-medium p-4">Status</th>
                                                <th className="text-left text-white/50 text-sm font-medium p-4">Amount</th>
                                                <th className="text-left text-white/50 text-sm font-medium p-4">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentOrders.map((order) => (
                                                <tr key={order.id} className="border-b border-white/5 hover:bg-white/5">
                                                    <td className="p-4 text-blue-400 font-mono text-sm">{order.id}</td>
                                                    <td className="p-4 text-white">{order.customer}</td>
                                                    <td className="p-4">
                                                        <p className="text-white text-sm">{order.product}</p>
                                                        <p className="text-white/50 text-xs">{order.color}</p>
                                                    </td>
                                                    <td className="p-4">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === "Delivered" ? "bg-green-500/20 text-green-400" :
                                                                order.status === "Shipped" ? "bg-blue-500/20 text-blue-400" :
                                                                    "bg-orange-500/20 text-orange-400"
                                                            }`}>
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                    <td className="p-4 text-white font-medium">${order.amount}</td>
                                                    <td className="p-4 text-white/50 text-sm">{order.date}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Orders Tab */}
                    {activeTab === "orders" && (
                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-bold text-white mb-2">Orders</h1>
                                    <p className="text-white/60">Manage and track all customer orders.</p>
                                </div>
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="Search orders..."
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500"
                                    />
                                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors">
                                        Export
                                    </button>
                                </div>
                            </div>

                            <div className="bg-[#111] rounded-2xl border border-white/10 p-8 text-center">
                                <p className="text-white/60">Full order management coming soon!</p>
                            </div>
                        </div>
                    )}

                    {/* Inventory Tab */}
                    {activeTab === "inventory" && (
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">Inventory</h1>
                                <p className="text-white/60">Track stock levels across all variants.</p>
                            </div>

                            <div className="bg-[#111] rounded-2xl border border-white/10 overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left text-white/50 text-sm font-medium p-4">Color</th>
                                            <th className="text-center text-white/50 text-sm font-medium p-4">256GB</th>
                                            <th className="text-center text-white/50 text-sm font-medium p-4">512GB</th>
                                            <th className="text-center text-white/50 text-sm font-medium p-4">1TB</th>
                                            <th className="text-center text-white/50 text-sm font-medium p-4">2TB</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {inventoryData.map((row) => (
                                            <tr key={row.color} className="border-b border-white/5">
                                                <td className="p-4 text-white font-medium">{row.color}</td>
                                                <td className="p-4 text-center">
                                                    <span className={`px-3 py-1 rounded-lg ${row.stock256 > 1000 ? "bg-green-500/20 text-green-400" : "bg-orange-500/20 text-orange-400"}`}>
                                                        {row.stock256}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <span className={`px-3 py-1 rounded-lg ${row.stock512 > 500 ? "bg-green-500/20 text-green-400" : "bg-orange-500/20 text-orange-400"}`}>
                                                        {row.stock512}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <span className={`px-3 py-1 rounded-lg ${row.stock1TB > 300 ? "bg-green-500/20 text-green-400" : "bg-orange-500/20 text-orange-400"}`}>
                                                        {row.stock1TB}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <span className={`px-3 py-1 rounded-lg ${row.stock2TB > 100 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                                                        {row.stock2TB}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Analytics Tab */}
                    {activeTab === "analytics" && (
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
                                <p className="text-white/60">Deep dive into your sales performance.</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Sales Chart Placeholder */}
                                <div className="bg-[#111] rounded-2xl border border-white/10 p-6">
                                    <h3 className="text-lg font-semibold text-white mb-4">Sales Overview</h3>
                                    <div className="h-64 flex items-end justify-between gap-2 px-4">
                                        {[65, 45, 78, 90, 55, 88, 72, 95, 60, 82, 70, 85].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${height}%` }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                                            />
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-4 text-white/40 text-xs">
                                        <span>Jan</span>
                                        <span>Feb</span>
                                        <span>Mar</span>
                                        <span>Apr</span>
                                        <span>May</span>
                                        <span>Jun</span>
                                        <span>Jul</span>
                                        <span>Aug</span>
                                        <span>Sep</span>
                                        <span>Oct</span>
                                        <span>Nov</span>
                                        <span>Dec</span>
                                    </div>
                                </div>

                                {/* Color Distribution */}
                                <div className="bg-[#111] rounded-2xl border border-white/10 p-6">
                                    <h3 className="text-lg font-semibold text-white mb-4">Sales by Color</h3>
                                    <div className="space-y-4">
                                        {[
                                            { name: "Natural Titanium", percent: 35, color: "bg-amber-500" },
                                            { name: "Blue Titanium", percent: 28, color: "bg-blue-500" },
                                            { name: "Black Titanium", percent: 22, color: "bg-gray-600" },
                                            { name: "White Titanium", percent: 15, color: "bg-gray-300" },
                                        ].map((item) => (
                                            <div key={item.name}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-white">{item.name}</span>
                                                    <span className="text-white/60">{item.percent}%</span>
                                                </div>
                                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${item.percent}%` }}
                                                        transition={{ delay: 0.3 }}
                                                        className={`h-full ${item.color} rounded-full`}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Settings Tab */}
                    {activeTab === "settings" && (
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
                                <p className="text-white/60">Configure your admin preferences.</p>
                            </div>

                            <div className="max-w-2xl space-y-6">
                                <div className="bg-[#111] rounded-2xl border border-white/10 p-6">
                                    <h3 className="text-lg font-semibold text-white mb-4">Notifications</h3>
                                    <div className="space-y-4">
                                        {["Email notifications", "SMS alerts", "Push notifications", "Weekly reports"].map((setting) => (
                                            <div key={setting} className="flex items-center justify-between">
                                                <span className="text-white/80">{setting}</span>
                                                <button className="w-12 h-6 bg-blue-500 rounded-full relative">
                                                    <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
