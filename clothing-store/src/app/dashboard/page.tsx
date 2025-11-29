"use client";

import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoutButton from "@/components/LogoutButton";

export default function DashboardPage() {
  const { user } = useUser();
  const router = useRouter();

  // Redirect if user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  // Avoid flashing empty screen before redirect
  if (!user) {
    return (
      <div className="p-10 text-center">
        <p className="text-gray-600">Redirecting...</p>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>

      <p className="mt-4 text-gray-700">
        This is your dashboard. You can manage your profile, orders, and preferences here.
      </p>

      <div className="mt-8">
        <LogoutButton />
      </div>
    </section>
  );
}
