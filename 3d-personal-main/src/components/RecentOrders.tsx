import React from 'react';
import { ArrowRight, Package, Truck, CreditCard } from 'lucide-react';
import { cn } from '../lib/utils';

const orders = [
  {
    id: "#ORD-9021",
    name: "Premium Editorial Pack",
    date: "Oct 24, 2023",
    amount: "$1,240.00",
    status: "Completed",
    icon: Package,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    statusClass: "bg-slate-100 text-slate-700"
  },
  {
    id: "#ORD-8842",
    name: "Bespoke Design Suite",
    date: "Oct 21, 2023",
    amount: "$2,100.00",
    status: "Production",
    icon: Truck,
    iconBg: "bg-primary-container",
    iconColor: "text-primary",
    statusClass: "bg-primary-container text-primary"
  },
  {
    id: "#ORD-8810",
    name: "Curator Essentials",
    date: "Oct 19, 2023",
    amount: "$450.00",
    status: "Unpaid",
    icon: CreditCard,
    iconBg: "bg-slate-50",
    iconColor: "text-slate-500",
    statusClass: "bg-slate-100 text-slate-600"
  }
];

export const RecentOrders = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-on-background">Recent Orders</h2>
        <button className="text-primary font-bold text-sm flex items-center hover:underline group">
          Explore All Orders
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="bg-white rounded-xl border border-outline overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Order Details</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-4">
                      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105", order.iconBg)}>
                        <order.icon size={20} className={order.iconColor} />
                      </div>
                      <div>
                        <p className="font-bold text-on-background">{order.id}</p>
                        <p className="text-slate-400 text-xs">{order.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm font-medium text-slate-600">{order.date}</td>
                  <td className="px-8 py-6 text-sm font-bold text-on-background">{order.amount}</td>
                  <td className="px-8 py-6 text-right">
                    <span className={cn("px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter", order.statusClass)}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
