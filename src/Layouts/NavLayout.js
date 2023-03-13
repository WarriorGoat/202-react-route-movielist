import {Outlet} from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const NavLayout = () => {
	return (
		<div className="nav-layout">
			<NavBar/>
			<Outlet/>
			<br/>
			<Footer />
		</div>
	)
}

export default NavLayout