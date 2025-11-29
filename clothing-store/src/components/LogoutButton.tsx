"use client";
import { useUser } from "@/context/UserContext";

export default function LogoutButton() {
  const { logout } = useUser();

  return (
    <button
      onClick={logout}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
}
