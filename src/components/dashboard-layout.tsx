import { Outlet } from 'react-router-dom';
import {
  Home,
  Bell,
  ClipboardList,
  CloudUpload,
  Settings,
  Menu,
  Search,
} from 'lucide-react';
import { Button } from './ui/button';

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
    <div className='flex h-screen m-2 border border-border rounded-lg'>
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

          {/* Search bar */}
          <div className='flex items-center bg-white/5 rounded-lg px-4 py-1 border border-sidebar-ring'>
            <Search className='h-4 w-4 text-muted-foreground mr-2' />
            <input
              type='text'
              placeholder='Search...'
              className='border-none outline-none text-sidebar-foreground placeholder:text-muted-foreground w-48 h-auto p-0 focus-visible:ring-0'
            />
          </div>
        </header>

        {/* Main content area */}
        <main className='flex-1 bg-main-background px-12 py-8 overflow-auto border-t border-l border-sidebar-border rounded-b-lg rounded-l-lg'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
