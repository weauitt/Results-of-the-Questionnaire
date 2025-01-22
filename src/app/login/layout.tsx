"use client";
import React from "react";
import { AuthProvider } from "@/lib/utils/AuthContext";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
} 