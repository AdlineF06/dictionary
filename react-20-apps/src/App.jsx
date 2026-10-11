import {useState} from 'react'
import Todo from './apps/Todo';import Calc from './apps/Calculator';import Quiz from './apps/Quiz';import Notes from './apps/Notes'
import Temp from './apps/Temperature';import Expense from './apps/Expense';import Contacts from './apps/Contacts';import BMI from './apps/BMI'
import News from './apps/News';import Dict from './apps/Dictionary';import Currency from './apps/Currency';import Recipe from './apps/Recipe'
import Books from './apps/Books';import Form from './apps/FormValidation';import Theme from './apps/Theme';import Counter from './apps/Counter'
import Age from './apps/Age';import Cal from './apps/Calendar';import Discount from './apps/Discount';import Bill from './apps/Bill'
const apps=[['To-Do List',Todo],['Calculator',Calc],['Quiz App',Quiz],['Notes App',Notes],['Temperature Conversion',Temp],['Expense Tracker',Expense],['Contact Book',Contacts],['BMI Calculator',BMI],['News App',News],['Dictionary App',Dict],['Currency Converter',Currency],['Recipe Finder',Recipe],['Book Finder',Books],['Form Validation',Form],['Dark/Light Theme',Theme],['Counter App',Counter],['Age from Birth Year',Age],['Calendar Picker',Cal],['Discount Calculator',Discount],['Shopping Bill Calculator',Bill]]
export default function App(){
  const [i,setI]=useState(0);const C=apps[i][1]
  return <div className="layout"><nav className="side">{apps.map(([n],k)=><button key={k} className={k===i?'on':''} onClick={()=>setI(k)}>{k+1}. {n}</button>)}</nav><main className="main"><C key={i}/></main></div>
}
