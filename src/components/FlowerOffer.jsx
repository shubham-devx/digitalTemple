

import { useState } from "react";

export default function FlowerOffer() {

const [show,setShow] = useState(false)

const offerFlowers = () =>{
setShow(true)

setTimeout(()=>{
setShow(false)
},6000)
}

return(

<div style={{marginTop:"20px"}}>

<button onClick={offerFlowers}>
🌸 Offer Flowers
</button>

{show && (
<div className="flower-container">

{Array.from({length:80}).map((_,i)=>(
<span
key={i}
style={{
left: Math.random()*100 + "%",
animationDuration: (3 + Math.random()*3) + "s",
fontSize: (18 + Math.random()*12) + "px"
}}
>
🌸
</span>
))}

</div>
)}

<style>{`

.flower-container{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
pointer-events:none;
z-index:100;
}

.flower-container span{
position:absolute;
top:-10%;
animation:fall linear infinite;
}

@keyframes fall{

0%{
transform:translateY(-10vh) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}

}

`}</style>

</div>

)

}

