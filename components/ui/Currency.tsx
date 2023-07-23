'use client'
import {useState, useEffect} from 'react'
const formatter = new Intl.NumberFormat("en-US",{
    style:'currency',
    currency:'USD'
  });

interface CurrencyProps {
 value?: number | string
}

const Currency:React.FC<CurrencyProps> = (
    value,
) => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
      setIsMounted(true)
    }, [])
    if(!isMounted){
        return null;
    }
  return (
    <div className='font-semibold'>
        {formatter.format(Number(value?.value))}
    </div>
  )
}

export default Currency