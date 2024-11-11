import { AccountMenu } from './account-menu';
import { ThemeToggle } from './theme/theme-toggle';

export function SidebarHeader() {
  return (
    <header className="p-4 bg-sidebar flex justify-end gap-2">
      <ThemeToggle />
      <AccountMenu />
    </header>
  );
}
