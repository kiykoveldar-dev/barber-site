import Image from "next/image";
import {
  Camera,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";

import { content } from "@/data/content";

export default function Hero() {
  const socials = [
    { label: "Telegram", href: content.links.telegram, icon: Send },
    { label: "WhatsApp", href: content.links.whatsapp, icon: MessageCircle },
    { label: "Instagram", href: content.links.instagram, icon: Camera },
    { label: "Позвонить", href: `tel:${content.phone}`, icon: Phone },
  ];

  return (
    <section
      className="
      relative
      overflow-hidden
      px-5
      pt-16
      pb-56
      text-center
      text-white
    "
    >
      {/* ОСНОВНОЙ СЕРЫЙ ФОН */}
      <div
        className="
        absolute
        inset-0
        -z-20
        bg-[linear-gradient(180deg,#2b2b2b_0%,#252525_40%,#1d1d1d_75%,#1a1a1a_100%)]
      "
      />

      {/* СВЕТ СВЕРХУ */}
      <div
        className="
        absolute
        inset-0
        -z-10
        opacity-40
        bg-[radial-gradient(circle_at_top,rgba(255,255,255,.16),transparent_50%)]
      "
      />

      {/* ПЛАВНЫЙ ПЕРЕХОД В ЧЁРНЫЙ ПОСЛЕ КНОПКИ */}
      <div
        className="
        absolute
        left-0
        right-0
        bottom-0
        h-[340px]
        -z-10
        bg-gradient-to-b
        from-transparent
        via-[#121212]
        to-black
      "
      />

      <Image
        src={content.masterPhoto}
        alt={`Фото мастера ${content.name}`}
        width={220}
        height={220}
        priority
        className="
          mx-auto
          h-[220px]
          w-[220px]
          rounded-full
          object-cover
          shadow-[0_30px_120px_rgba(0,0,0,.45)]
        "
      />

      <h1 className="mt-8 text-5xl font-bold">
        {content.name}
      </h1>

      <p className="mt-4 text-lg uppercase tracking-wider text-neutral-200">
        Барбер / мужские стрижки / оформление бороды
      </p>

      <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-300">
        {content.description}
      </p>

      <div className="mt-10 flex justify-center gap-5">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={label === "Позвонить" ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-[#2b2b2b]
              text-white
              shadow-xl
              transition
              hover:scale-110
              hover:bg-[#123624]
            "
          >
            <Icon size={28} />
          </a>
        ))}
      </div>
    </section>
  );
}