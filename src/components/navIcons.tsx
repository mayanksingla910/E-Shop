"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartModal from "./cartModal";
import Cookies from "js-cookie";
import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const wixClient = useWixClient();

  const loggedIn = wixClient.auth.loggedIn();

  const handleProfile = () => {
    if (!loggedIn) router.push("/login");
    else setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    router.push(logoutUrl);
    setIsLoading(false);
    setIsProfileOpen(false);
  };

  const { counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);


  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 top-10 bg-white left-0 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-sm z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">
            {isLoading ? "Logging out..." : "Logout"}
          </div>
        </div>
      )}

      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />

      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/cart.png" alt="" width={22} height={22} />
        <div className={`absolute -top-4 -right-4 w-6 h-6 bg-pink-500 rounded-full text-white text-sm flex items-center justify-center ${counter ? "": "hidden"}`}>
          {counter}
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}
