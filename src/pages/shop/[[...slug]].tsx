import { useRouter } from "next/router";

const ShopPage = () => {
    // fungsi dari [...slug] adalah untuk menangkap semua parameter di url
    // contoh seperti /shop/clothes/top/dress
    // agar bisa mengakses url /shop saja ubah menjadi [[...slug]] agar menjadi opsional
    const {query} = useRouter();
    console.log(query);
    return (
        <section>
            <h1>Shop Page</h1>
            <p><strong>Brand Category : </strong>{query?.slug ? query?.slug[0] : "" } - {query?.slug ? query?.slug[1] : ""} - {query?.slug ? query?.slug[2] : ""} </p>
        </section>
    )
};

export default ShopPage;