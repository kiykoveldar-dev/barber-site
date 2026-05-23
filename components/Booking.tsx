"use client";

import { useState } from "react";
import { Send, MessageCircle, Camera, Phone } from "lucide-react";
import { content } from "@/data/content";

export default function Booking() {
  const [open, setOpen] = useState(false);

  const options = [
    { label: "Написать в Telegram", href: content.links.telegram, icon: Send },
    { label: "Написать в WhatsApp", href: content.links.whatsapp, icon: MessageCircle },
    { label: "Instagram Direct", href: content.links.instagram, icon: Camera },
    { label: "Позвонить", href: `tel:${content.phone}`, icon: Phone },
  ];

  return (
    <section className="bg-black px-5 pb-20 text-white">
      <div className="mx-auto max-w-md">
        <button
          onClick={() => setOpen(!open)}
          className="w-full rounded-full bg-[#123624] py-5 text-xl font-semibold text-white shadow-xl transition hover:scale-[1.03] hover:bg-[#185236]"
        >
          Записаться
        </button>

        {open && (
          <div className="mt-6 space-y-4">
            {options.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Позвонить" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-[#202020] px-6 py-5 text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#123624]"
              >
                <Icon size={24} className="text-white" />
                <span className="text-base font-semibold text-white">
                  {label}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}