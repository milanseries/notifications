import Providers from "@/utils/provider";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Notification Configuration",
  description: "Configure your notification",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
