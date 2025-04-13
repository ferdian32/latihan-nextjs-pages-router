type initialTypeProduct = {
        id: number,
        title: string,
        brand: string,
        price: number
}

const ProductViews = ({products} : {products: initialTypeProduct[]}) => {
    return (
        <section>
        <div>
            <h1>Product Page</h1>
            <ul>
                {products ? products.map((item : any) => <li key={item.id}>{item.title}</li>) : ''}
            </ul>
        </div>
    </section>
    )
};

export default ProductViews;