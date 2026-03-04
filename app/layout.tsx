import type { Metadata } from "next";
import "./globals.css";
import "../css/homeHero.css"
import "../css/navbar.css"
import Provider from "./providers"


export const metadata: Metadata = {
  title: "MemoryPhoto",
  description: "This is photographer portfolio template created by Said Maharramli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
