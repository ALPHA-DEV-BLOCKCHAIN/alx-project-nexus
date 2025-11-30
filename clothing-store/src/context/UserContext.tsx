"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  success: string;                 // ⭐ added
  setSuccess: (msg: string) => void; // ⭐ added
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [success, setSuccess] = useState<string>(""); // ⭐ added

  // Load user from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("currentUser");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
  }, []);

  // Login function
  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
    setSuccess("Login successful");   // ⭐ non-blocking success message
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
    setSuccess(""); // clear message
  };

  return (
    <UserContext.Provider value={{ user, success, setSuccess, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside a UserProvider");
  }
  return context;
}
