import { Footer } from "@/app/components/footer";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { MY_NAME } from "./constants";
import { Providers } from "./providers";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: MY_NAME,
  description: `Web developer portfolio website for ${MY_NAME}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>
        <Providers>
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
