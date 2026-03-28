import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header>
                <div>
                    <div><img src="/images/logo.webp" alt="Sweet Scoop Ice Cream Logo"/></div>
                </div>

                <div>
                    <h1>Sweet Scoop Ice Cream Shop</h1>
                </div>
            </header>

            <div className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/flavors'>Flavors</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    );
}

export default Header;