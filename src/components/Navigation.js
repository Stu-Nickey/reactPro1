import { Link } from "react-router-dom";

function Navigation(){
    return(
        <>
            <ul type="none">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/showprod">Show Products</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/category">Category</Link></li>
                <li><Link to="/newproduct">Add new Products</Link></li>
            </ul>
        </>
    )
}
export default Navigation;