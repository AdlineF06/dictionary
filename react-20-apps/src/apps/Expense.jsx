import {useState} from 'react';import useLS from '../useLS'
export default function Expense(){const [l,setL]=useLS('expenses',[]);const [t,setT]=useState(''),[a,setA]=useState('')
const add=()=>{if(t&&+a>0){setL([...l,{id:Date.now(),t,a:+a}]);setT('');setA('')}}
return <div className="card"><h2>Expense Tracker</h2><input placeholder="Title" value={t} onChange={e=>setT(e.target.value)}/><input type="number" placeholder="Amount" value={a} onChange={e=>setA(e.target.value)}/><button onClick={add}>Add</button>
{l.map(o=><div className="row" key={o.id}><span>{o.t}: ₹{o.a}</span><button className="red" onClick={()=>setL(l.filter(x=>x.id!==o.id))}>X</button></div>)}<h3>Total: ₹{l.reduce((s,o)=>s+o.a,0)}</h3></div>}
