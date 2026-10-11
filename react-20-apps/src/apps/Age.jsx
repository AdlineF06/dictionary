import {useState} from 'react'
export default function Age(){const [y,setY]=useState('');const now=new Date().getFullYear();const ok=y>1900&&y<=now
return <div className="card"><h2>Calculate Age</h2><input type="number" placeholder="Birth year" value={y} onChange={e=>setY(e.target.value)}/>{ok?<h3>You are about {now-y} years old</h3>:y&&<p className="err">Enter a valid year</p>}</div>}
