"use client";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { appTheme } from "../config/theme-override.config";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import { toastConfig } from "@/config/toast.config";

function Providers({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={appTheme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          <ToastContainer {...toastConfig} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default Providers;
