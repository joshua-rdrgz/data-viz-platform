import {
  Bell,
  ClipboardList,
  CloudUpload,
  Home,
  Menu,
  Settings,
} from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { Button } from './ui/button';
import { SearchBar } from './ui/search-bar';
import { ScrollArea } from './ui/scroll-area';

export const DashboardLayout = () => {
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: Bell, label: 'Notifications' },
    { icon: ClipboardList, label: 'History' },
    { icon: CloudUpload, label: 'Upload' },
    { icon: Settings, label: 'Settings' },
  ];

  const topTabs = [
    { label: 'Charging Stations', isActive: true },
    { label: 'Fleet Sizing', isActive: false },
    { label: 'Parking', isActive: false },
  ];

  return (
    <div className='flex h-screen m-2 border border-border rounded-lg overflow-hidden'>
      {/* Sidebar */}
      <aside className='w-20 bg-sidebar flex flex-col items-center py-4 md:py-6 px-1 md:px-2 rounded-l-lg'>
        {/* Burger Menu */}
        <div className='hidden md:block'>
          <Menu className='h-7 w-7 text-sidebar-foreground' />
        </div>
        <nav className='flex flex-col gap-8 mt-16'>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === 'Home';
            return (
              <Button
                key={item.label}
                variant='ghost'
                size='icon'
                className={`p-2.5 rounded-lg ${isActive ? 'bg-white/10 text-sidebar-foreground' : 'text-muted-foreground hover:text-sidebar-foreground'}`}
                title={item.label}
              >
                <Icon className='size-5' />
              </Button>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className='flex flex-col flex-1'>
        {/* Top bar */}
        <header className='h-20 bg-sidebar flex items-center justify-between px-12 rounded-t-lg'>
          <div className='flex items-center gap-2'>
            {topTabs.map((tab, index) => (
              <Button
                key={index}
                variant='ghost'
                className={`px-5 py-2 rounded-lg text-sm font-medium ${
                  tab.isActive
                    ? 'bg-white/10 text-sidebar-foreground'
                    : 'text-muted-foreground hover:text-sidebar-foreground'
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <SearchBar />
        </header>

        {/* Main content area */}
        <main className='flex-1 bg-main-background px-8 py-8 border-t border-l border-sidebar-border rounded-b-lg rounded-l-lg overflow-hidden'>
          <ScrollArea className='h-full w-full'>
            <div className='pr-10'>
              <Outlet />
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};
