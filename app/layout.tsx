import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HashTrack – Instagram Hashtag Performance Tracker",
  description: "Track which hashtags actually drive engagement over time. Stop guessing, start growing."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d0059805-5fa5-4059-b414-f743e0400a32"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
