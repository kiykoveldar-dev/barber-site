import Image from "next/image";
import {
  Camera,
  Phone,
  Send,
  MessageCircle
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
        className="mx-auto rounded-full object-cover shadow-2xl"
      />

      <h1 className="mt-8 text-4xl font-bold tracking-tight text-black sm:text-5xl">
        {content.name}
      </h1>

      <p className="mt-3 БАРБЕР / МУЖСКИЕ СТРИЖКИ / ОФОРМЛЕНИЕ БОРОДЫtext-lg text-neutral-700">
        
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
           bg-black
text-white
          >
           <Icon
  size={30}
  className="text-black"
/>
          </a>
        ))}
      </div>
    </section>
  );
}