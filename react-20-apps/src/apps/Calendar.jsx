import {useState} from 'react'
export default function Cal(){const [d,setD]=useState('');const dt=d&&new Date(d+'T00:00')
return <div className="card"><h2>Calendar Picker</h2><input type="date" value={d} onChange={e=>setD(e.target.value)}/>{dt&&<h3>{dt.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</h3>}</div>}
