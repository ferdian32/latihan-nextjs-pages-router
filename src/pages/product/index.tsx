import { useRouter } from "next/router";
import { useEffect } from "react";

const ProductPage = () => {
    const isLogin = false;
    const {push} = useRouter();
    useEffect(() => {
        if(!isLogin) {
            push('/auth/login');
        }
    },[])
    return (
        <section>
            <div><h1>Product Page</h1></div>
        </section>
    )
};

export default ProductPage;