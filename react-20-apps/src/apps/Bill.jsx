import {useState} from 'react'
export default function Bill(){const [l,setL]=useState([]),[n,setN]=useState(''),[p,setP]=useState(''),[q,setQ]=useState(1)
const add=()=>{if(n&&+p>0&&+q>0){setL([...l,{n,p:+p,q:+q}]);setN('');setP('');setQ(1)}}
const sub=l.reduce((s,o)=>s+o.p*o.q,0)
return <div className="card"><h2>Shopping Bill</h2><input placeholder="Item" value={n} onChange={e=>setN(e.target.value)}/><input type="number" placeholder="Price" value={p} onChange={e=>setP(e.target.value)}/><input type="number" placeholder="Qty" value={q} onChange={e=>setQ(e.target.value)}/><button onClick={add}>Add Item</button>
{l.map((o,i)=><div className="row" key={i}><span>{o.n} × {o.q}</span><span>₹{o.p*o.q}</span></div>)}<p>Subtotal: ₹{sub.toFixed(2)}<br/>GST 18%: ₹{(sub*.18).toFixed(2)}</p><h3>Total: ₹{(sub*1.18).toFixed(2)}</h3></div>}
