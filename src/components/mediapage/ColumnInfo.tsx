import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface InfoItem {
  label: string;
  value: React.ReactNode;
}

interface InfoColumnProps {
  icon: StaticImageData;
  items: InfoItem[];
}

const ColumnInfo: FC<InfoColumnProps> = ({ icon, items }) => {
  return (
    <div className="flex items-start gap-4 mt-4">
      <Image src={icon} alt="icon" width={50} height={50} draggable="false" />
      <div className="flex flex-col flex-1 gap-2 h-full">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-start items-center gap-2"
            style={{ flex: `1 1 ${100 / items.length}%` }}
          >
            <div className="text-2xl font-exo2Bold font-bold text-light">
              {item.label}:
            </div>
            <div className="text-2xl uppercase inline-flex flex-col justify-center items-center font-exo2Bold py-2 font-bold text-light bg-black/50 w-full h-full rounded-lg">
              {Array.isArray(item.value)
                ? item.value.map((val, i) => (
                    <span key={i} className="block">
                      {val}
                    </span>
                  ))
                : item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnInfo;
