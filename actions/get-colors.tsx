import { Color  } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async ():Promise<Color[]>=>{
    // :Promise<Category[]> this is return type this function fetchs categories from admin panel
    const res = await fetch(URL);
    return res.json();
}
export default getColors;