import { useState } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* 🔴 Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow transform 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 z-50`}
      >
        <div className="p-4 font-bold text-lg border-b">
          Admin Panel
        </div>

        <nav className="p-4 space-y-2">
          <a href="/admin" className="block p-2 rounded hover:bg-gray-200">
            Dashboard
          </a>
          <a href="/admin/members" className="block p-2 rounded hover:bg-gray-200">
            Members
          </a>
          <a href="/admin/events" className="block p-2 rounded hover:bg-gray-200">
            Events
          </a>
        </nav>
      </div>

      {/* 🔵 Main Content */}
      <div className="flex-1 flex flex-col">

        {/* 🔝 Navbar */}
        <div className="bg-white shadow p-4 flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl"
          >
            ☰
          </button>

          <h1 className="font-bold">Admin Dashboard</h1>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>

        {/* 📄 Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;