import Hamburger from './Hamburger'
import Logo from './Logo'
import Navigation from "./navigation/Navigation"

const Header = () => {
	return (
		<div className='flex justify-between items-center'>
			<Logo />
			<Navigation />
			<Hamburger />
		</div>
	)
}

export default Header
