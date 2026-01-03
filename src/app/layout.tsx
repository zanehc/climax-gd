import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Climax - 당신의 성장을 위한 프리미엄 강의 플랫폼",
  description: "실무 중심의 고품질 온라인 강의로 당신의 커리어를 한 단계 업그레이드하세요.",
  keywords: ["온라인 강의", "프로그래밍", "커리어", "교육", "학습"],
  authors: [{ name: "Climax" }],
  openGraph: {
    title: "Climax - 프리미엄 강의 플랫폼",
    description: "실무 중심의 고품질 온라인 강의",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

