import { Outlet } from 'react-router-dom';

import { Header } from '@/components/header';
import { AppSidebar } from '@/components/app-sidebar';
import { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';

export function AppLayout() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      {sidebar && (
        <SidebarProvider>
          <AppSidebar />
          <main className="bg-background w-full flex flex-col">
            {/* <SidebarHeader /> */}
            <div className="p-4">
              <Outlet />
            </div>
          </main>
        </SidebarProvider>
      )}

      {!sidebar && (
        <div className="flex min-h-screen flex-col antialiased">
          <Header />

          <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
