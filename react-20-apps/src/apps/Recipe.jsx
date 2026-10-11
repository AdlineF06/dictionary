import {useState} from 'react'
export default function Recipe(){const [q,setQ]=useState(''),[m,setM]=useState([]),[msg,setMsg]=useState('')
const go=async()=>{setMsg('');try{const d=await (await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+q)).json();setM(d.meals||[]);if(!d.meals)setMsg('No recipes found')}catch{setMsg('Search failed')}}
return <div className="card"><h2>Recipe Finder</h2><input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==='Enter'&&go()} placeholder="e.g. chicken"/><button onClick={go}>Search</button>{msg&&<p className="err">{msg}</p>}
{m.slice(0,6).map(x=><div className="row" key={x.idMeal}><img src={x.strMealThumb} width="60" style={{borderRadius:8}}/><span style={{flex:1}}>{x.strMeal}<br/><small>{x.strCategory} · {x.strArea}</small></span>{x.strSource&&<a href={x.strSource} target="_blank" rel="noreferrer">View</a>}</div>)}</div>}
