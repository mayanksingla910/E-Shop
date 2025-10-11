import Link from "next/link";
import Menu from "./menu";
import SearchBar from "./searchBar";
import NavIcons from "./navIcons";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="h-full flex md:hidden items-center justify-between">
        <Link href="/">
          <div className="text-2xl tracking-wide">E-SHOP</div>
        </Link>
        <Menu />
      </div>

      <div className="hidden md:flex items-center justify-between h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/">
            <div className="text-2xl tracking-wide">E-SHOP</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
