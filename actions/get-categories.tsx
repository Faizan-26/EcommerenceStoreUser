import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async ():Promise<Category[]>=>{
    // :Promise<Category[]> this is return type this function fetchs categories from admin panel
    const res = await fetch(URL);
    return res.json();
}
export default getCategories;