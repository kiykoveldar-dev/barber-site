"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Review = {
  id: number;
  name: string;
  text: string;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  async function loadReviews() {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (data) {
      setReviews(data);
    }
  }

  useEffect(() => {
    loadReviews();
  }, []);

  async function addReview(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!name || !text) return;

    const { error } = await supabase
      .from("reviews")
      .insert({
        name,
        text,
        rating: 5,
      });

    if (error) {
      alert(error.message);
      return;
    }

    setName("");
    setText("");

    loadReviews();
  }

  return (
    <section className="
bg-transparent px-5 py-20">

      <div className="mx-auto max-w-6xl">

        <h2 className="mb-10 text-center text-4xl font-bold text-white">
          Отзывы клиентов
        </h2>

        <form
          onSubmit={addReview}
          className="mx-auto max-w-xl rounded-3xl bg-white p-6"
        >

          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Имя"
            className="
            mb-4
            w-full
            rounded-2xl
            border
            p-4
            text-black
            "
          />

          <textarea
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
            placeholder="Ваш отзыв"
            className="
            w-full
            rounded-2xl
            border
            p-4
            text-black
            "
          />

          <button
            className="
            mt-5
            w-full
            rounded-full
            bg-[#123624]
            py-4
            text-white
            "
          >
            Отправить отзыв
          </button>

        </form>

        <div className="mt-10 grid gap-5">

          {reviews.map((review) => (

            <article
              key={review.id}
              className="
              rounded-3xl
              bg-white
              p-6
              text-black
              shadow
              "
            >

              <div className="text-[#d4af37]">
                ★★★★★
              </div>

              <h3
                className="
                mt-2
                text-xl
                font-semibold
                "
              >
                {review.name}
              </h3>

              <p
                className="
                mt-2
                text-neutral-700
                "
              >
                {review.text}
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}