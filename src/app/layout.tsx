import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Socius Marketing - Premium Social Media Agency',
  description: 'Socius Marketing is a premium social media agency crafting bespoke strategies and captivating content to elevate brands and drive measurable growth. Partner with us for unparalleled digital presence.',
  keywords: ["social media agency, premium marketing, digital strategy, content creation, social media management, brand elevation, online presence, engagement growth"],
  openGraph: {
    "title": "Socius Marketing - Premium Social Media Agency",
    "description": "Socius Marketing is a premium social media agency crafting bespoke strategies and captivating content to elevate brands and drive measurable growth.",
    "url": "https://www.sociusmarketing.com",
    "siteName": "Socius Marketing",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/close-up-person-taking-photo-food_23-2149304448.jpg",
        "alt": "Social Media Dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Socius Marketing - Premium Social Media Agency",
    "description": "Socius Marketing is a premium social media agency crafting bespoke strategies and captivating content to elevate brands and drive measurable growth.",
    "images": [
      "http://img.b2bpic.net/free-photo/close-up-person-taking-photo-food_23-2149304448.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
