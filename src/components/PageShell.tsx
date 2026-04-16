import type { ReactNode } from "react";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

export function PageShell({
  title,
  children,
  hideFooter = false,
}: {
  title: string;
  children: ReactNode;
  hideFooter?: boolean;
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <AppHeader title={title} />
      <main className="flex-1 px-4 pb-8 pt-4">{children}</main>
      {!hideFooter && <AppFooter />}
    </div>
  );
}
