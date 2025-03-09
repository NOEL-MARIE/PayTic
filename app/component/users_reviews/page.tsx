"use client";

import { Typography } from "@/app/ui/designSystem/component/Typo/Typography";
import { IoIosStar } from "react-icons/io";

const reviewImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
];

export default function Home() {
  // Calculate how many images to show and if we need a +X more indicator
  const MAX_VISIBLE_IMAGES = 5;
  const visibleImages = reviewImages.slice(0, MAX_VISIBLE_IMAGES);
  const remainingCount = Math.max(0, reviewImages.length - MAX_VISIBLE_IMAGES);

  return (
    <div className="  flex mt-9  ">
      <div className="w-[317px] h-[50px]   flex items-center ">
        {/* Left side - Overlapping images */}
        <div className="relative h-full w-[149px] flex items-center">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className={`absolute w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white`}
              style={{
                left: `${index * 24}px`,
                zIndex: index,
              }}
            >
              <img
                src={image}
                alt={`Reviewer ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="absolute w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600"
              style={{
                left: `${visibleImages.length * 24}px`,
                zIndex: visibleImages.length,
              }}
            >
              +{remainingCount}
            </div>
          )}
        </div>

        {/* Right side - Rating and text */}
        <div className="w-[152px] h-[40px] flex mt-5 flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex ">
              {" "}
              {[...Array(5)].map((_, i) => (
                <IoIosStar
                  key={i}
                  className="w-3 h-3 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="font-Inter text-[16px] mr-2 text-text_navigation">5.0</p>
          </div>
          <p className="font-Inter text-[16px] text-text_navigation">+200 avis partagés</p>
        </div>
      </div>
    </div>
  );
}
