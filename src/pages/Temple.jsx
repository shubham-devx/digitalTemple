// import { useParams, useNavigate } from "react-router-dom";

// import Diya from "../components/Diya";
// import Bell from "../components/Bell";
// import FlowerOffer from "../components/FlowerOffer";
// import VirtualAarti from "../components/VirtualAarti";
// import AartiPlayer from "../components/AartiPlayer";
// import deityData from "../data/deityData";

// export default function Temple(){

// const { name } = useParams();
// const navigate = useNavigate();

// const deity = deityData.find(d => d.name === name);

// if(!deity){
// return <h2>Deity not found</h2>
// }

// return(

// <div className="temple">

// <button className="back-btn" onClick={()=>navigate("/")}>
// ⬅ Back
// </button>

// <h1>{deity.name} Temple</h1>

// <div className="temple-stage">

// {/* Deity Image */}

// <div className="image-wrapper">

// <img
// src={deity.image}
// alt={deity.name}
// className="deity"
// />

// {/* Virtual Aarti ON image */}

// <VirtualAarti/>

// </div>

// {/* Controls around image */}

// <div className="pos-bell">
// <Bell/>
// </div>

// <div className="pos-diya">
// <Diya/>
// </div>

// <div className="pos-flower">
// <FlowerOffer/>
// </div>

// <div className="pos-player">
// <AartiPlayer deity={deity.name.toLowerCase()} />
// </div>

// </div>

// </div>

// )

// }

import { useParams, useNavigate } from "react-router-dom";

import Diya from "../components/Diya";
import Bell from "../components/Bell";
import FlowerOffer from "../components/FlowerOffer";
import VirtualAarti from "../components/VirtualAarti";
import AartiPlayer from "../components/AartiPlayer";
import deityData from "../data/deityData";
import NariyalOffer from "../components/NariyalOffer";
export default function Temple(){

const { name } = useParams();
const navigate = useNavigate();

const deity = deityData.find(d => d.name === name);

if(!deity){
return <h2>Deity not found</h2>
}

return(

<div className="temple">

<button className="back-btn" onClick={()=>navigate("/")}>
⬅ Back
</button>

<h1>{deity.name} Temple</h1>

<div className="temple-stage">

{/* IMAGE + VIRTUAL AARTI */}

<div className="image-wrapper">

<img
src={deity.image}
alt={deity.name}
className="deity"
/>

<VirtualAarti/>

</div>

{/* CONTROLS AROUND IMAGE */}

<div className="pos-bell">
<Bell/>
</div>
<div className="pos-nariyal">
<NariyalOffer/>
</div>
<div className="pos-diya">
<Diya/>
</div>

<div className="pos-flower">
<FlowerOffer/>
</div>

<div className="pos-player">
<AartiPlayer deity={deity.name.toLowerCase()} />
</div>

</div>

</div>

)
}