"use client";
import { cls } from "@/libs/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BsArrowBarLeft,
  BsBroadcast,
  BsChat,
  BsHouse,
  BsHouseExclamation,
  BsNewspaper,
  BsPerson,
  BsPersonFillExclamation,
} from "react-icons/bs";
import { FaArrowLeft, FaHome, FaNewspaper } from "react-icons/fa";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  const router = useRouter();

  return (
    <div>
      <div
        className={cls(
          "bg-white w-full text-lg font-medium py-3 px-4 fixed text-gray-800 border-b top-0 flex items-center max-w-xl",
          !canGoBack ? "justify-center" : ""
        )}
      >
        {canGoBack ? (
          <button onClick={() => router.back()}>
            <FaArrowLeft />
          </button>
        ) : null}
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-6", hasTabBar ? "pb-6" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="bg-white w-full text-sm py-3  fixed text-gray-800 border-t bottom-0  items-center max-w-xl grid grid-cols-5">
          <Link href="/items">
            <div className="flex flex-col items-center space-y-2">
              <BsHouse />
              <span>Home</span>
            </div>
          </Link>
          <Link href="/community">
            <div className="flex flex-col items-center space-y-2">
              <BsNewspaper />
              <span>Community</span>
            </div>
          </Link>
          <Link href="/chats">
            <div className="flex flex-col items-center space-y-2">
              <BsChat />
              <span>Chat</span>
            </div>
          </Link>
          <Link href="/live">
            <div className="flex flex-col items-center space-y-2">
              <BsBroadcast />
              <span>Live</span>
            </div>
          </Link>
          <Link href="/profile">
            <div className="flex flex-col items-center space-y-2">
              <BsPerson />
              <span>Profile</span>
            </div>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
