import { NavLink } from "react-router-dom";

export default function NotFound(){

    return(
        <div className="bg-gray-200">
        <h1 className="text-3xl m-5 font-bold">Page Not Found</h1>
        <NavLink to="/"><p className="underline m-5">Back to UserList</p></NavLink>
    </div>)
}