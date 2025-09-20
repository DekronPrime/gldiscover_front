"use client";

import Image from "next/image";
import React from "react";
import { cn } from "@/src/utils/cn";
import ArrowPng from "@/public/icons/arrow-right-light.png";

type ArrowButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  direction?: "left" | "right";
  ariaLabel?: string;
};

export default function ArrowButton({
  onClick,
  disabled = false,
  direction = "left",
  ariaLabel,
}: ArrowButtonProps) {
  return (
    <button
      aria-label={ariaLabel ?? (direction === "left" ? "Previous" : "Next")}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative flex items-center justify-center px-1 py-10 rounded-lg transition",
        "bg-black/50 hover:bg-black/75",
        disabled && "hover:bg-black/75 cursor-not-allowed"
      )}
    >
      <Image
        src={ArrowPng}
        alt="arrow"
        width={42}
        height={57}
        className={direction === "left" ? "rotate-180" : ""}
        draggable={false}
      />

      {disabled && (
        <div
          aria-hidden
          className="absolute inset-0 bg-black/75 rounded-lg pointer-events-none"
        />
      )}
    </button>
  );
}
