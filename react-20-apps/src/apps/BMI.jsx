import {useState} from 'react'
export default function BMI(){const [w,setW]=useState(''),[h,setH]=useState('');const b=w&&h?w/((h/100)**2):null
const cat=b<18.5?'Underweight':b<25?'Normal':b<30?'Overweight':'Obese'
return <div className="card"><h2>BMI Calculator</h2><input type="number" placeholder="Weight (kg)" value={w} onChange={e=>setW(e.target.value)}/><input type="number" placeholder="Height (cm)" value={h} onChange={e=>setH(e.target.value)}/>{b&&<h3>BMI {b.toFixed(1)} — {cat}</h3>}</div>}
