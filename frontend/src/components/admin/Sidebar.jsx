import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  // active link styling
  const navLink = (path) =>
    `block px-4 py-2 rounded transition ${
      pathname === path
        ? "bg-red-600 text-white"
        : "hover:bg-gray-200 text-gray-700"
    }`;

  return (
    <div className="h-full w-64 bg-white shadow hidden md:block">
      
      {/* Logo / Title */}
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold">Admin Panel</h2>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        <Link to="/admin" className={navLink("/admin")}>
          Dashboard
        </Link>

        <Link to="/admin/members" className={navLink("/admin/members")}>
          Members
        </Link>

        <Link to="/admin/events" className={navLink("/admin/events")}>
          Events
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;