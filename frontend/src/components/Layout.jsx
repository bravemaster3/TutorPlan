import { Outlet } from "react-router-dom"
import NavBar from "./Navbar"


const Layout = () => {
	return (<>
		<header className=' sticky top-0 z-50 bg-dimWhite dark:bg-slate-700'>
			<NavBar />
		</header>
		<main className="mx-auto max-w-4xl dark:text-slate-300 bg-zinc-800"><Outlet /></main>
	</>
	)
}

export default Layout
