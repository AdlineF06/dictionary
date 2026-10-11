import {useState} from 'react'
export default function Books(){const [q,setQ]=useState(''),[b,setB]=useState([]),[msg,setMsg]=useState('')
const go=async()=>{setMsg('');try{const d=await (await fetch('https://openlibrary.org/search.json?limit=10&q='+encodeURIComponent(q))).json();setB(d.docs);if(!d.docs.length)setMsg('No books found')}catch{setMsg('Search failed')}}
return <div className="card"><h2>Book Finder</h2><input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==='Enter'&&go()} placeholder="Title or author"/><button onClick={go}>Search</button>{msg&&<p className="err">{msg}</p>}
{b.map(x=><div className="row" key={x.key}><span><b>{x.title}</b><br/><small>{(x.author_name||[]).join(', ')} {x.first_publish_year&&`(${x.first_publish_year})`}</small></span></div>)}</div>}
