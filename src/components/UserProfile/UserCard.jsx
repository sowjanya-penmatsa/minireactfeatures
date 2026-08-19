const UserCard=(props)=>{

    return(
        <div>
          <h2>{props.userName}</h2>
          <p>{props.userAge}</p>
        </div>
    )
}
export default UserCard;