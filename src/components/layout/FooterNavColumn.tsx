import Link from "next/link";
import React, { FC } from "react";

interface FooterNavColumnProps {
  sections: {
    title: string;
    links: { label: string; href: string }[];
  }[];
}

const FooterNavColumn: FC<FooterNavColumnProps> = ({
  sections,
}: FooterNavColumnProps) => {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((section, idx) => (
        <div key={idx} className="flex flex-col gap-6">
          <h3 className="text-light font-bold font-exo2Bold text-4xl uppercase">
            {section.title}
          </h3>
          <ul className="flex flex-col gap-4">
            {section.links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-light font-exo2Semibold font-semibold text-2xl hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNavColumn;
