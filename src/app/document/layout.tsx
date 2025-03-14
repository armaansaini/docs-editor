import React from "react";

interface DocumentLayoutProps {
  children: React.ReactNode;
}

export default function DocumentLayout({ children }: DocumentLayoutProps) {
  return (
    <div>
      <div className="flex w-full bg-slate-300 text-lg p-4">
        Document Navbar
      </div>
      {children}
    </div>
  );
}
