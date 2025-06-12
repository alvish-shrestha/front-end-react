import React, { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

export default function AdminLayout() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-800 text-white">
      <aside className="w-64 p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive ? "text-red-400 font-bold block" : "block hover:text-red-300"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/profile"
            className={({ isActive }) =>
              isActive ? "text-red-400 font-bold block" : "block hover:text-red-300"
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              isActive ? "text-red-400 font-bold block" : "block hover:text-red-300"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/admin/categories"
            className={({ isActive }) =>
              isActive ? "text-red-400 font-bold block" : "block hover:text-red-300"
            }
          >
            Categories
          </NavLink>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="shadow p-4 flex justify-between">
          <span>Welcome, {user?.username || "Admin"}</span>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </header>

        <main className="p-6 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
