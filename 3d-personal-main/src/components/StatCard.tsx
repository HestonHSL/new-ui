import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  actionLabel: string;
  iconColor?: string;
}

export const StatCard = ({ icon: Icon, label, value, actionLabel, iconColor = "text-slate-500" }: StatCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-outline hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
      <Icon className={cn(iconColor, "mb-6 w-8 h-8 group-hover:scale-110 transition-transform")} />
      <h3 className="text-slate-500 font-semibold text-sm mb-1">{label}</h3>
      <p className="text-4xl font-black text-on-background tracking-tight">{value}</p>
      <div className="mt-4 flex items-center text-xs font-bold text-primary cursor-pointer hover:underline">
        <span className="uppercase tracking-wider">{actionLabel}</span>
        <ChevronRight size={14} className="ml-1" />
      </div>
    </div>
  );
};
