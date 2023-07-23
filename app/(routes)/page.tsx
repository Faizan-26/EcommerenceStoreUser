import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container"

export const revalidate = 0;
const Homepage = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('ea4bfe6d-ccc3-4606-a375-82ab5d49db95')
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 ">
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  )
}

export default Homepage