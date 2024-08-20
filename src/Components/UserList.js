import { NavLink } from "react-router-dom";
const bodyStyle = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: '#f0f0f0',
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
}

export default function UserList({ userList, updateUserId,updateBreadcrumbs ,loading}) {



  return (



    <div style={bodyStyle}>
      <div className="bg-white p-5 rounded-lg shadow-md w-2/3 text-center">
        <h1 className="mb-5 text-2xl text-gray-900">User List</h1>
        {loading && <div >loading...</div>}
        <ul>
          {userList.map(user => ( 
            <NavLink onClick={() => {updateUserId(user.id); updateBreadcrumbs(user.username,user.id)}} key={user.id} to="user"><li className="m-1 p-3 rounded bg-gray-700 text-white hover:bg-slate-600" >{user.name}</li> </NavLink>
          ))}
        </ul>
      </div>
    </div>

  )
}