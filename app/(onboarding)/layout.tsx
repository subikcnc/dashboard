import React from "react";
import StoreProvider from "@/app/context/StoreProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <main className="flex min-h-screen w-full items-center justify-center">
        {children}
      </main>
    </StoreProvider>
  );
};

export default Layout;
