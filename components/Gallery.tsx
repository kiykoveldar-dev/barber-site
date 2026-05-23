"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { content } from "@/data/content";

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  const images = content.gallery || [];

  return (
    <section className="px-5 py-20 bg-transparent">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-black">
          Работы
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(img)}
              className="overflow-hidden rounded-3xl shadow"
            >
              <Image
                src={img}
                alt={`Работа ${i + 1}`}
                width={800}
                height={1000}
                loading="lazy"
                className="h-[420px] w-full object-cover transition hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 rounded-full bg-white p-3 text-black"
          >
            <X />
          </button>

          <Image
            src={active}
            alt="Фото работы"
            width={1200}
            height={1400}
            className="max-h-[90vh] w-auto rounded-3xl object-contain"
          />
        </div>
      )}
    </section>
  );
}