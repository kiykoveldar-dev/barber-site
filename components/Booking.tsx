"use client";

import { useState } from "react";

import {
Send,
MessageCircle,
Camera,
Phone
} from "lucide-react";

import { content } from "@/data/content";

export default function Booking() {

const [open,setOpen]=useState(false)

const options=[

{
label:"Написать в Telegram",
href:content.links.telegram,
icon:Send
},

{
label:"Написать в WhatsApp",
href:content.links.whatsapp,
icon:MessageCircle
},

{
label:"Instagram Direct",
href:content.links.instagram,
icon:Camera
},

{
label:"Позвонить",
href:`tel:${content.phone}`,
icon:Phone
}

]

return(

<section className="px-5 pb-20">

<div className="max-w-md mx-auto">

<button

onClick={()=>
setOpen(!open)
}

className="
w-full

rounded-full

bg-[#123624]

text-white

text-xl

font-semibold

py-5

shadow-xl

transition

hover:scale-[1.04]
"

>

Записаться

</button>

{
open&&(

<div
className="
mt-5

space-y-3
"
>

{
options.map(
(
item
)=>{

const Icon=item.icon

return(

<a

key={
item.label
}

href={
item.href
}

target="_blank"

className="
flex

items-center

gap-3

bg-white

rounded-3xl

p-5

shadow-md

hover:shadow-xl

transition
"

>

<Icon/>

<span>

{
item.label
}

</span>

</a>

)

}
)

}

</div>

)

}

</div>

</section>

)

}