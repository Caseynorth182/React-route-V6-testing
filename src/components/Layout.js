import { NavLink, Link, Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <header>
                <NavLink to="/">Homepage</NavLink>
                <NavLink to="/Aboutpage">Aboutpage</NavLink>
                <NavLink to="/Blogpage">Blogpage</NavLink>
                <NavLink to="/main">main</NavLink>
                <NavLink to="/main222">main222</NavLink>
            </header>

            <Outlet />

            <footer>
                footer
            </footer>
        </>
    )
}

export default Layout;