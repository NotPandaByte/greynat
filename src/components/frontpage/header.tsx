import Link from "next/link";
import { Cloud } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2">
                    <Cloud className="h-6 w-6 text-foreground" />
                    <span className="text-lg font-semibold tracking-tight">
                        GreyNAT
                    </span>
                </Link>

                <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                    <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground">
                        Home
                    </Link>
                    <Link href="/about" className="text-foreground/60 transition-colors hover:text-foreground">
                        About
                    </Link>
                    <Link href="/docs" className="text-foreground/60 transition-colors hover:text-foreground">
                        Docs
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
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
                </div>
            </div>
        </header>
    );
}
