import useLS from '../useLS'
export default function Theme(){const [d,setD]=useLS('dark',false)
return <div className={'card'+(d?' dark':'')}><h2>Dark/Light Theme</h2><p>Current theme: {d?'Dark':'Light'}</p><button onClick={()=>setD(!d)}>Switch to {d?'Light':'Dark'}</button></div>}
