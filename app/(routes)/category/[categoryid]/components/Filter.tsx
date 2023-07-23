'use client'

import { Color, Size } from "@/types"

import qs from 'query-string'
import { useRouter, useSearchParams } from "next/navigation"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils"

interface FilterProps {
    data: (Size | Color)[]
    name:string
    valueKey:string
}

const Filter:React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {
    const searchParams=useSearchParams();
    const router= useRouter();
    const selectedValue = searchParams.get(valueKey);
    const onClick = (id:string)=>{
        const currentQuery = qs.parse(searchParams.toString())
        const query ={
            ...currentQuery,
            [valueKey]:id
        }
        if(currentQuery[valueKey] === id){
            query[valueKey] = null;
        }
        const url =qs.stringifyUrl({
            url:window.location.href,
            query
        }, {skipNull:true});
        router.push(url,  { scroll: false })
    }
  return (
    <div className="mb-8">
        <h3 className="font-semibold text-lg">
            {name}
        </h3>
        <hr className="my-4"/>
        <div className="flex flex-wrap gap-2">
            {data.map((filter)=>(
                <div key={filter.id} className="flex items-center">
                    <Button 
                    className={cn(
                        'rounded-lg hover:scale-100 text-sm transition-none translate-0 text-gray-800 bg-white p-2 border border-gray-500',
                        selectedValue ===filter.id && 'bg-black text-white transition-colors'
                    )}
                    onClick={()=> onClick(filter.id)}
                    >
                        {filter.name}
                    </Button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Filter