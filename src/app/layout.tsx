import React from "react";
import "@/styles/globals.css";
import Provider from "./provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Lrnr",
    default: "Lrnr",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
