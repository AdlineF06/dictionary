import {useState,useEffect} from 'react'
export default function News(){const [a,setA]=useState([]),[err,setE]=useState('')
useEffect(()=>{(async()=>{try{const ids=await (await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')).json()
setA(await Promise.all(ids.slice(0,10).map(i=>fetch(`https://hacker-news.firebaseio.com/v0/item/${i}.json`).then(r=>r.json()))))}catch{setE('Could not load news')}})()},[])
return <div className="card"><h2>News (Hacker News)</h2>{err&&<p className="err">{err}</p>}{!a.length&&!err&&<p>Loading...</p>}{a.map(x=><div className="row" key={x.id}><a href={x.url||`https://news.ycombinator.com/item?id=${x.id}`} target="_blank" rel="noreferrer">{x.title}</a></div>)}</div>}
