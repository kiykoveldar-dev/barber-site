"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Review = {
  id: number;
  name: string;
  text: string;
  created_at: string;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadReviews() {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setReviews(data);
    }
  }

  useEffect(() => {
    loadReviews();
  }, []);

  async function addReview(event: React.FormEvent) {
    event.preventDefault();

    if (!name.trim() || !text.trim()) {
      alert("Заполните имя и отзыв");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("reviews").insert({
      name,
      text,
      rating: 5,
    });

    setLoading(false);

    if (error) {
      alert("Ошибка отправки: " + error.message);
      return;
    }

    setName("");
    setText("");
    loadReviews();
  }

  return (
    <section className="bg-black px-5 py-24">
      <h2 className="text-center text-5xl font-bold text-white">
        Отзывы клиентов
      </h2>

      <div className="mx-auto mt-10 max-w-2xl rounded-[40px] bg-[#181818] p-8">
        <form onSubmit={addReview}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-3xl border border-[#383838] bg-[#2a2a2a] px-6 py-5 text-white placeholder:text-neutral-400 outline-none focus:border-[#14532d]"
            placeholder="Ваше имя"
          />

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-5 w-full rounded-3xl border border-[#383838] bg-[#2a2a2a] px-6 py-5 text-white placeholder:text-neutral-400 outline-none focus:border-[#14532d]"
            rows={5}
            placeholder="Ваш отзыв"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-full bg-[#0b4d2f] py-5 text-lg font-semibold text-white transition hover:bg-[#13663f] disabled:opacity-60"
          >
            {loading ? "Отправляем..." : "Отправить отзыв"}
          </button>
        </form>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-5">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-[32px] border border-[#252525] bg-[#181818] p-8 shadow-xl"
          >
            <div className="text-[#d4af37]">★★★★★</div>

            <h3 className="mt-3 text-xl font-semibold text-white">
              {review.name}
            </h3>

            <p className="mt-3 text-neutral-300">
              {review.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}