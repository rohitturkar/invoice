import {
  BarChart3,
  Users,
  Store,
  ShoppingCart,
  Trash,
  Plus,
  Filter
} from "lucide-react";
import Table from "@/components/ui/Table";

interface Invoice {
  invoiceNo: string;
  client: string;
  amount: number;
  date: string;
  status: string;
  action: string;
}

const columns = [
  { label: "Invoice No", field: "invoiceNo" },
  { label: "Client", field: "client" },
  { label: "Amount", field: "amount" },
  { label: "Date", field: "date" },
  { label: "Status", field: "status" },
  { label: "Action", field: "action" },
];

const data: Invoice[] = [
  {
    invoiceNo: "INV001",
    client: "John Doe ",
    amount: 1500.00,
    date: "2025-01-10",
    status: "Paid",
    action: "View"
  },
  {
    invoiceNo: "INV002",
    client: "Jane Smith",
    amount: 2200.50,
    date: "2025-01-12",
    status: "Pending",
    action: "View"
  },
  {
    invoiceNo: "INV003",
    client: "Sam Johnson",
    amount: 800.75,
    date: "2025-01-15",
    status: "Paid",
    action: "View"
  },
  {
    invoiceNo: "INV004",
    client: "Emily Davis",
    amount: 5000.00,
    date: "2025-01-17",
    status: "Overdue",
    action: "View"
  },
];


const stats = [
  {
    title: "Total Invoices",
    value: "30",
    icon: Store,
  },
  {
    title: "Total Invoices",
    value: "30",
    icon: Store,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="p-6 shadow-lg rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-indigo-50 rounded-lg hidden">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="space-y-2">
                <p className="text-md font-medium text-gray-900">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-semibold text-violet-400">
                    {stat.value}
                  </p>
                 
                </div>
              </div>
            </div>
          );
        })}
      </div>

    <div className='bg-white shadow-xl border border-gray-200 rounded-2xl p-4'>
    <div className="flex justify-between flex-wrap my-6 items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="2xl:max-w-[900px] md:max-w-[600px] w-full px-6 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className='flex items-center gap-2'> 
        <button className="text-black font-bold rounded-md px-4 py-2   flex items-center gap-1 text-md bg-white border border-gray-400 ">
          <Filter className="w-5 h-5 mr-1"/>
          Filter
        </button>
        <button className="bg-violet-400 rounded-md px-4 py-2   flex items-center gap-1 text-md text-white">
          <Plus className="w-5 h-5 mr-1" />
          Create Invoice
        </button>
        </div>
      </div>


<div className='pb-4 pt-2 text-gray-600 font-semibold text-xl'>
  Recent Invoices
  </div>
      <Table data={data} columns={columns} />

    </div>
    </div>
  );
}
