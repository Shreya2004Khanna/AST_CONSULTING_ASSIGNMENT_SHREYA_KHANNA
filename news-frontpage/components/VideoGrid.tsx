"use client";

import { useState } from "react";

type Props = { ids: string[] };

export default function VideoGrid({ ids }: Props) {
  const [playing, setPlaying] = useState<Record<number, boolean>>({});

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
      {ids.map((id, i) => (
        <div key={id} className="relative bg-black rounded overflow-hidden aspect-video">
          {!playing[i] ? (
            <button
              onClick={() => setPlaying((s) => ({ ...s, [i]: true }))}
              className="absolute inset-0 flex items-center justify-center text-white text-3xl bg-black/40"
              aria-label={`Play video ${i + 1}`}>
              ▶
            </button>
          ) : null}

          {playing[i] ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              title={`video-${i}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            // lazy thumbnail using youtube img
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={`video-${i}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}
