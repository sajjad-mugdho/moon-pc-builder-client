/* eslint-disable @next/next/no-img-element */
import cpu from "@/assets/image/cpu-tower.png";
import others from "@/assets/image/keyboard-and-mouse.png";
import monitor from "@/assets/image/monitor.png";
import motherboard from "@/assets/image/motherboard.png";
import psu from "@/assets/image/psu.png";
import ram from "@/assets/image/ram.png";
import ssd from "@/assets/image/ssd.png";
import { removeFromPc } from "@/redux/features/pcBulderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";

const PCBuilder = () => {
  const dispatch = useAppDispatch();

  const pcComponents = useAppSelector((state) => state.pcBuilder.pc);

  console.log(pcComponents);

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
      path: "power",
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

  const isCompleteButtonEnabled = Object.keys(pcComponents).length === 6;
  console.log(isCompleteButtonEnabled);
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
                <Link href={`/pc-builder/choose/${category.path}`}>
                  <button className="btn btn-sm">Select</button>
                </Link>
              </div>
            </div>
            {pcComponents && (
              <div className="flex flex-row w-[50%] gap-5 items-center">
                <div>
                  <img
                    className="w-[100px]"
                    src={pcComponents?.[category.path]?.image}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">
                    {pcComponents?.[category.path]?.productName}
                  </h1>
                </div>
                {pcComponents?.[category.path]?.productName && (
                  <div>
                    <button
                      onClick={() =>
                        dispatch(removeFromPc({ category: category.path }))
                      }
                      className="btn btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      ))}
      {!isCompleteButtonEnabled ? (
        <div className="flex items-center justify-center">
          <button
            onClick={() => alert("Successfully built PC!")}
            className="btn btn-primary"
          >
            Complete build
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <button className="btn btn-primary" disabled>
            Complete build
          </button>
        </div>
      )}
    </div>
  );
};

export default PCBuilder;
