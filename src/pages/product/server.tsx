import ProductViews from "@/views/products"
// membuat server side rendering
// perbedaan dengan client side rendering adalah ketika menggunakan server side rendering maka data akan diambil langsung dari server tanpa perlu di render di client dan data akan lebih cepat tanpa adanya delay / menampilkan skeleton ui
const ProductPage = ({products} : {products: any}) => {
    return <ProductViews products={products} />
};
export default ProductPage;
export const getServerSideProps = async() => {
    const res = await fetch('http://localhost:3000/api/products');
    const result = await res.json();
    return {
        props: {
            products : result.data
        }
    }
}
  