"use client";

import React from "react";

import Image from "next/image";
import Button from "../common/Button";

import TmdbLogo from "@/public/logo/tmdb-logo-wide.svg";
import GLDLogo from "@/public/logo/gld-footer-logo.png";
import GoTopLight from "@/public/icons/go-top-light.png";
import GoTopAccent from "@/public/icons/go-top-accent.png";
import SocialMediaLinks from "./SocialMediaLinks";
import FooterNavColumn from "./FooterNavColumn";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-foreground py-10">
      <div className="w-11/12 mx-auto space-y-10">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-4 font-agenorNeueRegular text-3xl text-light">
            <div className="inline-flex items-center gap-4">
              <span className="">Powered by</span>
              <Image
                src={TmdbLogo}
                alt="TMDB Logo"
                width={269}
                height={35}
                draggable="false"
              />
            </div>
            <span>
              This product uses the TMDB API but is not endorsed or certified by
              TMDB.
            </span>
          </div>
          <Button
            variant="icon"
            size="ico"
            className="group relative p-4"
            onClick={scrollToTop}
          >
            <Image
              src={GoTopLight}
              alt="GoTop Light"
              width={50}
              height={50}
              className="transition-opacity duration-200 group-hover:opacity-0"
              draggable="false"
            />
            <Image
              src={GoTopAccent}
              alt="Search Accent"
              width={50}
              height={50}
              className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100"
              draggable="false"
            />
          </Button>
        </div>
        <div className="py-10 border-t-2 border-b-2 border-light">
          <div className="grid grid-flow-col auto-cols-max place-content-between">
            <div className="inline-flex flex-col justify-between">
              <div className="inline-flex flex-col items-center gap-8">
                <Image
                  src={GLDLogo}
                  alt="GLD Logo"
                  width={501}
                  height={100}
                  draggable="false"
                />
                <span className="font-agenorNeueRegular text-4xl text-light">
                  Discover. Search. Enjoy
                </span>
              </div>
              <SocialMediaLinks />
            </div>

            <FooterNavColumn
              sections={[
                {
                  title: "Movies",
                  links: [
                    // { label: "Trending", href: "/movies/trending" },
                    // { label: "Popular", href: "/movies/popular" },
                    { label: "Top Rated", href: "/movies/top-rated" },
                    { label: "Now Playing", href: "/movies/now-playing" },
                    { label: "Upcoming", href: "/movies/upcoming" },
                  ],
                },
                {
                  title: "TV Shows",
                  links: [
                    // { label: "Trending", href: "/tv/trending" },
                    // { label: "Popular", href: "/tv/popular" },
                    { label: "Top Rated", href: "/movies/top-rated" },
                    { label: "Airing Today", href: "/movies/airing-today" },
                    { label: "On The Air", href: "/movies/on-the-air" },
                  ],
                },
              ]}
            />

            <FooterNavColumn
              sections={[
                {
                  title: "Explore",
                  links: [
                    { label: "Trending", href: "/trending" },
                    { label: "Popular", href: "/popular" },
                  ],
                },
                {
                  title: "Community",
                  links: [
                    { label: "News", href: "/news" },
                    { label: "Events", href: "/events" },
                    { label: "Rewiews", href: "/reviews" },
                    { label: "Discussions", href: "/discussions" },
                  ],
                },
              ]}
            />

            <FooterNavColumn
              sections={[
                {
                  title: "About",
                  links: [
                    { label: "About Us", href: "/about-us" },
                    { label: "Contact Us", href: "/contact-us" },
                    { label: "FAQs", href: "/faq" },
                  ],
                },
                {
                  title: "Support",
                  links: [
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    { label: "Terms Of Service", href: "/terms-of-service" },
                    { label: "Help Center", href: "/help-center" },
                  ],
                },
              ]}
            />
          </div>
        </div>
        <div className="flex justify-center items-center font-agenorNeueRegular text-2xl text-light">
          NoCopyright © Glow Line Discover™ 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
