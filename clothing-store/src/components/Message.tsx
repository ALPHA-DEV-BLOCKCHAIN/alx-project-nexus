"use client";

interface MessageProps {
  text: string;
  type?: "success" | "error" | "info";
}

export default function Message({ text, type = "success" }: MessageProps) {
  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
    <div
      className={`fixed top-5 right-5 px-6 py-3 rounded-lg text-white shadow-lg ${bgColor} animate-fade-in`}
    >
      {text}
    </div>
  );
}
