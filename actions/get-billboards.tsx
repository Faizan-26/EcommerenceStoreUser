import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id:string):Promise<Billboard>=>{
    // :Promise<Category[]> this is return type this function fetchs categories from admin panel
    const res = await fetch(`${URL}/${id}`);
    return res.json();
}
export default getBillboard;