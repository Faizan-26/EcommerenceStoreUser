import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/ProductList';
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import Container from '@/components/ui/Container';
import React from 'react'

interface ProductPageProps {
    params:{
        productid:string;
    }
}
const ProductPage:React.FC<ProductPageProps> =async ({
    params
}) => {
    console.log("HERE IS PARAMS PRODUCT ID BEFORE FETCH PARAMS", params.productid)
    const product=await getProduct(params.productid)
    console.log("IN PRODUCT ID CATEGORY ID", product)
    const suggestedProducts = await getProducts({
        categoryId: product?.category.id  // this work as a filter 
    }) 
  return (
    <div className='bg-white'>
        <Container>
            <div className='px-4 py-10 sm:px-6 lg:px-8'>
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                  <Gallery images={product.images} />
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <Info data={product} />
                    </div>
                </div>
                <hr  className='my-10'/>
                <ProductList title="Suggested Products" items={suggestedProducts} />
            </div>
        </Container>

    </div>
  )
}

export default ProductPage