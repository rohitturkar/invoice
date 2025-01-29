import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}:any) {
  return (
    <div className="flex h-screen overflow-y-hidden bg-gray-50 p-4">
      <Sidebar />
      <div className="flex-1 flex flex-col w-full">
        <Header />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}