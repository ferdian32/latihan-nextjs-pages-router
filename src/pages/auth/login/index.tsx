import Link from "next/link";
import { useRouter } from "next/router";
const LoginPage = () => {
    const router = useRouter();
    const handlerLogin = () => {
        router.push('/product');
    }
    return (
        <section>
            <div>Login Page</div>
            <button onClick={() => handlerLogin()}>Login</button>
            <p>Belum Punya akun ? Registrasi <Link href={'/auth/register'}>Disini</Link></p>
        </section>
    )
};

export default LoginPage;