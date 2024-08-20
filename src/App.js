import {createBrowserRouter,createRoutesFromElements, Route,RouterProvider} from "react-router-dom"
import Root from './Components/Root';
import './App.css';
import UserList from './Components/UserList';
import User from './Components/User';
import { useEffect, useState } from "react";
import axios from "axios"
import NotFound from "./Components/NotFound";



function App() {

  const [userId, setUserId]= useState('')
  const [userList,setUserList]=useState([])
  const [loading, setLoading]=useState(true)
  const [breadcrumbs,setBreadcrumbs]= useState([])

const updateUserId=(userId)=>{
  setUserId(userId)
}

const updateBreadcrumbs=(crumbUsername,crumbId)=>{
  setBreadcrumbs((b)=>[{crumbUsername:crumbUsername,crumbId:crumbId}, ...b])
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
      <Route path="/" element={<Root breadcrumbs={breadcrumbs} updateUserId={updateUserId}/>}>
        <Route path="/" element={<UserList  userList={userList} updateUserId={updateUserId} updateBreadcrumbs={updateBreadcrumbs}/>}/>
      <Route path="User" element={<User userList={userList} userId={userId} updateUserId={updateUserId} updateBreadcrumbs={updateBreadcrumbs}/>}/>
      
      <Route path="*" element={<NotFound/>} />
      </Route>
      
    )
  )

  return (<>
    <RouterProvider router={router} />
    
  </>
  );
}

export default App;
