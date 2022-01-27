import { useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function UserId() {
    let username = useParams();
    return (
        <div>
            <NavLink href="/users"></NavLink>
            <h1>Users: {username}</h1>
        </div>
    )
}

export default UserId;
