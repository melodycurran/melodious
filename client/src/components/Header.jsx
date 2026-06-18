import Navigation from './Navigation'



function Header() {
	return (
		<header className="flex flex-col items-center justify-center gap-4">
			<a href="/" className="text-4xl font-bold">
				<h1>Listn</h1>
			</a>
			<Navigation />
		</header>
	)
}

export default Header