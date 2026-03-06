import { Link } from "react-router-dom";
import GitaQuote from "../components/GitaQuote";
import PrayerWall from "../components/PrayerWall";
import deityData from "../data/deityData";

export default function Home() {

return(

<div className="home">

<h1 className="temple-title">🛕 Digital Temple</h1>

<p className="subtitle">Choose your deity and begin your prayer 🙏</p>

{/* Daily Quote */}

<div className="glass-card">
<GitaQuote/>
</div>

{/* Prayer Wall */}

<div className="glass-card">
<PrayerWall/>
</div>

{/* Deity Cards */}

<div className="grid">

{deityData.map((d)=>(
<Link 
to={`/temple/${d.name}`} 
key={d.name} 
className="link-card"
>

<div className="card">

<img src={d.image} alt={d.name}/>

<h2>{d.name}</h2>

</div>

</Link>
))}

</div>

<style>{`

.home{
padding:20px;
text-align:center;
}

.subtitle{
margin-top:10px;
color:#f0d98c;
}

/* glass card */

.glass-card{
background:rgba(255,255,255,0.05);
backdrop-filter:blur(10px);
border:1px solid rgba(255,215,0,0.2);
border-radius:12px;
padding:20px;
margin:20px auto;
max-width:600px;
box-shadow:0 0 20px rgba(255,215,0,0.2);
}

/* title */

.temple-title{
font-size:40px;
margin-top:30px;
color:#FFD700;
text-shadow:0 0 10px gold,0 0 20px orange;
animation:glowTitle 2s infinite alternate;
}

@keyframes glowTitle{
0%{text-shadow:0 0 5px gold}
100%{text-shadow:0 0 25px orange}
}

/* grid */

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;
padding:40px;
}

/* link */

.link-card{
text-decoration:none;
color:inherit;
}

/* card */

.card{
background:#111;
padding:20px;
border-radius:12px;
transition:0.3s;
cursor:pointer;
box-shadow:0 0 10px #000;
}

.card:hover{
transform:scale(1.05);
box-shadow:0 0 20px gold;
}

/* image */

.card img{
width:100%;
border-radius:10px;
height:220px;
object-fit:cover;
}

.card h2{
margin-top:10px;
color:#FFD700;
}

`}</style>

</div>

)

}