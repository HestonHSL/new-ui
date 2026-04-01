import React from 'react';
import { 
  LayoutDashboard, 
  HelpCircle, 
  LogOut,
  User,
  Ticket,
  MapPin,
  Package,
  Settings
} from 'lucide-react';
import { cn } from '../lib/utils';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon: Icon, label, active, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group",
      active 
        ? "bg-primary-container text-primary shadow-sm" 
        : "text-slate-500 hover:text-primary hover:bg-slate-50"
    )}
  >
    <Icon size={20} className={cn(active ? "fill-primary/20" : "group-hover:scale-110 transition-transform")} />
    <span className="font-semibold text-sm">{label}</span>
  </button>
);

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <aside className="hidden lg:flex h-screen w-72 fixed left-0 top-0 bg-white border-r border-outline flex-col p-6 space-y-8 z-40 pt-24">
      <div className="flex items-center space-x-4 px-4">
        <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-primary">
          <User size={24} className="fill-primary/20" />
        </div>
        <div>
          <p className="text-on-background font-bold text-base">Alex Rivers</p>
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Elite Tier</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        <NavItem 
          icon={LayoutDashboard} 
          label="Dashboard" 
          active={activeTab === 'overview'} 
          onClick={() => setActiveTab('overview')}
        />
        <NavItem 
          icon={Package} 
          label="Orders" 
          active={activeTab === 'orders'} 
          onClick={() => setActiveTab('orders')}
        />
        <NavItem 
          icon={Ticket} 
          label="Coupons" 
          active={activeTab === 'coupons'} 
          onClick={() => setActiveTab('coupons')}
        />
        <NavItem 
          icon={MapPin} 
          label="Address" 
          active={activeTab === 'address'} 
          onClick={() => setActiveTab('address')}
        />
        <NavItem 
          icon={Settings} 
          label="Settings" 
          active={activeTab === 'settings'} 
          onClick={() => setActiveTab('settings')}
        />
      </nav>

      <div className="pt-6 border-t border-outline space-y-2">
        <a href="#" className="flex items-center space-x-3 text-slate-500 px-4 py-3 hover:text-primary transition-colors">
          <HelpCircle size={20} />
          <span className="font-semibold text-sm">Help Center</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-slate-500 px-4 py-3 hover:text-red-500 transition-colors">
          <LogOut size={20} />
          <span className="font-semibold text-sm">Logout</span>
        </a>
      </div>
    </aside>
  );
};
