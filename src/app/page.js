"use client";

import clsx from "clsx";
import { useState } from "react";
import { lusitana } from "./ui/font";
import Image from "next/image";
import Nature1 from "@/app/assets/nature-1.jpg";

const Pages = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)}> click me!</button>
      <span
        className={clsx("text-3xl font-bold", {
          "text-rose-500": active,
          "text-yellow-500": !active,
        })}
      >
        lorem lorem lorem lorem lorem lorem lorem lorem
      </span>
      <div>
        <p className={`${lusitana.className} font-normal antialiased`}>
          this is praragraph
        </p>
        <p className={`${lusitana.className} font-bold antialiased`}>
          this is praragraph
        </p>
      </div>
      <Image src={Nature1} alt="img" className="hidden md:block"/>
 
    </div>
  );
};

export default Pages;
