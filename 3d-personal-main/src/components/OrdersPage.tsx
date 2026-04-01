import React, { useState } from 'react';
import {
  Search,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Filter,
  Calendar as CalendarIcon,
  CreditCard,
  Pencil,
  ArrowLeft,
  Download,
  PackageCheck,
  MapPin,
  Receipt,
} from 'lucide-react';
import { cn } from '../lib/utils';

type OrderItem = {
  id: string;
  orderItemId: string;
  fileName: string;
  dimensions: string;
  metrics: string;
  partNotes: string;
  material: string;
  color: string;
  postProcess: string;
  unitPrice: string;
  quantity: string;
  totalPrice: string;
  image: string;
};

type OrderRecord = {
  id: string;
  status: string;
  quantity: string;
  total: string;
  discount: string;
  estDelivery: string;
  paymentStatus: string;
  paymentMethod: string;
  paymentTime: string;
  date: string;
  orderTime: string;
  invoiceStatus: string;
  packageName: string;
  subtotal: string;
  shippingFee: string;
  address: {
    recipient: string;
    company: string;
    taxId: string;
    phone: string;
    email: string;
    addressLine: string;
    city: string;
    postalCode: string;
    country: string;
  };
  items: OrderItem[];
};

const ordersData: OrderRecord[] = [
  {
    id: 'ORD260319-089008',
    status: 'Pending',
    quantity: '2 items, 2 pcs',
    total: 'USD 339.33',
    discount: '-',
    estDelivery: '-',
    paymentStatus: 'Unpaid',
    paymentMethod: 'Bank Transfer',
    paymentTime: '-',
    date: '2026-03-19',
    orderTime: '2026-03-19 08:09:08',
    invoiceStatus: 'Pending',
    packageName: 'ORD260319-089008_files.zip',
    subtotal: '274.33 USD',
    shippingFee: '65.00 USD',
    address: {
      recipient: '1212 123',
      company: '123',
      taxId: '123',
      phone: '123123',
      email: 'kriseoooooo@gmail.com',
      addressLine: '123123',
      city: '12312',
      postalCode: '123123',
      country: 'Germany',
    },
    items: [
      {
        id: 'item-1',
        orderItemId: 'ORD260319-089008-P001',
        fileName: '90101001-Exhaust-Manifold-Tubing-rev-.step',
        dimensions: '303.14 × 156.77 × 102.27 mm',
        metrics: '185468.61 mm³ | 148195.11 mm²',
        partNotes: 'No notes',
        material: '1.2 SLM - Stainless Steel 316L - $$$',
        color: 'Metallic Gray',
        postProcess: 'Sand Blasted - Matte',
        unitPrice: '$215.33',
        quantity: '1',
        totalPrice: '$215.33',
        image: 'https://images.unsplash.com/photo-1565035010268-a3816f98589a?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'item-2',
        orderItemId: 'ORD260319-089008-P001',
        fileName: 'FUEL RAIL SECONDARY.stp',
        dimensions: '240.00 × 34.00 × 62.00 mm',
        metrics: '52891.68 mm³ | 41350.53 mm²',
        partNotes: 'No notes',
        material: '1.2 SLM - Stainless Steel 316L - $$$',
        color: 'Metallic Gray',
        postProcess: 'Sand Blasted - Matte',
        unitPrice: '$59.00',
        quantity: '1',
        totalPrice: '$59.00',
        image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 'ORD260315-078122',
    status: 'Completed',
    quantity: '1 item, 1 pc',
    total: 'USD 125.00',
    discount: 'USD 10.00',
    estDelivery: '2026-03-22',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    paymentTime: '2026-03-15 14:30',
    date: '2026-03-15',
    orderTime: '2026-03-15 14:12:09',
    invoiceStatus: 'Downloaded',
    packageName: 'ORD260315-078122_files.zip',
    subtotal: '110.00 USD',
    shippingFee: '15.00 USD',
    address: {
      recipient: 'Alex Rivers',
      company: 'Nebula Tech',
      taxId: 'DE998877665',
      phone: '+49 176 0000 0000',
      email: 'alex@nebulatech.com',
      addressLine: '88 Foundry Park',
      city: 'Berlin',
      postalCode: '10115',
      country: 'Germany',
    },
    items: [
      {
        id: 'item-3',
        orderItemId: 'ORD260315-078122-P001',
        fileName: 'Cooling_Valve_Core.stl',
        dimensions: '180.00 × 75.00 × 48.00 mm',
        metrics: '32455.90 mm³ | 22201.18 mm²',
        partNotes: 'Urgent production requested',
        material: 'AlSi10Mg',
        color: 'Natural Silver',
        postProcess: 'Bead Blasted',
        unitPrice: '$125.00',
        quantity: '1',
        totalPrice: '$125.00',
        image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
];

const statusClass = (status: string) =>
  status === 'Pending'
    ? 'bg-amber-100 text-amber-700'
    : 'bg-emerald-100 text-emerald-700';

const paymentClass = (status: string) =>
  status === 'Unpaid'
    ? 'bg-red-100 text-red-600'
    : 'bg-emerald-100 text-emerald-600';

const OrderDetailsView = ({ order, onBack }: { order: OrderRecord; onBack: () => void }) => {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-5 rounded-[2rem] border border-outline bg-white p-8 shadow-sm">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 self-start text-sm font-bold text-slate-500 transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to Orders
        </button>

        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight text-on-background">
                Order {order.id}
              </h1>
              <span className={cn('rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em]', statusClass(order.status))}>
                {order.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>Order Time: {order.orderTime}</span>
              <span>Estimated Delivery: {order.estDelivery}</span>
              <span>Payment Time: {order.paymentTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className={cn('rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em]', paymentClass(order.paymentStatus))}>
              {order.paymentStatus}
            </span>
            <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm shadow-primary/25 transition-all hover:bg-primary-hover active:scale-95">
              <Download size={16} />
              Invoice Download
            </button>
          </div>
        </div>
      </header>

      <section className="rounded-[2rem] border border-outline bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-container text-primary">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Address Information</p>
            <h2 className="text-2xl font-bold tracking-tight text-on-background">Shipping Address</h2>
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.5rem] bg-slate-50 p-6 md:grid-cols-3">
          <div className="space-y-3 text-sm text-slate-500">
            <p><span className="font-semibold text-slate-800">Recipient:</span> {order.address.recipient}</p>
            <p><span className="font-semibold text-slate-800">Phone:</span> {order.address.phone}</p>
            <p><span className="font-semibold text-slate-800">Address:</span> {order.address.addressLine}</p>
            <p><span className="font-semibold text-slate-800">Postal Code:</span> {order.address.postalCode}</p>
          </div>
          <div className="space-y-3 text-sm text-slate-500">
            <p><span className="font-semibold text-slate-800">Company:</span> {order.address.company}</p>
            <p><span className="font-semibold text-slate-800">Email:</span> {order.address.email}</p>
            <p><span className="font-semibold text-slate-800">City:</span> {order.address.city}</p>
            <p><span className="font-semibold text-slate-800">Country:</span> {order.address.country}</p>
          </div>
          <div className="space-y-3 text-sm text-slate-500">
            <p><span className="font-semibold text-slate-800">Tax ID:</span> {order.address.taxId}</p>
            <p><span className="font-semibold text-slate-800">Quantity:</span> {order.quantity}</p>
            <p><span className="font-semibold text-slate-800">Payment Method:</span> {order.paymentMethod}</p>
            <p><span className="font-semibold text-slate-800">Invoice:</span> {order.invoiceStatus}</p>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-[2rem] border border-outline bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Order Summary</p>
            <h2 className="text-2xl font-bold tracking-tight text-on-background">All Order Items</h2>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-500">
            <span>Payment Status: <span className="font-semibold text-slate-800">{order.paymentStatus}</span></span>
            <span>Payment Method: <span className="font-semibold text-slate-800">{order.paymentMethod}</span></span>
          </div>
        </div>

        <div className="space-y-5">
          {order.items.map((item) => (
            <article key={item.id} className="rounded-[1.5rem] border border-outline bg-slate-50/60 p-6 transition-all hover:border-primary/20 hover:bg-white">
              <div className="grid gap-6 xl:grid-cols-[220px_minmax(0,1fr)]">
                <div className="space-y-4">
                  <div className="flex h-40 items-center justify-center rounded-[1.25rem] bg-white p-4 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.fileName}
                      className="h-full w-full rounded-xl object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-black tracking-tight text-on-background">{item.fileName}</h3>
                    <p className="mt-2 text-xs font-medium text-slate-500">{item.dimensions}</p>
                    <p className="mt-1 text-xs font-medium text-slate-400">{item.metrics}</p>
                  </div>
                  <div className="rounded-2xl border border-outline bg-white px-4 py-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Part Notes</p>
                    <p className="mt-2 text-sm text-slate-500">{item.partNotes}</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      Order Item #{item.orderItemId}
                    </p>
                    <button className="inline-flex items-center gap-2 rounded-full border border-outline bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-600 transition-colors hover:border-primary/30 hover:text-primary">
                      <Receipt size={14} />
                      Item Invoice
                    </button>
                  </div>

                  <div className="grid gap-4 border-t border-outline/70 pt-5 md:grid-cols-2 xl:grid-cols-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Material</p>
                      <p className="mt-2 text-sm font-semibold text-slate-800">{item.material}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Color</p>
                      <p className="mt-2 text-sm font-semibold text-slate-800">{item.color}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Processor</p>
                      <p className="mt-2 text-sm font-semibold text-slate-800">{item.postProcess}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Unit Price</p>
                      <p className="mt-2 text-sm font-semibold text-slate-800">{item.unitPrice}</p>
                    </div>
                  </div>

                  <div className="grid gap-4 border-t border-outline/70 pt-5 md:grid-cols-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Quantity</p>
                      <p className="mt-2 text-xl font-bold text-on-background">{item.quantity}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Payment State</p>
                      <span className={cn('mt-2 inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em]', paymentClass(order.paymentStatus))}>
                        {order.paymentStatus}
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Total Price</p>
                      <p className="mt-2 text-xl font-bold text-primary">{item.totalPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-outline bg-white p-8 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-container text-primary">
              <PackageCheck size={20} />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Download Package</p>
              <h2 className="text-2xl font-bold tracking-tight text-on-background">Production Files</h2>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[1.5rem] bg-slate-50 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold text-on-background">{order.packageName}</p>
              <p className="mt-1 text-sm text-slate-500">Packaged STEP/STL files, invoice reference and order summary.</p>
            </div>
            <button className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm shadow-primary/25 transition-all hover:bg-primary-hover active:scale-95 md:self-auto">
              <Download size={16} />
              Download
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-outline bg-white p-8 shadow-sm">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">Price Summary</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-on-background">Final Breakdown</h2>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-semibold text-slate-800">{order.subtotal}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Shipping Fee</span>
              <span className="font-semibold text-slate-800">{order.shippingFee}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Discount</span>
              <span className="font-semibold text-slate-800">{order.discount}</span>
            </div>
            <div className="border-t border-outline pt-5">
              <div className="flex items-end justify-between">
                <span className="text-lg font-bold text-on-background">Total</span>
                <span className="text-3xl font-extrabold tracking-tight text-primary">{order.total}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const OrdersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const selectedOrder = ordersData.find((order) => order.id === selectedOrderId) ?? null;

  if (selectedOrder) {
    return <OrderDetailsView order={selectedOrder} onBack={() => setSelectedOrderId(null)} />;
  }

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold tracking-tighter text-on-background mb-4">
            Your Orders.
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Track your curation projects and manage your purchase history in real-time.
          </p>
        </div>
      </header>

      <section className="bg-white border border-outline rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-lg hover:shadow-primary/5 transition-all">
        <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center text-primary overflow-hidden border-4 border-white shadow-xl">
          <img
            src="https://picsum.photos/seed/user/200"
            alt="Profile"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <h2 className="text-3xl font-black text-on-background tracking-tight">hongxin hong</h2>
            <span className="text-slate-400 font-medium">@kriseoooooo@gmail.com</span>
          </div>
          <p className="text-slate-500 text-sm font-medium mb-4">kriseoooooo@gmail.com</p>
          <button className="inline-flex items-center space-x-2 bg-primary-container text-primary px-6 py-2 rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-all active:scale-95">
            <Pencil size={16} />
            <span>Edit Profile</span>
          </button>
        </div>
      </section>

      <section className="bg-white border border-outline rounded-2xl p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-outline rounded-xl text-sm font-medium outline-none focus:ring-2 ring-primary/20 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <select
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-outline rounded-xl text-sm font-bold text-slate-600 outline-none appearance-none focus:ring-2 ring-primary/20 transition-all"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>Order Status</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>

          <div className="md:col-span-1 flex items-center bg-slate-50 border border-outline rounded-xl px-4 py-3 space-x-3">
            <CalendarIcon size={18} className="text-slate-400" />
            <input type="text" placeholder="Start Date" className="bg-transparent text-xs font-bold outline-none w-full" />
            <span className="text-slate-300">~</span>
            <input type="text" placeholder="End Date" className="bg-transparent text-xs font-bold outline-none w-full" />
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-hover transition-all active:scale-95 flex items-center justify-center space-x-2">
              <Search size={18} />
              <span>Search</span>
            </button>
            <button className="px-4 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all active:scale-95 flex items-center justify-center space-x-2">
              <RotateCcw size={18} />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white border border-outline rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-outline">
                {[
                  'Order Number', 'Status', 'Quantity', 'Total',
                  'Est. Delivery', 'Payment Status', 'Payment Method', 'Actions',
                ].map((header) => (
                  <th key={header} className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ordersData.map((order, idx) => (
                <tr key={order.id} className={cn('group hover:bg-slate-50/50 transition-colors', idx !== ordersData.length - 1 && 'border-b border-outline/50')}>
                  <td className="px-6 py-6">
                    <span className="text-sm font-black text-on-background tracking-tight">{order.id}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className={cn('px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter', statusClass(order.status))}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-sm font-medium text-slate-500">{order.quantity}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-sm font-bold text-on-background">{order.total}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-sm font-medium text-slate-500">{order.estDelivery}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className={cn('px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter', paymentClass(order.paymentStatus))}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center space-x-2">
                      <CreditCard size={14} className="text-slate-300" />
                      <span className="text-sm font-medium text-slate-500">{order.paymentMethod}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center space-x-4">
                      {order.paymentStatus === 'Unpaid' && (
                        <button className="text-primary font-bold text-sm hover:underline">Pay</button>
                      )}
                      <button
                        onClick={() => setSelectedOrderId(order.id)}
                        className="text-slate-500 font-bold text-sm hover:text-primary transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-slate-50/30 border-t border-outline flex items-center justify-between">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Showing 1-{ordersData.length} of {ordersData.length} items
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline text-slate-300 cursor-not-allowed">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md shadow-primary/20">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline text-slate-300 cursor-not-allowed">
                <ChevronRight size={20} />
              </button>
            </div>
            <select className="bg-white border border-outline rounded-lg px-4 py-2 text-xs font-bold text-slate-600 outline-none focus:ring-2 ring-primary/20">
              <option>10 / page</option>
              <option>20 / page</option>
              <option>50 / page</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};
