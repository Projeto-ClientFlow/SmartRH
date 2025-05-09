// src/components/Layout.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      {/* Aqui pode entrar menu, header, etc */}
      {children}
    </div>
  );
}
