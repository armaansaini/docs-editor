import React from "react";

interface DocumentLayoutProps {
  children: React.ReactNode;
}

export default function DocumentLayout({ children }: DocumentLayoutProps) {
  return <>{children}</>;
}
