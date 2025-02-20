import Image from "next/image";
import React from "react";

export const Logomark = () => {
  return (
    <div>
      <Image src="/asset/Logomark.svg" width={31} height={31} alt="Logomark" className="pt-1" />
    </div>
  );
};
