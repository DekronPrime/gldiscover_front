import { cn } from "@/src/utils/cn";
import Link from "next/link";
import { URL } from "node:url";
import React from "react";

type ChipProps = {
  children: React.ReactNode;
  path: string;
  variant?: "genre" | "keyword";
  className?: string;
} & React.LinkHTMLAttributes<HTMLElement>;

const Chip: React.FC<ChipProps> = ({
  children,
  path,
  variant = "genre",
  className,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 border border-light font-londonTwoRegular tracking-wider text-2xl text-light hover:text-black hover:bg-light transition-all";
  const variants: Record<typeof variant, string> = {
    genre: "rounded-3xl",
    keyword: "rounded-xl",
  };

  return (
    <Link
      href={path}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Chip;
