"use client";

import Link from "next/link";
import { Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md"
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link href="/" className="flex items-center gap-2">
                        <Cloud className="h-6 w-6 text-foreground" />
                        <span className="text-lg font-semibold tracking-tight">
                            GreyNAT
                        </span>
                    </Link>
                </motion.div>

                <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                    {[
                        { href: "/", label: "Home" },
                        { href: "/about", label: "About" },
                        { href: "/docs", label: "Docs" },
                    ].map((link, i) => (
                        <motion.div
                            key={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                            className="relative"
                        >
                            <Link
                                href={link.href}
                                className="group text-foreground/60 transition-colors hover:text-foreground"
                            >
                                {link.label}
                                <motion.span
                                    className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform group-hover:scale-x-100"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-3"
                >
                    <Link
                        href="/auth/Login"
                        className="rounded-md px-4 py-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                        Register
                    </Link>
                </motion.div>
            </div>
        </motion.header>
    );
}
