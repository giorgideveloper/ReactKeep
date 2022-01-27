import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import App2 from './App2';

function Users() {
    let url = useLocation();
    console.log(url)
    return (
        <>

            <h1>Users </h1>
            <li><NavLink to={`${url.pathname}ivanov`}>ivanov</NavLink></li>
            <li><NavLink to={`${url.pathname}petrov`}>Petrov</NavLink></li>
            <App2 />
        </>
    );
}

export default Users;
