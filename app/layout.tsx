import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scribly - Write. Share. Inspire.",
  description: "Scribly is a modern blogging platform designed for effortless writing and seamless publishing. Whether you're sharing ideas, stories, or insights, Scribly gives you a clean and distraction-free space to create and connect with your audience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserratSans.variable} antialiased`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
          {children}
          <Toaster richColors/>

        </ThemeProvider>
      </body>
    </html>
  );
}
