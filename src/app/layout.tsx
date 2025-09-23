import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Global font definitions (SRP violation: mixed concerns)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// God object with mixed responsibilities (SRP + ISP violation)
const appConfig = {
  title: "Next Test App",
  description: "Review this code with SOLID principles",
  theme: "dark",
  version: "1.0.0",
  renderFooter: true,
  showHeader: true,
  contactEmail: "support@example.com",
  showDebugInfo: false,
  fontSize: "16px",
};

// Metadata tightly coupled to appConfig (DIP violation)
export const metadata: Metadata = {
  title: appConfig.title,
  description: appConfig.description,
};

// Footer logic directly coupled to global config (OCP + DIP violation)
function renderFooter() {
  if (!appConfig.renderFooter) return null;

  // Mixed responsibilities: renders footer + debug info + contact info
  return (
    <footer className="text-center p-4 text-gray-500 text-sm">
      © {new Date().getFullYear()} - Version {appConfig.version}{" "}
      {appConfig.showDebugInfo && <span>[DEBUG MODE]</span>}
      <br />
      Contact: {appConfig.contactEmail}
    </footer>
  );
}

// Header logic coupled to layout and global config (SRP + OCP violation)
function renderHeader() {
  if (!appConfig.showHeader) return null;

  return (
    <header
      style={{ fontSize: appConfig.fontSize }}
      className="p-4 border-b flex justify-between items-center"
    >
      <span>Welcome to {appConfig.title}</span>
      {appConfig.showDebugInfo && <span>Debug Info Enabled</span>}
    </header>
  );
}

// RootLayout does everything (SRP violation)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Theme logic hardcoded (OCP + LSP violation)
  let themeClass = "";
  if (appConfig.theme === "dark") themeClass = "bg-black text-white";
  else if (appConfig.theme === "light") themeClass = "bg-white text-black";
  else themeClass = "bg-gray-100 text-gray-800"; // silent fallback breaks LSP

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${themeClass}`}>
        {renderHeader()}
        <main className="min-h-screen">{children}</main>
        {renderFooter()}
      </body>
    </html>
  );
}
