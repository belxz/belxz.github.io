"use client";

import { useState } from "react";
import Image from "next/image";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { createPortal } from "react-dom";
import { create } from "domain";

export default function ProjectScreenshots({
  screenshots,
  projectName,
}: {
  screenshots: string[];
  projectName: string;
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {screenshots.map((src, i) => (
          <RevealWrapper key={src} delayIndex={(i % 4) as 0 | 1 | 2 | 3}>
            <div
              onClick={() => setLightbox(src)}
              className="relative rounded-2xl overflow-hidden
                         border border-border dark:border-dark-border
                         bg-bg2 dark:bg-dark-bg2
                         aspect-video cursor-zoom-in"
            >
              <Image
                src={src}
                alt={`${projectName} screenshot ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </RevealWrapper>
        ))}
      </div>

      {lightbox &&
        createPortal(
          <div
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white"
            >
              ✕ Close
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-h-[90vh] max-w-[95vw]"
            >
              <Image
                src={lightbox}
                alt="Screenshot"
                fill
                className="object-contain"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
