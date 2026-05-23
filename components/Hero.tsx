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
    <section className="relative overflow-hidden px-5 pt-14 pb-16 text-center">
      <div className="absolute inset-0 -z-10 bg-[#faf8f3]" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_top,#e7dcc5,transparent_45%)]" />

      <Image
        src={content.masterPhoto}
        alt={`Фото мастера ${content.name}`}
        width={220}
        height={220}
        priority
        className="mx-auto h-[220px] w-[220px] rounded-full object-cover shadow-2xl"
      />

      <h1 className="mt-8 text-4xl font-bold tracking-tight text-black sm:text-5xl">
        {content.name}
      </h1>

      <p className="mt-3 text-lg font-medium uppercase tracking-wide text-neutral-800">
        Барбер / мужские стрижки / оформление бороды
      </p>

      <p className="mx-auto mt-5 max-w-xl text-neutral-600">
        {content.description}
      </p>

      <div className="mt-8 flex justify-center gap-4">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={label === "Позвонить" ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:scale-105 hover:bg-[#123624]"
          >
            <Icon size={28} strokeWidth={2.5} />
          </a>
        ))}
      </div>
    </section>
  );
}