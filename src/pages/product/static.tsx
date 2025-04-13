import ProductViews from "@/views/products";


type initialTypeProduct = {id: number, title: string,image:string, brand: string, price: number};
/*perbedaan antara server side generatic dengan server side rendering adalah 
1.ketika sudah mode production server side generatic perlu di build terlebih dahulu kemudian di deploy ke server sedangkan server side rendering langsung di deploy ke server
2. ketika menambahkan data dan menghapus data server side generatic perlu di build ulang nanti data akan bertambah / terhapus sedangkan server side rendering tidak perlu di build ulang
*/
const ProductPage = ({products} : {products:initialTypeProduct[]}) => {
   
    return (
        <ProductViews products={products}></ProductViews>
    )
};

export default ProductPage;


export const getStaticProps = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/products');
        if(!res.ok) {
            throw new Error('Error while fetching data');
        };
        const result = await res.json();
        return {
            props : {
                products : result.data
            }
        }
    } catch (error) {
        console.log(error);
    }
}