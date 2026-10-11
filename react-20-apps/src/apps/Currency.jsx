import {useState,useEffect} from 'react'
const C=['USD','INR','EUR','GBP','JPY','AUD','CAD']
export default function Currency(){const [a,setA]=useState(1),[f,setF]=useState('USD'),[t,setT]=useState('INR'),[r,setR]=useState(null),[err,setE]=useState('')
useEffect(()=>{setE('');if(f===t){setR(a);return}fetch(`https://api.frankfurter.app/latest?amount=${a||0}&from=${f}&to=${t}`).then(x=>x.json()).then(d=>setR(d.rates[t])).catch(()=>setE('Rate fetch failed'))},[a,f,t])
return <div className="card"><h2>Currency Converter</h2><input type="number" value={a} onChange={e=>setA(e.target.value)}/><select value={f} onChange={e=>setF(e.target.value)}>{C.map(c=><option key={c}>{c}</option>)}</select><select value={t} onChange={e=>setT(e.target.value)}>{C.map(c=><option key={c}>{c}</option>)}</select>{err?<p className="err">{err}</p>:<h3>{r} {t}</h3>}</div>}
