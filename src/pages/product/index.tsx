import { useRouter } from "next/router";
import { useEffect } from "react";
import ProductViews from "@/views/products";
import useSWR from "swr";

const fetcher = (url:string) => fetch(url).then((res) => res.json())
const ProductPage = () => {
    const isLogin = true;
    //client side rendering (ssr) menggunakan useSWR
    const {data,error,isLoading} = useSWR('/api/products',fetcher);
    const {push} = useRouter();
    useEffect(() => {
        if(!isLogin) {
            push('/auth/login');
        }
    },[]);
    const number = 30;
    console.log(number);
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error while fetching data</div>
    return (
       <ProductViews products={isLoading ? [] : data.data}></ProductViews>
    )
};

export default ProductPage;