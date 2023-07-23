'use client'
import axios from "axios"
import {useEffect} from 'react'
import { useSearchParams } from "next/navigation"
import Button from "@/components/ui/Button"
import Currency from "@/components/ui/Currency"
import useCart from "@/hooks/use-cart"
import { toast } from "react-hot-toast"

const Summary = ()=>{
    const items=useCart((state)=>state.items);
    const removeAll =useCart((state)=>state.removeAll)
    const searchParams =useSearchParams()
    const totalPrice =items.reduce((total, item)=>{
        return total+Number(item.price)
    }, 0)
    const onCheckout = async()=>{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
            productIds: items.map((item)=>item.id),
        });
        window.location = await response.data.url;
    }
    useEffect(() => {
        if(searchParams.get('success')){
            toast.success('Payment completed')
            removeAll()
        }
        if(searchParams.get('canceled')){
            toast.error('Payment canceled')
        }

    }, [searchParams,removeAll])
    
return (
    
    <div className="
    mt-16
    rounded-lg
    bg-gray-50
    px-4 
    py-6
    sm:p-6
    lg:col-span-5
    lg:mt-0
    lg:p-8
    ">
        <h2 className="font-bold text-lg text-gray-950">
            Order Summary
        </h2>
        <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <div className="text-base font-medium text-gray-900">
                                Order Price
                        </div>
                        <Currency value={totalPrice} />
                </div>
        </div>
        <Button disabled={items.length===0} onClick={onCheckout} className="w-full mt-8 transition-none hover:-translate-x-0 hover:scale-100">
            Checkout
        </Button>
    </div>
)
}
export default Summary