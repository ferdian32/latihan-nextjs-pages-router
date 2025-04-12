import NavbarElement from "../navbar"


type AppShellProps = {
    children: React.ReactNode
}
const AppShell = (props:AppShellProps) => {
    const {children} = props
    return (
        <div>
            <NavbarElement></NavbarElement>
            {children}
            <footer>Footer Element</footer>
        </div>
    )
};

export default AppShell;