type initialTypeProduct = {
    status:number;
    statusCode : boolean;
    data : {

        id: number,
        title: string,
        brand: string,
        price: number
    }[]
}

const ProductViews = ({products} : {products: initialTypeProduct}) => {
    return (
        <section>
        <div>
            <h1>Product Page</h1>
            <ul>
                {products.data ? products.data.map((item : any) => <li key={item.id}>{item.title}</li>) : ''}
            </ul>
        </div>
    </section>
    )
};

export default ProductViews;