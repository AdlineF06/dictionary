import {useState,useEffect} from 'react'
export default function useLS(key,init){
  const [v,setV]=useState(()=>{try{return JSON.parse(localStorage.getItem(key))??init}catch{return init}})
  useEffect(()=>{localStorage.setItem(key,JSON.stringify(v))},[key,v])
  return [v,setV]
}
