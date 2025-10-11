"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
    const [open, setOpen] = useState(false);

    return(
        <div>
            <Image 
                src="/menu.png"
                alt=""
                width={28}
                height={28}
                className="cursor-pointer"
                onClick={() => {setOpen(!open)}}
            />
            {open && (
                <div className="absolute left-0 top-20 bg-neutral-900 text-neutral-200 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8">
                    <Link href="/">Home</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Cart</Link>
                    <Link href="/">Logout</Link>
                </div>
            )}
        </div>
    )
}