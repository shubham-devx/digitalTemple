import { useEffect, useState } from "react";

export default function GitaQuote(){

const quotes = [

"Do your duty without attachment to results. – Bhagavad Gita 2.47",

"The soul is neither born nor does it die. – Bhagavad Gita 2.20",

"When meditation is mastered, the mind is unwavering like a flame in a windless place. – Bhagavad Gita 6.19",

"A person can rise through the efforts of their own mind. – Bhagavad Gita 6.5",

"Set thy heart upon thy work, but never on its reward. – Bhagavad Gita 2.47",

]

const [quote,setQuote] = useState("")

useEffect(()=>{

const random = quotes[Math.floor(Math.random()*quotes.length)]

setQuote(random)

},[])

return(

<div className="gita-quote">

<h3>📜 Daily Wisdom</h3>

<p>{quote}</p>

</div>

)

}