import {useState} from 'react'
export default function Dict(){
  const [w,setW]=useState(''),[r,setR]=useState(null),[err,setE]=useState(''),[load,setL]=useState(false)
  const go=async()=>{
    const word=w.trim().toLowerCase()
    if(!word)return
    setE('');setR(null);setL(true)
    try{
      const x=await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(word))
      if(x.status===404){setE('Word not found');return}
      if(!x.ok)throw new Error('API error '+x.status)
      setR({word,meanings:(await x.json())[0].meanings.map(m=>({p:m.partOfSpeech,d:m.definitions[0].definition}))})
    }catch(e1){
      try{
        const y=await (await fetch('https://api.datamuse.com/words?md=d&max=1&sp='+encodeURIComponent(word))).json()
        if(!y.length||!y[0].defs){setE('Word not found');return}
        setR({word:y[0].word,meanings:y[0].defs.slice(0,3).map(s=>{const [p,...d]=s.split('\t');return{p,d:d.join(' ')}})})
      }catch{setE('Network problem: check your internet connection')}
    }finally{setL(false)}
  }
  return <div className="card"><h2>Dictionary</h2>
    <input value={w} onChange={e=>setW(e.target.value)} onKeyDown={e=>e.key==='Enter'&&go()} placeholder="Enter a word"/>
    <button onClick={go}>Search</button>
    {load&&<p>Searching...</p>}
    {err&&<p className="err">{err}</p>}
    {r&&<div><h3>{r.word}</h3>{r.meanings.map((m,i)=><div key={i}><i>{m.p}</i><p>{m.d}</p></div>)}</div>}
  </div>
}
