import Link from "next/link";

const RegisterPage = () => {
    return (
        <section>
            <div>Register Page</div>
            <p>Sudah Punya akun ? Login <Link href={'/auth/login'}>Disini</Link></p>
        </section>
    )
};

export default RegisterPage;