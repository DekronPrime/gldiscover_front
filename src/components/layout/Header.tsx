import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import MegaMenu from "./MegaMenu";

import SearchLight from "@/public/icons/search-light.png";
import SearchAccent from "@/public/icons/search-accent.png";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="bg-foreground py-3">
        <div className="w-11/12 mx-auto border-1 flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/logo/gld-logo.svg"}
              alt="GLD Logo"
              width={305}
              height={81}
              draggable="false"
            />
          </Link>

          <div className="inline-flex gap-3">
            <MegaMenu
              label="Movies"
              columns={[
                [
                  { label: "All Genres", href: "/genres", isHeader: true },
                  { label: "Action", href: "/genres/action" },
                  { label: "Comedy", href: "/genres/comedy" },
                  { label: "Sci-Fi & Fantasy", href: "/genres/scifi" },
                  { label: "Horror", href: "/genres/horror" },
                  { label: "Western", href: "/genres/western" },
                ],
                [
                  { label: "All Types", href: "/types", isHeader: true },
                  { label: "Blockbusters", href: "/types/blockbusters" },
                  { label: "Independent Films", href: "/types/indie" },
                  { label: "Arthouse", href: "/types/arthouse" },
                  { label: "Foreign Films", href: "/types/foreign" },
                  { label: "Short Films", href: "/types/short" },
                ],
                [
                  { label: "All Years", href: "/years", isHeader: true },
                  { label: "2020s", href: "/years/2020s" },
                  { label: "2010s", href: "/years/2010s" },
                  { label: "2000s", href: "/years/2000s" },
                  { label: "1990s", href: "/years/1990s" },
                  { label: "1980s", href: "/years/1980s" },
                ],
                [
                  {
                    label: "All Collections",
                    href: "/collections",
                    isHeader: true,
                  },
                  { label: "Franchises", href: "/collections/franchises" },
                  { label: "Trilogies", href: "/collections/trilogies" },
                  { label: "Award Winners", href: "/collections/awards" },
                  {
                    label: "Coming Soon",
                    href: "/collections/coming",
                    highlight: true,
                  },
                  {
                    label: "Now Playing",
                    href: "/collections/now",
                    highlight: true,
                  },
                ],
              ]}
            />
            <MegaMenu
              label="TV Shows"
              columns={[
                [
                  { label: "All Genres", href: "/genres", isHeader: true },
                  { label: "Action", href: "/genres/action" },
                  { label: "Comedy", href: "/genres/comedy" },
                  { label: "Sci-Fi & Fantasy", href: "/genres/scifi" },
                  { label: "Horror", href: "/genres/horror" },
                  { label: "Western", href: "/genres/western" },
                ],
                [
                  { label: "All Types", href: "/types", isHeader: true },
                  { label: "Blockbusters", href: "/types/blockbusters" },
                  { label: "Independent Films", href: "/types/indie" },
                  { label: "Arthouse", href: "/types/arthouse" },
                  { label: "Foreign Films", href: "/types/foreign" },
                  { label: "Short Films", href: "/types/short" },
                ],
                [
                  { label: "All Years", href: "/years", isHeader: true },
                  { label: "2020s", href: "/years/2020s" },
                  { label: "2010s", href: "/years/2010s" },
                  { label: "2000s", href: "/years/2000s" },
                  { label: "1990s", href: "/years/1990s" },
                  { label: "1980s", href: "/years/1980s" },
                ],
                [
                  {
                    label: "All Collections",
                    href: "/collections",
                    isHeader: true,
                  },
                  { label: "Franchises", href: "/collections/franchises" },
                  { label: "Trilogies", href: "/collections/trilogies" },
                  { label: "Award Winners", href: "/collections/awards" },
                  {
                    label: "Coming Soon",
                    href: "/collections/coming",
                    highlight: true,
                  },
                  {
                    label: "Now Playing",
                    href: "/collections/now",
                    highlight: true,
                  },
                ],
              ]}
            />
            <MegaMenu
              label="Community"
              columns={[
                [
                  { label: "All Genres", href: "/genres", isHeader: true },
                  { label: "Action", href: "/genres/action" },
                  { label: "Comedy", href: "/genres/comedy" },
                  { label: "Sci-Fi & Fantasy", href: "/genres/scifi" },
                  { label: "Horror", href: "/genres/horror" },
                  { label: "Western", href: "/genres/western" },
                ],
                [
                  { label: "All Types", href: "/types", isHeader: true },
                  { label: "Blockbusters", href: "/types/blockbusters" },
                  { label: "Independent Films", href: "/types/indie" },
                  { label: "Arthouse", href: "/types/arthouse" },
                  { label: "Foreign Films", href: "/types/foreign" },
                  { label: "Short Films", href: "/types/short" },
                ],
                [
                  { label: "All Years", href: "/years", isHeader: true },
                  { label: "2020s", href: "/years/2020s" },
                  { label: "2010s", href: "/years/2010s" },
                  { label: "2000s", href: "/years/2000s" },
                  { label: "1990s", href: "/years/1990s" },
                  { label: "1980s", href: "/years/1980s" },
                ],
              ]}
            />
          </div>
          <div className="inline-flex gap-3">
            <div className="inline-flex gap-3 pr-3 border-r-2 border-light">
              <Button variant="icon" size="ico" className="group relative">
                <Image
                  src={SearchLight}
                  alt="Search Light"
                  width={35}
                  height={35}
                  className="transition-opacity duration-200 group-hover:opacity-0"
                />
                <Image
                  src={SearchAccent}
                  alt="Search Accent"
                  width={35}
                  height={35}
                  className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                />
              </Button>
            </div>
            <div className="inline-flex gap-3">
              <Button variant="secondary" size="md">
                Sign In
              </Button>
              <Button variant="primary" size="md">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
