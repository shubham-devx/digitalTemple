
import { useState } from "react";

export default function NariyalOffer() {

const [cracked,setCracked] = useState(false)

const breakCoconut = ()=>{
setCracked(true)

setTimeout(()=>{
setCracked(false)
},4000)
}

return(

<div style={{marginTop:"20px",textAlign:"center"}}>

<h3>🥥 Offer Coconut</h3>

<div className="coconut-area" onClick={breakCoconut}>

{!cracked && (
<div className="coconut">🥥</div>
)}

{cracked && (
<div className="coconut-crack">
<span>🥥</span>
<span>🥥</span>
</div>
)}

</div>

<style>{`

.coconut-area{
cursor:pointer;
margin-top:10px;
}

.coconut{
font-size:60px;
transition:transform 0.3s;
}

.coconut:hover{
transform:scale(1.2);
}

.coconut-crack{
display:flex;
justify-content:center;
gap:20px;
font-size:50px;
animation:split 1s ease-out;
}

@keyframes split{
0%{
transform:scale(0.5);
opacity:0;
}
100%{
transform:scale(1);
opacity:1;
}
}

`}</style>

</div>

)

}
