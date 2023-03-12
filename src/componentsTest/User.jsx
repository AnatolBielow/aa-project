import RolesEditor from "./Roles"

const User = ({user}) => {
    const {username, roles, id } = user
    return (
       <div>
        <b>{username}</b>
        <p>
            <i>"{roles}"</i>
        </p>
        <RolesEditor roles={roles} id={id}/>
    </div> 
    )
    
}

export default User