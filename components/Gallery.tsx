"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { content } from "@/data/content";

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-black px-5 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">
          Работы
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.gallery.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(img)}
              className="overflow-hidden rounded-3xl bg-neutral-900 shadow-lg"
            >
              <Image
                src={img}
                alt={`Работа ${i + 1}`}
                width={800}
                height={1000}
                loading="lazy"
                className="h-[420px] w-full object-cover transition duration-300 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 rounded-full bg-white p-3 text-black"
            aria-label="Закрыть фото"
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