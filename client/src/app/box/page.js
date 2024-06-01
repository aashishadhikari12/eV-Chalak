'use client'
import { changeBackgorundCOlor, changeHeight, changeShape, changeWidth } from '@/redux/reducerSlices/boxSlice'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const {height, width, backgroundColor, borderRadius} = useSelector(state=>state.box)
    const dispatch= useDispatch()
    const generateArea = () => {
      if ((borderRadius==='50%')){
      return Math.PI * (width/2) ** 2
      }else{
        return width*height;
      }
    }
  return (
    <div className='flex items-center flex-col p-20'>
      <div style={{backgroundColor: backgroundColor, height: height, width:width, borderRadius:borderRadius }}>
        hi
      </div>
      {generateArea()}
     <Button onClick={()=>dispatch(changeWidth())}>+Width</Button>
     <Button onClick={()=>dispatch(changeHeight())}>+Height</Button>
     <Button onClick={()=>dispatch(changeShape())}>Change shape</Button>
<Input onChange={(e)=>dispatch(changeBackgorundCOlor(e.target.value))} placeholder='Enter color'/>
 {/* e.target.value hamile type gareko value ho tesaile function vitra argument send gareko */}
    </div>
  )
}

export default Box