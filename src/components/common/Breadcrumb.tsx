import Image from "next/image";
import Link from "next/link";

import Home from "@/public/icons/home-light.png";
import ArrowRight from "@/public/icons/arrow-right-light.png";

interface BreadcrumbItem {
  label: string | undefined;
  href?: string;
  icon?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-4 overflow-hidden">
      <Link href="/" className="flex items-center shrink-0">
        <Image src={Home} alt="Home" width={40} height={40} draggable={false} />
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;

        return (
          <div
            key={idx}
            className={`flex items-center gap-4 ${
              isLast ? "flex-1 min-w-0" : "flex-shrink-0"
            }`}
          >
            <Image
              src={ArrowRight}
              alt=">"
              width={20}
              height={20}
              draggable={false}
              className="shrink-0"
            />

            {!isLast && item.href ? (
              <Link
                href={item.href}
                className="text-light font-poppinsSemibold font-semibold text-2xl uppercase hover:underline flex items-center gap-4 whitespace-nowrap"
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.label || "Icon"}
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                )}
                <span>{item.label}</span>
              </Link>
            ) : !isLast ? (
              <span className="text-accent font-poppinsSemibold font-semibold text-2xl uppercase flex items-center gap-4 whitespace-nowrap">
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.label || "Icon"}
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                )}
                <span>{item.label}</span>
              </span>
            ) : (
              <span
                className="text-accent font-poppinsSemibold font-semibold text-2xl uppercase flex items-center gap-4 min-w-0"
                title={item.label}
                aria-current="page"
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.label || "Icon"}
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                )}
                <span className="block truncate min-w-0">{item.label}</span>
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
