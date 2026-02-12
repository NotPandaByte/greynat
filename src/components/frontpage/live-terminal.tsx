"use client";

import { useEffect, useState, useRef } from "react";

const scanLines = [
  { text: "$ greynat scan --target 192.168.1.0/24 --deep", type: "cmd" as const },
  { text: "[*] Initializing network reconnaissance...", type: "info" as const },
  { text: "[*] Scanning 254 hosts across 3 subnets", type: "info" as const },
  { text: "[+] Host 192.168.1.14 — 3 open ports detected", type: "success" as const },
  { text: "[+] Host 192.168.1.27 — SSH (22), HTTPS (443)", type: "success" as const },
  { text: "[!] Host 192.168.1.43 — outdated TLS 1.1 configuration", type: "warn" as const },
  { text: "[+] Host 192.168.1.88 — all ports filtered, hardened", type: "success" as const },
  { text: "[!] Host 192.168.1.102 — exposed admin panel on :8080", type: "warn" as const },
  { text: "[+] Firewall rules validated — 12/12 passing", type: "success" as const },
  { text: "[*] Running CVE database correlation...", type: "info" as const },
  { text: "[+] 0 critical vulnerabilities found", type: "success" as const },
  { text: "[!] 2 medium-severity findings — report generated", type: "warn" as const },
  { text: "[*] Scan complete — 254 hosts, 47 services audited", type: "info" as const },
];

function TerminalLine({ line, visible }: { line: (typeof scanLines)[number]; visible: boolean }) {
  const colorClass = {
    cmd: "text-emerald-300 font-semibold",
    info: "text-zinc-400",
    success: "text-emerald-400/80",
    warn: "text-amber-400/80",
  }[line.type];

  return (
    <div
      className={`transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} ${colorClass} text-[13px] leading-relaxed sm:text-sm`}
    >
      {line.text}
    </div>
  );
}

export default function LiveTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;

          let i = 0;
          const interval = setInterval(() => {
            i++;
            setVisibleCount(i);
            if (i >= scanLines.length) clearInterval(interval);
          }, 400);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-zinc-800 bg-zinc-950/60">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-zinc-700" />
            <div className="h-3 w-3 rounded-full bg-zinc-700" />
            <div className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="ml-3 font-mono text-xs text-zinc-500">
              greynat — security scan
            </span>
          </div>

          {/* Terminal body */}
          <div className="h-[340px] overflow-hidden p-5 font-mono">
            <div className="flex flex-col gap-1.5">
              {scanLines.map((line, i) => (
                <TerminalLine
                  key={i}
                  line={line}
                  visible={i < visibleCount}
                />
              ))}
            </div>

            {/* Blinking cursor */}
            {visibleCount < scanLines.length && (
              <span className="mt-2 inline-block h-4 w-2 animate-pulse bg-emerald-400/70" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
