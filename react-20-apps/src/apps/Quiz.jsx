import {useState} from 'react'
const Q=[['Capital of France?',['Paris','Rome','Madrid'],0],['2 + 2 * 3 = ?',['10','8','12'],1],['Which is a JS library?',['Django','React','Laravel'],1],['Largest planet?',['Earth','Mars','Jupiter'],2]]
export default function Quiz(){const [i,setI]=useState(0),[sc,setSc]=useState(0)
if(i>=Q.length)return <div className="card"><h2>Score: {sc}/{Q.length}</h2><button onClick={()=>{setI(0);setSc(0)}}>Restart</button></div>
const [q,o,a]=Q[i];return <div className="card"><h2>Quiz ({i+1}/{Q.length})</h2><p>{q}</p>{o.map((t,k)=><button key={k} style={{display:'block',width:'100%'}} onClick={()=>{if(k===a)setSc(sc+1);setI(i+1)}}>{t}</button>)}</div>}
