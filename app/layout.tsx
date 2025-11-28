import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";

const giants = localFont({
  src: [
    { path: "./font/Giants-Regular.otf", weight: "400", style: "normal" },
    { path: "./font/Giants-Bold.otf", weight: "700", style: "normal" },
    { path: "./font/Giants-Inline.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-giants-local",
  display: "swap",
});

const ibmSans = IBM_Plex_Sans_KR({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beastcj.com"),
  title: "수원 호빠 | 인계동 호빠 | 동탄 호빠 | 010 7580 1913 | 충재실장",
  description: "수원 호빠, 인계동 호빠, 동탄 호빠, 수원 호스트바, 인계동 호스트바. 최고의 시설과 수질, 최상의 서비스로 모십니다. 010-7580-1913 충재실장.",
  keywords: "수원 호빠, 인계동 호빠, 동탄 호빠, 수원 호스트바, 인계동 호스트바, 비스트, 수원비스트, 인계동비스트, 충재실장",
  openGraph: {
    title: "수원 호빠 | 인계동 호빠 | 동탄 호빠 | 수원 호스트바",
    description: "수원 호빠, 인계동 호빠, 동탄 호빠, 수원 호스트바, 인계동 호스트바. 당신의 특별한 밤을 위한 최고의 선택.",
    type: "website",
    locale: "ko_KR",
    siteName: "비스트(Beast)",
    images: [
      {
        url: "/ingyedong-hoppa.png",
        width: 1200,
        height: 630,
        alt: "수원 인계동 호빠 비스트 전경",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "수원 호빠 | 인계동 호빠 | 동탄 호빠 | 010 7580 1913 | 충재실장",
    description: "수원 호빠, 인계동 호빠, 동탄 호빠, 수원 호스트바. 최고의 시설과 수질, 최상의 서비스로 모십니다.",
    images: ["/ingyedong-hoppa.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${ibmSans.variable} ${giants.variable} antialiased bg-black text-white break-keep`}
      >
        {children}
      </body>
    </html>
  );
}
