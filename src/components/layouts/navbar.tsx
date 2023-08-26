/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
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
              <a>Home</a>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <a>CPU / Processor</a>
                </li>
                <li>
                  <a>Motherboard</a>
                </li>
                <li>
                  <a>RAM</a>
                </li>
                <li>
                  <a>Power Supply Unit</a>
                </li>
                <li>
                  <a>Storage Device</a>
                </li>
                <li>
                  <a>Monitor</a>
                </li>
                <li>
                  <a>Others</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
        <a className=" w-[400px] normal-case text-xl">
          <Image className="" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex z-[14]">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="">Categories</summary>
              <ul className="p-2">
                <li>
                  <a>CPU / Processor</a>
                </li>
                <li>
                  <a>Motherboard</a>
                </li>
                <li>
                  <a>RAM</a>
                </li>
                <li>
                  <a>Power Supply Unit</a>
                </li>
                <li>
                  <a>Storage Device</a>
                </li>
                <li>
                  <a>Monitor</a>
                </li>
                <li>
                  <a>Others</a>
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
              <a>Login</a>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">PC Builder</a>
      </div>
    </div>
  );
};

export default Navbar;
