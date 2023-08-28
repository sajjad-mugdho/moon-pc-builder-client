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
    <div>
      {featuredCategories.map((category) => (
        <>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <Image src={category.icon} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default PCBuilder;
