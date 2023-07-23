import Image from "next/image"
import {Tab} from '@headlessui/react'
import { cn } from "@/lib/utils"

const GalleryTab = (
    {image}
) => {
  return (
    <Tab className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'>
        {/*  THis is render function opening method like below:       {( )}     */}
        {( { selected } ) =>(
            <div>
                
                <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                    <Image 
                    src={image.url}
                    fill
                    alt=''
                    className=" object-cover object-center"
                    />

                </span>
                <span className={cn(
                    'absolute inset-0 rounded-lg ring-1 ring-offset-2',
                    selected ? 'ring-black': 'ring-transparent'
                )} />
            </div>
        )}

    </Tab>
  )
}

export default GalleryTab