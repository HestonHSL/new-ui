import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { OrderItemsPreview } from './OrderItemsPreview';

const orders = [
  {
    id: "#ORD-9021",
    name: "Premium Editorial Pack",
    date: "Oct 24, 2023",
    amount: "$1,240.00",
    status: "Completed",
    statusClass: "bg-slate-100 text-slate-700",
    previewImages: [
      "https://images.unsplash.com/photo-1565035010268-a3816f98589a?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565035010268-a3816f98589a?auto=format&fit=crop&w=400&q=80",
    ],
    modelCount: 5,
  },
  {
    id: "#ORD-8842",
    name: "Bespoke Design Suite",
    date: "Oct 21, 2023",
    amount: "$2,100.00",
    status: "Production",
    statusClass: "bg-primary-container text-primary",
    previewImages: [
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565035010268-a3816f98589a?auto=format&fit=crop&w=400&q=80",
    ],
    modelCount: 3,
  },
  {
    id: "#ORD-8810",
    name: "Curator Essentials",
    date: "Oct 19, 2023",
    amount: "$450.00",
    status: "Unpaid",
    statusClass: "bg-slate-100 text-slate-600",
    previewImages: [
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80",
    ],
    modelCount: 1,
  }
];

export const RecentOrders = ({ onExplore }: { onExplore?: () => void }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-on-background">Recent Orders</h2>
        <button onClick={onExplore} className="text-primary font-bold text-sm flex items-center hover:underline group">
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
                    <div className="flex items-start space-x-4">
                      <OrderItemsPreview
                        previewImages={order.previewImages}
                        totalItems={order.modelCount}
                        title={`${order.id} Models`}
                        className="flex flex-col gap-2"
                      />
                      <div className="pt-1">
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
