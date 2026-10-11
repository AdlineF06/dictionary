import {useState} from 'react';import useLS from '../useLS'
export default function Contacts(){const [l,setL]=useLS('contacts',[]);const [n,setN]=useState(''),[p,setP]=useState(''),[q,setQ]=useState('')
const add=()=>{if(n&&p){setL([...l,{id:Date.now(),n,p}]);setN('');setP('')}}
return <div className="card"><h2>Contact Book</h2><input placeholder="Search" value={q} onChange={e=>setQ(e.target.value)}/><input placeholder="Name" value={n} onChange={e=>setN(e.target.value)}/><input placeholder="Phone" value={p} onChange={e=>setP(e.target.value)}/><button onClick={add}>Add</button>
{l.filter(o=>o.n.toLowerCase().includes(q.toLowerCase())).map(o=><div className="row" key={o.id}><span>{o.n} — {o.p}</span><button className="red" onClick={()=>setL(l.filter(x=>x.id!==o.id))}>Delete</button></div>)}</div>}
