"use client";

import { FC, useEffect } from "react";
import Image from "next/image";

import Close from "@/public/icons/close-light.png";
import { MediaVideo } from "@/src/types/type";

interface TrailerModalProps {
  trailer: MediaVideo | undefined;
  isOpen: boolean;
  onClose: () => void;
}

const TrailerModal: FC<TrailerModalProps> = ({ trailer, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen || !trailer) return null;

  const trailerUrl =
    trailer.site === "YouTube"
      ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1`
      : "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 hover:rotate-180 transition-all"
      >
        <Image
          src={Close}
          alt="X"
          width={30}
          height={30}
          draggable="false"
          priority
        />
      </button>
      <div className="w-3/4">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border-2 border-light">
          <iframe
            src={trailerUrl}
            title={trailer.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
