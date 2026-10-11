import {useState} from 'react'
export default function Form(){const [f,setF]=useState({name:'',email:'',pw:''}),[e,setE]=useState({}),[ok,setOk]=useState(false)
const submit=()=>{const x={};if(f.name.trim().length<3)x.name='Name needs 3+ characters';if(!/^\S+@\S+\.\S+$/.test(f.email))x.email='Invalid email';if(!/^(?=.*\d).{6,}$/.test(f.pw))x.pw='Min 6 chars with a number';setE(x);setOk(!Object.keys(x).length)}
const set=k=>v=>setF({...f,[k]:v.target.value})
return <div className="card"><h2>Form Validation</h2><input placeholder="Name" value={f.name} onChange={set('name')}/><div className="err">{e.name}</div><input placeholder="Email" value={f.email} onChange={set('email')}/><div className="err">{e.email}</div><input type="password" placeholder="Password" value={f.pw} onChange={set('pw')}/><div className="err">{e.pw}</div><button onClick={submit}>Submit</button>{ok&&<p style={{color:'green'}}>Form submitted successfully!</p>}</div>}
