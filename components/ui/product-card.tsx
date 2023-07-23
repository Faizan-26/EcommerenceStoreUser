'use client'
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/Currency";
import { useRouter } from "next/navigation";
import {MouseEventHandler} from 'react'
import usePreviewModal from "@/hooks/use-preview-model";
import useCart from "@/hooks/use-cart";
interface ProductCard {
    data : Product;
}
const ProductCard: React.FC<ProductCard> = (
  {
    data
  }
) => {
  const router=useRouter()
  const handleClick= ()=>{
    router.push(`/product/${data?.id}`)
  }
  const cart=useCart()
  const PreviewModel = usePreviewModal()
  const onPreview:MouseEventHandler<HTMLButtonElement> =(event)=>{
    event.stopPropagation();
    PreviewModel.onOpen(data);
  }
  const onAddToCart:MouseEventHandler<HTMLButtonElement> =(event)=>{
    event.stopPropagation();
    cart.addItem(data);
  }
  return (
    <div onClick={handleClick} className="bg-white transition hover:scale-105 hover:translate-1 group cursor-pointer rounded-2xl border p-3 space-y-4">
      <div className="aspect-square rounded-2xl bg-gray-100 relative">
        <Image
        alt="Product Image"
        src={data?.images?.[0]?.url}
        fill
        className="aspect-square object-cover rounded-lg"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
              <div className="flex gap-x-6 justify-center">
                    <IconButton
                    onClick={onPreview}
                    icon={<Expand size={16}  className="text-gray-700"/>}
                    />
                    <IconButton
                    onClick={onAddToCart}
                    icon={<ShoppingCart size={16}  className="text-gray-700"/>}
                    />
              </div>
        </div>
      </div>
      {/* Description here */}
      <div>
        <p className="font-semibold text-lg">
          {data?.name}
        </p>
        <p className="text-sm text-gray-500">
          {data?.category?.name}
        </p>
      </div>
      {/* PRICE HERE */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard