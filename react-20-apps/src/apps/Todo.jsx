import {useState} from 'react';import useLS from '../useLS'
export default function Todo(){const [t,setT]=useLS('todos',[]);const [x,setX]=useState('')
const add=()=>{if(x.trim()){setT([...t,{id:Date.now(),text:x,done:false}]);setX('')}}
return <div className="card"><h2>To-Do List</h2><input value={x} onChange={e=>setX(e.target.value)} onKeyDown={e=>e.key==='Enter'&&add()} placeholder="New task"/><button onClick={add}>Add</button>
{t.map(i=><div className="row" key={i.id}><span onClick={()=>setT(t.map(o=>o.id===i.id?{...o,done:!o.done}:o))} style={{cursor:'pointer',textDecoration:i.done?'line-through':'none'}}>{i.text}</span><button className="red" onClick={()=>setT(t.filter(o=>o.id!==i.id))}>Delete</button></div>)}</div>}
