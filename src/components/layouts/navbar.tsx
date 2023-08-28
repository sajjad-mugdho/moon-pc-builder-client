/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>
                <button>Home</button>
              </Link>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <Link href="/products/cpu">
                    <button>CPU / Processor</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/motherboard">
                    <button>Motherboard</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/ram">
                    <button>RAM</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/power-supply">
                    <button>Power Supply Unit</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/storage-device" as="">
                    <button>Storage Device</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/monitor">
                    <button>Monitor</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/others">
                    <button>Others</button>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
        <Link href={"/"}>
          <button className=" normal-case text-xl">
            <Image className="" src={logo} alt="" />
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex z-[14]">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link href={"/products"}>
              <button>All Products</button>
            </Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="">Categories</summary>
              <ul className="p-2">
                <li>
                  <Link href="/products/cpu">
                    <button>CPU / Processor</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/motherboard">
                    <button>Motherboard</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/ram">
                    <button>RAM</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/power-supply">
                    <button>Power Supply Unit</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/storage-device" as="">
                    <button>Storage Device</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/monitor">
                    <button>Monitor</button>
                  </Link>
                </li>
                <li>
                  <Link href="/products/others">
                    <button>Others</button>
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          {session?.user && (
            <li>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={session?.user?.image} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a onClick={() => signOut()}>Logout</a>
                  </li>
                </ul>
              </div>
            </li>
          )}
          {!session && (
            <li>
              <Link href={"/login"}>
                <button>Login</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/pc-builder"}>
          <button className="btn btn-primary">PC Builder</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
