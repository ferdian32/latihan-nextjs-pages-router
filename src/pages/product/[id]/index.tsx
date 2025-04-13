import { useRouter } from "next/router";
import { use } from "react";
import useSWR from "swr";

// const fetcher = (url:string) => fetch(url).then((res) => res.json())
// // percobaan menggunakan client side rendering
// const DetailProductPage = () => {
    
//     const {query} = useRouter();
//     const id = query?.id && typeof query.id === 'string'? parseInt(query.id) : null
//     const {data,error,isLoading} = useSWR(`/api/products/${id}`,fetcher);
//     if(error) return <div>Error while fetching data</div>
//     if(isLoading) return <div>Loading ...</div>
//     return (
//         <section>
//             <div><h1>Detail Product Page : {id}</h1></div>
//             <div><strong>Brand Product : </strong>{data?.brand}</div>
//             <div><strong>Name Product :</strong> {data?.title}</div>
//         </section>
//     )
// };

// export default DetailProductPage;




// percobaan menggunakan server side rendering
const DetailProductPage = ({product} : {product:any}) => {
    const {query} = useRouter();
    return (
        <section>
            <div><h1>Detail Product Page : {query?.id}</h1></div>
            <div><strong>Brand Product : </strong>{product?.brand}</div>
            <div><strong>Name Product :</strong> {product?.title}</div>
        </section>
    )
};

export default DetailProductPage;

// export async function getServerSideProps({params}:{params:{id:any}}) {
//     try {
//         const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
//         if(!res.ok) {
//             throw new Error('Error while fetching data');
//         };
//         const result = await res.json();
//         return {
//             props : {
//                 product : result.data
//             }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// percobaan menggunakan static side rendering
// jika dijalankan maka akan menampilkan pesan error Error: getStaticPaths is required for dynamic SSG pages and is missing for '/product/[id]'.
// pesan error ini menanandakan bahwa kita tidak bisa menjalankan static page di halaman dynamic page karena default dari next js adalah dynamic page
// untuk mencegahnya menggunakan getStaticPaths

export async function getStaticPaths() {
    try {
        const res = await fetch('http://localhost:3000/api/products');
        if(!res.ok) {
            throw new Error('Error while fetching data');
        };
        const result = await res.json();
        const paths = result.data.map((product:any) => ({
            params : {
                id : product.id.toString()
            }
        }));
        return {
            paths,
            fallback : false
        }
    } catch (error) {
        console.log(error);
    }
}
export async function getStaticProps({params}:{params:{id:any}}) {
    try {
        const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
        if(!res.ok) {
            throw new Error('Error while fetching data');
        };
        const result = await res.json();
        return {
            props : {
                product : result.data
            }
        }
    } catch (error) {
        console.log(error);
    }
}