import { useRouter } from "next/router";
import { useEffect, useState } from "react";
interface initialTypeProduct {
    title : string;
    brand: string;
}
const DetailProductPage = () => {
    const [data,setData] = useState<initialTypeProduct>({
        title : '',
        brand : '',
    });
    const {query} = useRouter();
    const id = query?.id && typeof query.id === 'string'? parseInt(query.id) : null
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const result = await res.json();
            setData(result);
        };
        getData();
    },[id]);
    const {brand,title} = data;
    return (
        <section>
            <div><h1>Detail Product Page : {query?.id}</h1></div>
            <div><strong>Brand Product : </strong>{brand}</div>
            <div><strong>Name Product :</strong> {title}</div>
        </section>
    )
};

export default DetailProductPage;