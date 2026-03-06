import { useState } from "react";

export default function VirtualAarti(){

const [start,setStart] = useState(false)

return(

<div>

<button onClick={()=>setStart(true)}>🪔 Start Aarti</button>

<button
onClick={()=>setStart(false)}
style={{marginLeft:"10px"}}
>
Stop
</button>

{start && <div className="aarti-diya">🪔</div>}

<style>{`

.aarti-diya{
position:absolute;
top:50%;
left:50%;
font-size:40px;
animation:circleAarti 4s linear infinite;
}

@keyframes circleAarti{

0%{
transform:rotate(0deg) translateX(130px) rotate(0deg);
}

100%{
transform:rotate(360deg) translateX(130px) rotate(-360deg);
}

}

`}</style>

</div>

)

}