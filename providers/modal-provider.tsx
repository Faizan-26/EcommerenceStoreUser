'use client'

import PreviewModel from '@/components/preview-model'
import { useState , useEffect} from 'react'
const ModalProvider = () => {
    const [isMounted,setIsMounted]= useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if(!isMounted){
        return null
    }
  return (
    <>
    <PreviewModel /> 
    </>
  )
}

export default ModalProvider