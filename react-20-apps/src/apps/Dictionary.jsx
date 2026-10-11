import {useState} from 'react'
export default function Dict(){const [w,setW]=useState(''),[r,setR]=useState(null),[err,setE]=useState('')
const go=async()=>{setE('');setR(null);try{const x=await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+w.trim());if(!x.ok)throw 0;setR((await x.json())[0])}catch{setE('Word not found')}}
return <div className="card"><h2>Dictionary</h2><input value={w} onChange={e=>setW(e.target.value)} onKeyDown={e=>e.key==='Enter'&&go()} placeholder="Enter a word"/><button onClick={go}>Search</button>{err&&<p className="err">{err}</p>}
{r&&<div><h3>{r.word} <small>{r.phonetic}</small></h3>{r.meanings.map((m,i)=><div key={i}><i>{m.partOfSpeech}</i><p>{m.definitions[0].definition}</p></div>)}</div>}</div>}
