import { appTheme } from "@/config/theme-override.config";
import Providers from "@/utils/provider";
import { ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Notification UI",
  description: "Configure your notification",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main>
          <ThemeProvider theme={appTheme}>
            <Providers>{children}</Providers>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
