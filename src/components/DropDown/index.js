import { useState ,useEffect} from 'react'
import {CITY_DATA} from '../../const/index'
import {useAppContext}from '../../context/weatherContext'
function DropDown() {
  const {dispatch}=useAppContext()
  // useEffect(()=>{
  //   dispatch({type:"onChange",payload:"adana"})
  // },[])

  return (
    <div className='mt-3   container'>
      <span>Şehir Seçiniz: </span>
      <select onChange={(event)=> dispatch({type:"onChange",payload:event.target.value})}>
      {CITY_DATA.map((item,index)=>{
      return(
        <option key={index} value={item.value}>{item.title}</option>
      )
    })}</select>
    </div>
  )
}
export default DropDown