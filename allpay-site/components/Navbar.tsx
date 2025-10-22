'use client';
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

const nav = [
  { href: "#about", label: "회사 소개" },
  { href: "#services", label: "서비스 개요" },
  { href: "#features", label: "주요 기능" },
  { href: "#advantages", label: "차별성 & 장점" },
  { href: "#architecture", label: "기술 구조" },
  { href: "#scenarios", label: "활용 시나리오" },
  { href: "#operations", label: "운영 체계" },
  { href: "#roadmap", label: "로드맵" },
  { href: "#vision", label: "비전 & 가치" },
  { href: "#contact", label: "문의" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[rgba(0,0,0,0.25)]">
      <div className="container-pro flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="AllPay" width={40} height={40} priority />
          <div className="leading-tight">
            <div className="text-xl font-extrabold tracking-tight">AllPay</div>
            <div className="text-[11px] uppercase tracking-widest text-white/70">Global Payment Platform</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:opacity-80">{n.label}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden container-pro pb-4">
          <div className="grid gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="py-2 border-b border-white/10">{n.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
