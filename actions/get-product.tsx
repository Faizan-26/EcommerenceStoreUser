import { Product } from "@/types";
//  this page is for showing suggestions of productts 
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id:string):Promise<Product>=>{
    // :Promise<Category[]> this is return type this function fetchs categories from admin panel
    const res = await fetch(`${URL}/${id}`);
    return res.json();
}
export default getProduct;