'use client'

import Button from "@/components/ui/Button"
import useCart from "@/hooks/use-cart"
import { ShoppingCart} from "lucide-react"
import { useRouter } from "next/navigation"
import {useState, useEffect} from 'react'
const NavbarActions = () => {
    // cart items will be stored in local storage so it can cause hydration errors so i am using isMounted setIsMounted use state
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
    
    }, [])
    const router = useRouter()
    const cart =useCart()
    if(!isMounted){
        return null;
    }
    
    return (
        <div className="ml-auto flex items-center gap-x-4">
           <Button onClick={()=> router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
            <ShoppingCart strokeWidth={1.5} color='white' />
            <span className="ml-2 text-sm font-medium text-white"> 
            {cart.items.length}
            
             </span>
           </Button>
        </div>
    )
}

export default NavbarActions