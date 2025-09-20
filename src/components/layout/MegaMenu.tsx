"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "../common/Button";
import Image from "next/image";
import ArrowDown from "@/public/icons/arrow-down-light.png";

type MegaMenuLink = {
  label: string;
  href: string;
  isHeader?: boolean;
  highlight?: boolean;
};

type MegaMenuProps = {
  label: string;
  columns: MegaMenuLink[][];
};

export default function MegaMenu({ label, columns }: MegaMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block group"
      data-open={open}
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
    >
      <Button
        variant="megamenu"
        size="md"
        className={`
          transition-all
          group-data-[open=true]:bg-black/50
          group-data-[open=true]:rounded-t-lg
          group-data-[open=true]:rounded-b-none
          group-data-[open=true]:border-b-0
        `}
        icon={
          <Image
            src={ArrowDown}
            alt="Arrow Down icon"
            width={20}
            height={20}
            draggable={false}
            className="transition-transform
              group-data-[open=true]:rotate-180"
          />
        }
      >
        {label}
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className={`absolute left-0 top-full min-w-max bg-foreground border-2 border-light text-light
                       rounded-lg rounded-tl-none grid grid-flow-col p-3 gap-3 z-50 shadow-lg`}
            onPointerEnter={() => setOpen(true)}
            onPointerLeave={() => setOpen(false)}
          >
            {columns.map((col, i) => (
              <div key={i}>
                {col.map((item, j) => (
                  <Link
                    key={j}
                    href={item.href}
                    className={`block text-xl min-w-max transition font-nunitoSemibold
                      hover:bg-black/50 px-4 p-3 rounded-lg
                      ${
                        item.isHeader
                          ? "font-bold text-accent tracking-wide"
                          : ""
                      }
                      ${item.highlight ? "font-bold text-accent" : ""}
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
