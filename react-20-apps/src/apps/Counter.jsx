import {useState} from 'react'
export default function Counter(){const [c,setC]=useState(0)
return <div className="card" style={{textAlign:'center'}}><h2>Counter</h2><h1>{c}</h1><button onClick={()=>setC(c-1)}>-</button><button onClick={()=>setC(0)}>Reset</button><button onClick={()=>setC(c+1)}>+</button></div>}
