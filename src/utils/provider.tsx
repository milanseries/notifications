"use client";
import { useState } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

function Providers({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default Providers;
