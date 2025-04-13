import styles from './Navbar.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'
export default function NavbarElement () {
    const {data}:any = useSession();
    return (
        <nav className={styles.navbar}>
            <h1>Navbar Element</h1>
            <div>
               {data && data.user.fullName}
            </div>
            {data ? (

                <button onClick={() => signOut()}>Sig out</button>
            ) : (
                <button onClick={() => signIn()}>Sig In</button>

            )}
        </nav>
    )
}