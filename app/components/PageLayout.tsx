import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-black text-white overflow-x-hidden ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

