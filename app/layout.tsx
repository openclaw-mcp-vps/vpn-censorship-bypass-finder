import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPN Bypass Finder – Find Working Tools in Restricted Countries",
  description:
    "Crowdsourced database of VPN alternatives and circumvention tools with real-time status updates. Find what works in your country right now."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="c45bfc9d-9c92-4f6a-af98-3ed4b6ca5a25"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
