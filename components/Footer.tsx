import { content } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 px-5 py-10">
      <div className="mx-auto max-w-6xl text-center">
        <h3 className="text-2xl font-semibold">
          {content.name}
        </h3>

        <p className="mt-4 text-neutral-500">
          {content.city}
        </p>

        <p className="mt-2">
          {content.address}
        </p>

        <a
          href={`tel:${content.phone}`}
          className="mt-4 inline-block hover:opacity-70"
        >
          {content.phone}
        </a>

        <p className="mt-8 text-sm opacity-50">
          © 2026
        </p>
      </div>
    </footer>
  );
}