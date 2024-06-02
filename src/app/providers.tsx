"use client";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem>
      <NextTopLoader color="#711DB0" />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
