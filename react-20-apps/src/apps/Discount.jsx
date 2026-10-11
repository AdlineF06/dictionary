import {useState} from 'react'
export default function Discount(){const [p,setP]=useState(''),[d,setD]=useState('');const s=p*d/100
return <div className="card"><h2>Discount Calculator</h2><input type="number" placeholder="Price" value={p} onChange={e=>setP(e.target.value)}/><input type="number" placeholder="Discount %" value={d} onChange={e=>setD(e.target.value)}/>{p&&d&&<h3>You save ₹{s.toFixed(2)}<br/>Final price ₹{(p-s).toFixed(2)}</h3>}</div>}
