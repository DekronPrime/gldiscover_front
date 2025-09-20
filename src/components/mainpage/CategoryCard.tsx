import Image from "next/image";
import React from "react";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CategoryCardProps {
  categoryName: string;
  bgImagePath: string | StaticImport;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryName = "Media",
  bgImagePath,
}) => {
  return (
    <div className="min-w-full h-[300] relative overflow-hidden rounded-lg">
      <Image src={bgImagePath} alt="Category card" className="object-cover" />
      <div
        className="absolute inset-0 bg-black/50 flex justify-center items-center font-agenorNeueRegular text-5xl uppercase hover:text-accent hover:bg-black/75 transition-all cursor-pointer"
        draggable="false"
      >
        {categoryName}
      </div>
    </div>
  );
};

export default CategoryCard;
