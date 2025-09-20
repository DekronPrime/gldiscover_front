import React from "react";
import { cn } from "@/src/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "trailer"
    | "learnmore"
    | "megamenu"
    | "icon";
  size?: "sm" | "md" | "lg" | "xl" | "ico";
  icon?: React.ReactNode;
  className?: string;
  onClick?: Function;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg transition-all";

  const variants: Record<typeof variant, string> = {
    primary:
      "bg-light gap-4 text-black hover:bg-accent hover:border-accent text-uppercase border-2 border-light font-semibold font-poppinsSemibold",
    secondary:
      "text-light gap-4 hover:bg-light hover:text-black text-uppercase border-2 border-light font-semibold font-poppinsBold",
    outline:
      "border gap-4 border-light text-white hover:bg-gray-100 focus:ring-gray-400",
    trailer:
      "border-2 gap-0 hover:gap-4 bg-black/50 border-light text-light font-semibold font-poppinsSemibold hover:bg-black",
    learnmore:
      "border-2 gap-4 bg-black/50 border-light text-light uppercase font-bold font-poppinsBold hover:bg-black",
    megamenu:
      "flex-row-reverse border-2 gap-3 border-light text-light uppercase font-semibold font-poppinsSemibold",
    icon: "text-light gap-4 hover:border-accent hover:text-accent text-uppercase border-2 border-light font-semibold font-poppinsBold",
  };

  const sizes: Record<typeof size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-3 text-2xl",
    lg: "p-4 text-3xl",
    xl: "px-6 py-4 text-4xl",
    ico: "p-3 text-2xl",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
