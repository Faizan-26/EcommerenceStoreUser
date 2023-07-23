import { Product } from "@/types";
import Noresult from "./ui/no-result";
import ProductCard from '@/components/ui/product-card'
interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {


  return (
    <div className="space-y-4">
      <h3 className="font-bold  text-3xl mb-2">{title}</h3>
      {items.length === 0 && <Noresult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {items.map((item) => (
          <div>
            {parseInt(item.quantity)>=1 &&   // this will display item only when item quantity greater than 0
            <ProductCard  key={item.id} data={item} />
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList