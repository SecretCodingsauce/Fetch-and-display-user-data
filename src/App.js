import {createBrowserRouter,createRoutesFromElements, Route,RouterProvider} from "react-router-dom"
import Root from './Components/Root';
import './App.css';
import UserList from './Components/UserList';
import User from './Components/User';
import { useEffect, useState } from "react";
import axios from "axios"



function App() {

  const [userId, setUserId]= useState('')
  const [userList,setUserList]=useState([])
  const [loading, setLoading]=useState(true)

const updateUserId=(userId)=>{
  setUserId(userId)
}

  useEffect(()=>{
    let hasEffectRun = false;
    if(!hasEffectRun){axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      setUserList(res.data);
      setLoading(false);
    })
    .catch((err)=>console.error(err))
    hasEffectRun=true}
    
    return () => {
      // Cleanup if necessary
    };

  },[])

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route path="/" element={<UserList  userList={userList} updateUserId={updateUserId}/>}/>
      <Route path="User" element={<User userList={userList} userId={userId} updateUserId={updateUserId}/>}/>
      </Route>
      
    )
  )

  return (<>
    <RouterProvider router={router} />
    
  </>
  );
}

export default App;
