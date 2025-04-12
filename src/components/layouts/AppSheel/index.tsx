import { useRouter } from "next/router";
import NavbarElement from "../navbar"


type AppShellProps = {
    children: React.ReactNode
}
const disabledNavbar = ['/auth/login','/auth/register','/404'];
const AppShell = (props:AppShellProps) => {
    const {children} = props;
    const {pathname} = useRouter();
    return (
        <div>
            {disabledNavbar.includes(pathname) ? null : <NavbarElement />}
            {children}
            <footer>Footer Element</footer>
        </div>
    )
};

export default AppShell;