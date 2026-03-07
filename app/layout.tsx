import type { Metadata } from "next";
import "./globals.css";
import "../css/homeHero.css"
import "../css/navbar.css"
import "../css/homeAbout.css"
import "../css/animation.css"
import "../css/homeServices.css"
import Provider from "./providers"
import "../css/homePortfolio.css"
import SmoothScroll from "./SmoothScrool";


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
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Provider>
      </body>
    </html>
  );
}
