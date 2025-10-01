import { Actor } from "@/src/types/type";
import React, { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import ActorCard from "./ActorCard";

import ArrowButton from "@/src/components/common/ArrowButton";

interface ActorCarouselProps {
  actors: Actor[];
  visibleCount?: number;
  step?: number;
  mode?: "light" | "dark";
}

const GAP = 32;

const ActorCarousel: FC<ActorCarouselProps> = ({
  actors,
  visibleCount = 5,
  step = 5,
  mode = "light",
}: ActorCarouselProps) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.offsetWidth;
      const singleWidth =
        (totalWidth - GAP * (visibleCount - 1)) / visibleCount;
      setCardWidth(singleWidth);
    }
  }, [visibleCount]);

  const maxIndex = Math.max(actors.length - visibleCount, 0);

  const next = () => setIndex((p) => Math.min(p + step, maxIndex));
  const prev = () => setIndex((p) => Math.max(p - step, 0));

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center justify-evenly w-full">
        <ArrowButton onClick={prev} disabled={index === 0} direction="left" />

        <div className="overflow-hidden w-11/12" ref={containerRef}>
          <motion.div
            className="flex"
            style={{
              gap: `${GAP}px`,
            }}
            animate={{ x: -(index * (cardWidth + GAP)) }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {actors.map((actor) => (
              <div
                key={actor.id}
                style={{
                  width: `${cardWidth}px`,
                  flexShrink: 0,
                }}
              >
                <ActorCard actor={actor} />
              </div>
            ))}
          </motion.div>
        </div>

        <ArrowButton
          onClick={next}
          disabled={index >= maxIndex}
          direction="right"
        />
      </div>
    </div>
  );
};

export default ActorCarousel;
