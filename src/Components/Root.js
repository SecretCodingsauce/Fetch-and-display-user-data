import { NavLink, Outlet } from "react-router-dom"

export default function Root (){

    return (
        <div>
            <nav><h2>Users</h2>
                <NavLink to='/'>Users</NavLink>
                </nav>
        <main>
            <Outlet />
        </main>
    </div>

    )
}