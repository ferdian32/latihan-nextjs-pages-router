import Link from "next/link";
import { useRouter } from "next/router";
import styles from './Login.module.css';
const LoginViews = () => {
    const router = useRouter();
    const handleLogin = () => {
        router.push('/product');
    }
    return (
        <section className={styles.login}>
            <div>
                
            <div>Login Page</div>
            <button onClick={() => handleLogin()}>Login</button>
            <p>Belum Punya akun ? Registrasi <Link href={'/auth/register'}>Disini</Link></p>
            </div>
        </section>
    )
};

export default LoginViews;