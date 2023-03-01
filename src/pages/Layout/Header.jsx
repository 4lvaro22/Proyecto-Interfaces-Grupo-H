import {Link} from "react-router-dom";
import cart from "../../assets/images/cart.svg";

const divStyle = {
    color: 'white',
    textDecoration: 'none',
};
export const Header = () => {
    return (
        <>
            <header><h1><Link to="/" style={divStyle}>FunkoShop</Link></h1>
                <Link to={"/Login"} style={divStyle}><button id="login">Log in</button></Link>
                <Link to={"/SignUp"} style={divStyle}><button id="signup">Sign up</button></Link>
                <Link to={"/Cart"} style={divStyle}><button id="cart"><img src={cart}></img>Cart</button></Link>
            </header>
        </>
    )
}
export default Header;