import { NavLink, Outlet } from "react-router-dom"

export default function Root ({breadcrumbs, updateUserId}){

let bc0=''
let bc1=''
let bc2=''

if (breadcrumbs[0]){bc0= `| ${breadcrumbs[0].crumbUsername} `}
if (breadcrumbs[1]){bc1= `| ${breadcrumbs[1].crumbUsername} `}
if (breadcrumbs[2]){bc2= `| ${breadcrumbs[2].crumbUsername} `}


    return (
         <div>
            <nav className="sticky top-0 z-50 bg-white  flex justify-between p-4">
                
                <h2 className="text-2xl font-bold">Users</h2>
                <div><NavLink className="underline text-gray-600 hover:text-gray-700 font-semibold" to='/'>UserList </NavLink>
                <NavLink onClick={()=>updateUserId(breadcrumbs[0].crumbId)} className="underline text-gray-600 hover:text-gray-700 font-semibold" to='user'>{`${bc0}`}</NavLink>
                <NavLink onClick={()=>updateUserId(breadcrumbs[1].crumbId)} className="underline text-gray-600 hover:text-gray-700 font-semibold" to='user'>{`${bc1}`}</NavLink>
                <NavLink onClick={()=>updateUserId(breadcrumbs[2].crumbId)} className="underline text-gray-600 hover:text-gray-700 font-semibold" to='user'>{`${bc2}`}</NavLink></div>
                </nav>
        <main className="relative">
            <Outlet />
        </main>
    </div>

    )
}