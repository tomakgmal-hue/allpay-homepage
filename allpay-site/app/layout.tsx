import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

const noto = Noto_Sans_KR({ subsets: ["latin"], weight: ["400","500","700","900"] });

export const metadata: Metadata = {
  title: "AllPay | 결제로 세상을 연결하다",
  description: "Global Payment & Virtual Account Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
