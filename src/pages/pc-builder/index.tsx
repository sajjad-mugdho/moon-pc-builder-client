/* eslint-disable @next/next/no-img-element */
import cpu from "@/assets/image/cpu-tower.png";
import others from "@/assets/image/keyboard-and-mouse.png";
import monitor from "@/assets/image/monitor.png";
import motherboard from "@/assets/image/motherboard.png";
import psu from "@/assets/image/psu.png";
import ram from "@/assets/image/ram.png";
import ssd from "@/assets/image/ssd.png";

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const PCBuilder = () => {
  const featuredCategories = [
    {
      _id: "1",
      name: "CPU / Processor",
      icon: cpu,
      path: "cpu",
    },
    {
      _id: "2",
      name: "Motherboard",
      icon: motherboard,
      path: "motherboard",
    },
    {
      _id: "3",
      name: "RAM",
      icon: ram,
      path: "ram",
    },
    {
      _id: "4",
      name: "Power Supply Unit",
      icon: psu,
      path: "psu",
    },
    {
      _id: "5",
      name: "Storage Device",
      icon: ssd,
      path: "storage",
    },
    {
      _id: "6",
      name: "Monitor",
      icon: monitor,
      path: "monitor",
    },
    {
      _id: "7",
      name: "Others",
      icon: others,
      path: "others",
    },
  ];
  return (
    <div className="box-border p-5 m-5">
      {featuredCategories.map((category) => (
        <>
          <div className="card card-side border-separate m-5 p-5 bg-base-100 shadow-xl">
            <figure>
              <Image src={category.icon} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Select: {category.name}</h2>
              <div className="card-actions justify-end">
                <Link href={`/products/${category.path}`}>
                  <button className="btn btn-primary">Select Product</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default PCBuilder;
