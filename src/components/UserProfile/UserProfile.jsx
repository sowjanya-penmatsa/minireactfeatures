import UserCard from "./UserCard";

const UserProfile=()=>{
   const users = [
  
];

if(users.length===0) return  <p>No users available</p>;

    return(
        <div>
          <h1>UserProfile</h1>
          {
            users.map((user,index)=>{
                return <UserCard key={user.id} userName={user.name} userAge={user.age}/>
            })
          }
        </div>
    )
}
export default UserProfile;