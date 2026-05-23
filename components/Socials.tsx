import {
Camera,
MessageCircle,
Send,
Phone
} from "lucide-react";

import { content } from "@/data/content";

export default function Socials() {

const links=[

{
title:"Instagram",
href:content.links.instagram,
icon:Camera
},

{
title:"Telegram",
href:content.links.telegram,
icon:Send
},

{
title:"WhatsApp",
href:content.links.whatsapp,
icon:MessageCircle
},

{
title:"Позвонить",
href:`tel:${content.phone}`,
icon:Phone
}

]

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

Мои соцсети

</h2>

<div
className="
mt-10

grid

grid-cols-2

md:grid-cols-4

gap-5
"
>

{
links.map(
(
item
)=>{

const Icon=
item.icon

return(

<a

key={
item.title
}

href={
item.href
}

target="_blank"

className="
bg-white

text-black

rounded-3xl

p-8

shadow

hover:-translate-y-1

transition

text-center
"

>

<div
className="
flex

justify-center
"
>

<Icon
size={28}
/>

</div>

<p
className="
mt-4
"
>

{
item.title
}

</p>

</a>

)

}
)

}

</div>

</div>

</section>

)

}