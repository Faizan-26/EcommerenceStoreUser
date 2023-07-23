import { Size  } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async ():Promise<Size[]>=>{
    // :Promise<Category[]> this is return type this function fetchs categories from admin panel
    const res = await fetch(URL);
    return res.json();
}
export default getSizes;