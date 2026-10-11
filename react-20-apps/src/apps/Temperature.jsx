import {useState} from 'react'
export default function Temp(){const [c,setC]=useState('');const v=parseFloat(c),ok=!isNaN(v)
return <div className="card"><h2>Temperature Conversion</h2><input type="number" placeholder="Celsius" value={c} onChange={e=>setC(e.target.value)}/>{ok&&<p>{(v*9/5+32).toFixed(2)} °F<br/>{(v+273.15).toFixed(2)} K</p>}</div>}
