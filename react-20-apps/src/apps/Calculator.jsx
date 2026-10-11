import {useState} from 'react'
export default function Calc(){const [s,setS]=useState('')
const eq=()=>{try{setS(String(Function('"use strict";return ('+s+')')()))}catch{setS('Error')}}
return <div className="card"><h2>Calculator</h2><input readOnly value={s} style={{textAlign:'right',fontSize:24}}/><div className="grid">
{['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map(k=><button key={k} onClick={()=>k==='='?eq():setS(s==='Error'?k:s+k)}>{k}</button>)}</div><button className="red" onClick={()=>setS('')}>Clear</button></div>}
