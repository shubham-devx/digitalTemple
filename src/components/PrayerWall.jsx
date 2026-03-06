import { useState } from "react";

export default function PrayerWall(){

const [message,setMessage] = useState("");
const [prayers,setPrayers] = useState([]);

const submitPrayer = () => {

if(message.trim() === "") return;

setPrayers([...prayers,message]);
setMessage("");

};

const clearPrayers = () => {
setPrayers([]);
};

return(

<div className="prayer-wall">

<h3>🙏 Prayer Wall</h3>

<div style={{marginBottom:"15px"}}>

<input
type="text"
placeholder="Write your prayer..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button onClick={submitPrayer}>
Submit
</button>

<button
onClick={clearPrayers}
style={{marginLeft:"10px"}}
>
Clear
</button>

</div>

<div className="prayer-list">

{prayers.map((p,i)=>(
<p key={i}>🙏 {p}</p>
))}

</div>

</div>

)

}