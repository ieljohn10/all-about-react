import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navBar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
                <Link to="/login">Log in</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;