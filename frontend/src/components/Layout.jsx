import { Outlet } from "react-router-dom"
import NavBar from "./Navbar"


const Layout = () => {
	return (<>
		<header className=' sticky top-0 z-50 bg-dimWhite dark:bg-slate-700'>
			<NavBar />
		</header>
		<main><Outlet /></main>
	</>
	)
}

export default Layout
