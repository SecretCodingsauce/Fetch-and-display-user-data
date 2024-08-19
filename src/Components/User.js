

export default function User({ userList, userId, updateUserId }) {

const switchUserNext=()=>{
    let nextUser=userId +1
    if(nextUser<=userList.length){updateUserId(nextUser)}
    else{console.error("no next user")}
}
const switchUserPrev=()=>{
    let prevUser=userId -1
    if(prevUser>0){updateUserId(prevUser)}
    else{console.error("no prev user")}
}

const bodyStyle={
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
}


    const user = userList[userId - 1]
    if (!userId) {
        return (
            <>
                <h2>Not found</h2>
            </>

        )
    }
    else {
        return (<div style={bodyStyle}>
            <div className="bg-white p-5 rounded-lg shadow w-2/3 h-2/3 text-center" >
                <h1 className="mb-3 text-2xl text-blue-800">{user.name}</h1>
                <p className="font-bold text-gray-600 text-lg">{user.username}</p>

                <div className="mt-4 pb-4 border-y border-gray-400 pt-5 text-sm">
                    <p className="m-1">{user.address.suite},{user.address.street},{user.address.city},{user.address.zipcode}</p>
                    <p className="m-1">{user.phone}</p>
                    <p className="m-1">{user.email}</p>
                </div>
                <div className=" pb-4 border-b border-gray-400 pt-5 text-sm">
                    <p className="m-1">Website-{user.website}</p>
                    <p className="m-1">Company-{user.company.name}</p>
                    <p className="m-1">{user.company.catchphrase}</p>
                </div>
                <div className="buttons">
            <button onClick={switchUserPrev}>
                previous user
            </button>
            <button onClick={switchUserNext}>
               next user
            </button>
            </div>
            </div>
              
        </div>
        )
    }
}