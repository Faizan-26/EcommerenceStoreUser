import { Product } from "@/types";
// for this install pkg query-string    
import qs from "query-string";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query{
    categoryId?:string;
    colorId?:string;
    sizeId?:string;
    isFeatured?:boolean;
}

const getProducts = async (query:Query):Promise<Product[]>=>{
    const url= qs.stringifyUrl({
        url:URL,
        query:{
            colorId:query.colorId,
            sizeId:query.sizeId,
            categoryId:query.categoryId,
            isFeatured:query.isFeatured,
        }
    })
    // :Promise<Category[]> this is return type this function fetchs categories from admin panel
    const res = await fetch(url);
    return res.json();
}
export default getProducts;
