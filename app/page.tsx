"use client";
import Layout from "@/components/layout";
import Link from "next/link";
import { FaComment, FaHeart, FaPlus, FaPlusCircle } from "react-icons/fa";

export default function Home() {
  return (
    <Link href="/items">
      <div className="flex h-screen w-full justify-center items-center">
        <button className="mt-4 mx-auto w-1/2 bg-orange-500 hover:bg-orange-600 text-white py-6 border border-transparent rounded-3xl shadow-sm text-3xl font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Start
        </button>
      </div>
    </Link>
  );
}
