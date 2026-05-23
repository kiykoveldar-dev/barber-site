"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { content } from "@/data/content";

export default function Gallery() {

const [active,setActive]=
useState<string|null>(null)

return(

<section className="px-5 py-20 bg-transparent">

<div className="max-w-6xl mx-auto">

<h2
className="
text-center
text-3xl
font-bold
"
>

Работы

</h2>

<div
className="
mt-10

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-5
"
>

{
content.gallery.map(
(
img,
i
)=>(

<button

key={i}

onClick={()=>
setActive(
img
)
}

className="
overflow-hidden

rounded-3xl

shadow
"

>

<Image

src={img}

alt="Работа"

width={800}

height={1000}

loading="lazy"

className="
h-[420px]

w-full

object-cover

hover:scale-105

transition
"

/>

</button>

)

)

}

</div>

</div>

{
active&&(

<div

onClick={()=>
setActive(
null
)
}

className="
fixed

inset-0

bg-black/80

z-50

flex

items-center

justify-center
"

>

<button
className="
absolute

top-5

right-5

bg-white

rounded-full

p-3
"
>

<X/>

</button>

<Image

src={active}

alt="Фото"

width={1200}

height={1400}

className="
max-h-[90vh]

rounded-3xl
"

/>

</div>

)

}

</section>

)

}