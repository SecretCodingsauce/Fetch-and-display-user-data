export default function User ({userList, userId}){


    const user=userList[userId-1]
  if (!userId){return(<>
       <h2>Not found</h2>
       </>

    )}
    else{
        return (<>
            <h2>{user.name}</h2>
            <h2>Username :  {user.username}</h2>
            <h2>Email : {user.email}</h2>
            <h2>Address : {user.address.street},{user.address.suite},{user.address.city}.</h2>
            <h3>zipcode: {user.address.zipcode}</h3>
            </>
        )
    }
}